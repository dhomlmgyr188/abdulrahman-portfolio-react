import {IconButton} from "../ui/Button/Button";
import { useTheme } from "../../context/ThemeContext";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";



const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "light" ? <FaMoon color="var(--color-blue)"/> : <FaSun color="var(--color-yellow)"/>}
    </IconButton>
  );
};

export default ThemeToggle;