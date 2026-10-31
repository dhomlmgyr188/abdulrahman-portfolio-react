
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

/* =========================================================
   THEME CONFIGURATION
========================================================= */

const THEME_STORAGE_KEY = "theme";

const DEFAULT_THEME = "light";

const THEMES = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});

/* =========================================================
   THEME HELPERS
========================================================= */

/**
 * Check whether a theme value is supported.
 *
 * Only "light" and "dark" are valid.
 */

const isValidTheme = (value) =>
  value === THEMES.LIGHT ||
  value === THEMES.DARK;

/**
 * Read the saved theme safely.
 *
 * Invalid or unavailable stored values
 * fall back to the default light theme.
 */

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const savedTheme =
      window.localStorage.getItem(
        THEME_STORAGE_KEY
      );

    return isValidTheme(savedTheme)
      ? savedTheme
      : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

/**
 * Save the selected theme.
 *
 * Storage failures should never interrupt
 * the application's normal operation.
 */

const saveTheme = (theme) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    );
  } catch {
    // Ignore unavailable or restricted storage.
  }
};

/**
 * Apply the theme to the HTML element.
 *
 * GlobalStyles and CSS variables depend
 * on the data-theme attribute.
 */

const applyTheme = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const normalizedTheme = isValidTheme(theme)
    ? theme
    : DEFAULT_THEME;

  document.documentElement.setAttribute(
    "data-theme",
    normalizedTheme
  );

  /*
   * Inform the browser that native controls
   * should match the selected color scheme.
   */

  document.documentElement.style.colorScheme =
    normalizedTheme;
};

/* =========================================================
   CONTEXT
========================================================= */

const ThemeContext = createContext(undefined);

/*
 * useLayoutEffect applies the theme before
 * the browser paints the updated interface.
 *
 * The fallback avoids server-side warnings
 * in environments without a DOM.
 */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined"
    ? useLayoutEffect
    : useEffect;

/* =========================================================
   THEME PROVIDER
========================================================= */

export const ThemeProvider = ({ children }) => {
  /* -------------------------
     THEME STATE
  ------------------------- */

  const [theme, setThemeState] = useState(
    getInitialTheme
  );

  /* -------------------------
     APPLY AND SAVE THEME
  ------------------------- */

  useIsomorphicLayoutEffect(() => {
    applyTheme(theme);
    saveTheme(theme);
  }, [theme]);

  /* -------------------------
     SET THEME
  ------------------------- */

  /**
   * Allows explicitly selecting a theme.
   *
   * Invalid values are ignored.
   */

  const setTheme = useCallback((nextTheme) => {
    if (!isValidTheme(nextTheme)) {
      return;
    }

    setThemeState(nextTheme);
  }, []);

  /* -------------------------
     TOGGLE THEME
  ------------------------- */

  /**
   * Preserves the existing toggleTheme API.
   */

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) =>
      currentTheme === THEMES.LIGHT
        ? THEMES.DARK
        : THEMES.LIGHT
    );
  }, []);

  /* -------------------------
     SYNC BETWEEN TABS
  ------------------------- */

  /**
   * If the user changes the theme in another
   * tab, synchronize the current tab.
   */

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleStorageChange = (event) => {
      if (
        event.key !== THEME_STORAGE_KEY &&
        event.key !== null
      ) {
        return;
      }

      if (
        event.storageArea !==
        window.localStorage
      ) {
        return;
      }

      const nextTheme = isValidTheme(
        event.newValue
      )
        ? event.newValue
        : DEFAULT_THEME;

      setThemeState(nextTheme);
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  /* -------------------------
     CONTEXT VALUE
  ------------------------- */

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/* =========================================================
   USE THEME HOOK
========================================================= */

/**
 * Access the active theme from any component.
 *
 * Example:
 *
 * const { theme, toggleTheme } = useTheme();
 */

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useTheme must be used within a ThemeProvider."
    );
  }

  return context;
};
