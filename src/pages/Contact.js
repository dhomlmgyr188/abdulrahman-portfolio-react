
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Turnstile } from "@marsidev/react-turnstile";

import {
  FiMail,
  FiPhone,
  FiSend,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiChevronDown,
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiPaperclip,
  FiUploadCloud,
  FiX,
  FiFileText,
  FiRefreshCw,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaSnapchatGhost,
} from "react-icons/fa";

import BreadCrumb from "../Components/ui/Breadcrumb";

import {
  SectionSTitle,
  SectionLightDesc,
  PageHeader,
  PageHeaderContainer,
} from "../Components/ui/T";

/* =========================================
   CONFIGURATION
========================================= */

const EDGE_FUNCTION_URL =
  "https://odjamyrqnamvqyzzqiow.supabase.co/functions/v1/upload-contact-attachment";

const TURNSTILE_SITE_KEY =
  "0x4AAAAAAFryCxCaPlh1qRrw";

const DRAFT_KEY =
  "abdulrahman-contact-draft-v2";

const MAX_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;

const ALLOWED_MIME_TYPES = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "text/plain": [".txt"],
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
  "application/vnd.ms-powerpoint": [".ppt"],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
    ".pptx",
  ],
  "application/zip": [".zip"],
  "application/x-zip-compressed": [".zip"],
};

const ACCEPTED_EXTENSIONS = [
  ...new Set(
    Object.values(ALLOWED_MIME_TYPES).flat()
  ),
];

const CONTACT = {
  email: "dhomlmgyr@gmail.com",
  phone: "966541590819",
  whatsapp: "https://wa.me/966541590819",
  linkedin: "https://linkedin.com/in/dhomlmgyr",
  github: "https://github.com/dhomlmgyr188",
  instagram:
    "https://www.instagram.com/dhomlmgyr",
  snapchat:
    "https://www.snapchat.com/t/0jbJpmvk",
};

const TOPICS = [
  "general",
  "question",
  "suggestion",
  "feedback",
  "collaboration",
  "employment",
  "project",
  "other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  customTopic: "",
  message: "",
  botcheck: "",
};

/* =========================================
   HELPERS
========================================= */

const validateEmail = (email) => {
  const value = email.trim();

  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
};

const normalizePhone = (value) =>
  value.trim().replace(/[\s()-]/g, "");

const validatePhone = (phone) => {
  if (!phone.trim()) return true;

  return /^\+[1-9]\d{7,14}$/.test(
    normalizePhone(phone)
  );
};

const getExtension = (name) => {
  const index = name.lastIndexOf(".");

  return index === -1
    ? ""
    : name.slice(index).toLowerCase();
};

const formatSize = (bytes) =>
  `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const readDraft = () => {
  try {
    const saved =
      sessionStorage.getItem(DRAFT_KEY) ||
      sessionStorage.getItem(
        "abdulrahman-contact-draft-v1"
      );

    if (!saved) return { ...initialForm };

    const parsed = JSON.parse(saved);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      return { ...initialForm };
    }

    return {
      ...initialForm,
      firstName: String(
        parsed.firstName || ""
      ).slice(0, 80),
      lastName: String(
        parsed.lastName || ""
      ).slice(0, 80),
      email: String(
        parsed.email || ""
      ).slice(0, 254),
      phone: String(
        parsed.phone || ""
      ).slice(0, 25),
      topic: TOPICS.includes(parsed.topic)
        ? parsed.topic
        : "",
      customTopic: String(
        parsed.customTopic || ""
      ).slice(0, 120),
      message: String(
        parsed.message || ""
      ).slice(0, 5000),
      botcheck: "",
    };
  } catch {
    return { ...initialForm };
  }
};

const saveDraft = (form) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      topic,
      customTopic,
      message,
    } = form;

    sessionStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        topic,
        customTopic,
        message,
      })
    );
  } catch {
    // Storage unavailable.
  }
};

const clearDraft = () => {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
    sessionStorage.removeItem(
      "abdulrahman-contact-draft-v1"
    );
  } catch {
    // Ignore storage errors.
  }
};

/* =========================================
   ANIMATIONS
========================================= */

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/* =========================================
   CONTACT PAGE
   OCEAN LIGHT / ORCA DARK
========================================= */

const ContactPage = styled.main`
  --contact-bg: var(--color-background);
  --contact-panel-bg: var(--color-surface);
  --contact-input-bg: var(--color-input-background);
  --contact-text: var(--color-text-primary);
  --contact-muted: var(--color-text-secondary);
  --contact-border: var(--color-border);
  --contact-accent: var(--color-primary);
  --contact-accent-text: var(--color-on-primary);
  --contact-soft: var(--color-primary-soft);
  --contact-focus: var(--color-border-focus);

  width: 100%;
  min-width: 0;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  /*
    Uses the site's actual theme variables.
    Dark section background remains black.
  */

  [data-theme="dark"] & {
    --contact-bg: var(--color-background);
    --contact-panel-bg: var(--color-surface);
    --contact-input-bg: var(--color-input-background);
    --contact-text: var(--color-text-primary);
    --contact-muted: var(--color-text-secondary);
    --contact-border: var(--color-border);
    --contact-accent: var(--color-primary);
    --contact-accent-text: var(--color-on-primary);
    --contact-soft: var(--color-primary-soft);
    --contact-focus: var(--color-border-focus);
  }
`;

const ContactContainer = styled.div`
  width: min(
    calc(100% - 40px),
    var(--container-width, 1200px)
  );

  max-width: 100%;
  min-width: 0;

  margin-inline: auto;
`;

const ContactSection = styled.section`
  width: 100%;
  min-width: 0;

  padding: 60px 0 90px;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  @media (max-width: 768px) {
    padding: 35px 0 60px;
  }
`;

const ContactLayout = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(300px, 0.8fr);

  gap: 35px;
  align-items: start;

  width: 100%;
  min-width: 0;

  > * {
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/* =========================================
   PANELS
========================================= */

const Panel = styled.div`
  min-width: 0;
  padding: 32px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  border: 1px solid var(--contact-border);
  border-radius: 18px;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 600px) {
    padding: 22px 18px;
  }
`;

const PanelTitle = styled.h2`
  margin: 0 0 10px;

  font-size: clamp(21px, 2.5vw, 27px);
  font-weight: 700;

  color: var(--contact-text);
`;

const PanelDescription = styled.p`
  margin: 0 0 28px;

  font-size: 14px;
  line-height: 1.9;

  color: var(--contact-muted);
`;

/* =========================================
   FORM
========================================= */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const FormRow = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  min-width: 0;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;

  color: var(--contact-text);
`;

const Required = styled.span`
  color: var(--color-danger);
  margin-inline-start: 3px;
`;

const FieldStyle = `
  width: 100%;
  min-width: 0;
  min-height: 49px;

  padding: 12px 15px;

  border: 1px solid var(--contact-border);
  border-radius: 9px;

  background-color: var(--contact-input-bg);
  color: var(--contact-text);

  font-family: inherit;
  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &::placeholder {
    color: var(--color-input-placeholder);
    opacity: 1;
  }

  &:focus {
    border-color: var(--contact-focus);
    box-shadow: 0 0 0 3px
      color-mix(
        in srgb,
        var(--contact-focus) 15%,
        transparent
      );
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  ${FieldStyle}
`;

const Textarea = styled.textarea`
  ${FieldStyle}

  min-height: 155px;
  resize: vertical;
  line-height: 1.8;
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    inset-inline-end: 15px;
    top: 50%;

    transform: translateY(-50%);

    pointer-events: none;
    color: var(--contact-muted);
  }
`;

const Select = styled.select`
  ${FieldStyle}

  appearance: none;
  cursor: pointer;
  padding-inline-end: 40px;

  option {
    color: var(--contact-text);
    background-color: var(--contact-input-bg);
  }
`;

const FormNote = styled.p`
  margin: -5px 0 0;

  font-size: 12px;
  line-height: 1.8;

  color: var(--contact-muted);
`;

const HiddenField = styled.div`
  position: absolute;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: 0;

  overflow: hidden;
  clip-path: inset(50%);

  white-space: nowrap;
  border: 0;
  pointer-events: none;
`;

/* =========================================
   ATTACHMENTS
========================================= */

const UploadArea = styled.div`
  padding: 25px 20px;

  border: 1px dashed var(--contact-border);
  border-radius: 12px;

  background-color: var(--contact-input-bg);
  color: var(--contact-text);

  text-align: center;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: var(--contact-focus);
  }
`;

const UploadIcon = styled(FiUploadCloud)`
  display: block;
  margin: 0 auto 12px;

  font-size: 30px;
  color: var(--contact-accent);
`;

const UploadTitle = styled.p`
  margin: 0 0 6px;

  font-size: 14px;
  font-weight: 600;

  color: var(--contact-text);
`;

const UploadDescription = styled.p`
  margin: 0 0 14px;

  font-size: 12px;
  line-height: 1.8;

  color: var(--contact-muted);
`;

const UploadButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;

  border: 1px solid var(--contact-border);
  border-radius: 8px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  font: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: var(--contact-focus);
    color: var(--contact-text);
    background-color: var(--contact-soft);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-top: 12px;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  min-width: 0;
  padding: 11px 13px;

  border: 1px solid var(--contact-border);
  border-radius: 9px;

  background-color: var(--contact-input-bg);
`;

const FileIcon = styled(FiFileText)`
  flex-shrink: 0;
  font-size: 21px;
  color: var(--contact-accent);
`;

const FileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  min-width: 0;
  flex: 1;

  strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 12px;
    font-weight: 600;

    color: var(--contact-text);
  }

  small {
    font-size: 11px;
    color: var(--contact-muted);
  }
`;

const RemoveFileButton = styled.button`
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;
  flex-shrink: 0;

  border: none;
  border-radius: 7px;

  background-color: transparent;
  color: var(--color-danger);

  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: var(--color-danger-soft);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FileSummary = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  color: var(--contact-muted);
`;

/* =========================================
   TURNSTILE
========================================= */

const TurnstileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;
  overflow: hidden;
`;

const TurnstileWrapper = styled.div`
  max-width: 100%;
  min-height: 65px;
  overflow: hidden;
`;

const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  align-self: flex-start;

  padding: 7px 11px;

  border: 1px solid var(--contact-border);
  border-radius: 7px;

  background-color: transparent;
  color: var(--contact-text);

  font: inherit;
  font-size: 12px;

  cursor: pointer;

  &:hover {
    background-color: var(--contact-soft);
  }
`;

/* =========================================
   SUBMIT BUTTON

   LIGHT:
   Ocean blue background / white text

   DARK:
   White background / black text
========================================= */

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  width: 100%;
  min-height: 52px;
  padding: 13px 22px;

  border: 1px solid var(--color-primary);
  border-radius: 9px;

  background-color: var(--color-button-background);
  color: var(--color-button-text);

  font-family: inherit;
  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    color: var(--color-on-primary);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
    font-size: 18px;
    color: currentColor;
    stroke: currentColor;
  }
`;

const LoadingIcon = styled(FiLoader)`
  animation: ${spin} 1s linear infinite;
`;

/* =========================================
   STATUS MESSAGES
========================================= */

const StatusMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  padding: 16px;
  border-radius: 11px;

  background-color: ${({ $success }) =>
    $success
      ? "rgba(22, 163, 74, 0.08)"
      : "var(--color-danger-soft)"};

  color: ${({ $success }) =>
    $success
      ? "#16a34a"
      : "var(--color-danger)"};

  > svg {
    flex-shrink: 0;
    font-size: 22px;
    margin-top: 2px;
  }

  strong {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: inherit;
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.9;
    color: inherit;
  }
`;

/* =========================================
   SIDEBAR
========================================= */

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 22px;

  min-width: 0;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px 0;

  color: var(--contact-text);
  text-decoration: none;

  border-bottom: 1px solid var(--contact-border);

  transition: color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--contact-accent);
  }
`;

const ContactIcon = styled.span`
  width: 45px;
  height: 45px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  color: var(--contact-accent);
  background-color: var(--contact-soft);

  font-size: 20px;
`;

const ContactItemText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;

  min-width: 0;
  flex: 1;

  strong {
    font-size: 14px;
    font-weight: 600;
    color: var(--contact-text);
  }

  small {
    font-size: 13px;
    font-weight: 400;
    color: var(--contact-muted);
    overflow-wrap: anywhere;
  }
`;

const ExternalIcon = styled(FiArrowUpRight)`
  flex-shrink: 0;
  color: var(--contact-muted);
`;

/* =========================================
   RESPONSE TIME
========================================= */

const ResponseTime = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  padding: 18px;
  border-radius: 12px;

  background-color: var(--contact-soft);

  > svg {
    font-size: 24px;
    flex-shrink: 0;
    color: var(--contact-accent);
  }

  strong {
    display: block;
    margin-bottom: 6px;

    font-size: 14px;
    color: var(--contact-text);
  }

  p {
    margin: 0;

    font-size: 13px;
    line-height: 1.9;

    color: var(--contact-muted);
  }
`;

/* =========================================
   SOCIAL LINKS

   Hover contrast:
   LIGHT -> Ocean blue / white icon
   DARK  -> White / black icon
========================================= */

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 18px;
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid var(--contact-border);
  border-radius: 10px;

  background-color: var(--contact-panel-bg);
  color: var(--contact-text);

  font-size: 19px;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    color: currentColor;
  }

  &:hover,
  &:focus-visible {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-on-primary);
    transform: translateY(-2px);
  }

  &:hover svg,
  &:focus-visible svg {
    color: currentColor;
  }
`;

/* =========================================
   CONTACT COMPONENT
========================================= */

const Contact = () => {
  const { t, i18n } = useTranslation("contact");

  const isArabic =
    i18n.language?.startsWith("ar");

  const localText = (ar, en) =>
    isArabic ? ar : en;

  const [form, setForm] = useState(readDraft);
  const [files, setFiles] = useState([]);

  const [
    turnstileToken,
    setTurnstileToken,
  ] = useState("");

  const [
    turnstileState,
    setTurnstileState,
  ] = useState("loading");

  const [status, setStatus] =
    useState("idle");

  const [
    customError,
    setCustomError,
  ] = useState("");

  const [sentVia, setSentVia] =
    useState("email");

  const submittingRef = useRef(false);
  const fileInputRef = useRef(null);
  const turnstileRef = useRef(null);
  const skipDraftSaveRef = useRef(false);

  const busy = status === "loading";

  /* =====================================
     SAVE DRAFT
  ===================================== */

  useEffect(() => {
    if (skipDraftSaveRef.current) {
      skipDraftSaveRef.current = false;
      return;
    }

    saveDraft(form);
  }, [form]);

  /* =====================================
     STATUS HELPERS
  ===================================== */

  const setError = (message) => {
    setCustomError(message);
    setStatus("error");
  };

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileState("loading");

    try {
      turnstileRef.current?.reset();
    } catch {
      setTurnstileState("error");
    }
  };

  /* =====================================
     FORM INPUTS
  ===================================== */

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "topic" &&
      value !== "other"
        ? { customTopic: "" }
        : {}),
    }));

    if (!busy && status !== "idle") {
      setStatus("idle");
      setCustomError("");
    }
  };

  /* =====================================
     ATTACHMENTS
  ===================================== */

  const addFiles = (event) => {
    const selected = Array.from(
      event.target.files || []
    );

    event.target.value = "";

    if (!selected.length || busy) return;

    const nextFiles = [
      ...files,
      ...selected,
    ];

    if (nextFiles.length > MAX_FILES) {
      setError(
        localText(
          "يمكنك إرفاق 3 ملفات كحد أقصى.",
          "You can attach up to 3 files."
        )
      );
      return;
    }

    for (const file of selected) {
      if (
        file.size === 0 ||
        file.size > MAX_FILE_SIZE
      ) {
        setError(
          localText(
            `حجم الملف "${file.name}" غير مسموح. الحد الأقصى 5 MB لكل ملف.`,
            `Invalid size for "${file.name}". Maximum 5 MB per file.`
          )
        );
        return;
      }

      const extension = getExtension(
        file.name
      );

      if (
        !ACCEPTED_EXTENSIONS.includes(
          extension
        ) ||
        !ALLOWED_MIME_TYPES[
          file.type
        ]?.includes(extension)
      ) {
        setError(
          localText(
            `نوع الملف "${file.name}" غير مدعوم.`,
            `Unsupported file type: "${file.name}".`
          )
        );
        return;
      }
    }

    const totalSize = nextFiles.reduce(
      (sum, file) =>
        sum + file.size,
      0
    );

    if (totalSize > MAX_TOTAL_SIZE) {
      setError(
        localText(
          "إجمالي حجم المرفقات يجب ألا يتجاوز 15 MB.",
          "Total attachment size must not exceed 15 MB."
        )
      );
      return;
    }

    setFiles(nextFiles);
    setStatus("idle");
    setCustomError("");
  };

  const removeFile = (index) => {
    if (busy) return;

    setFiles((previous) =>
      previous.filter(
        (_, currentIndex) =>
          currentIndex !== index
      )
    );

    setStatus("idle");
    setCustomError("");
  };

  const totalFileSize = files.reduce(
    (sum, file) =>
      sum + file.size,
    0
  );

  /* =====================================
     SUBMIT
  ===================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const firstName =
      form.firstName.trim();

    const lastName =
      form.lastName.trim();

    const email =
      form.email.trim();

    const phone =
      normalizePhone(form.phone);

    const message =
      form.message.trim();

    const selectedTopic =
      form.topic === "other"
        ? form.customTopic.trim()
        : form.topic
          ? t(`topics.${form.topic}`)
          : "";

    if (
      !firstName ||
      firstName.length > 80 ||
      !lastName ||
      lastName.length > 80 ||
      !validateEmail(email) ||
      !validatePhone(phone) ||
      !selectedTopic ||
      selectedTopic.length > 120 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      setStatus("invalid");
      setCustomError("");
      return;
    }

    if (form.botcheck) {
      setError(
        localText(
          "تعذر التحقق من الطلب.",
          "Unable to validate the request."
        )
      );
      return;
    }

    if (!turnstileToken) {
      setError(
        localText(
          "يرجى الانتظار حتى يكتمل التحقق الأمني، ثم حاول الإرسال مجددًا.",
          "Please wait for security verification to complete, then try again."
        )
      );

      if (
        turnstileState === "error" ||
        turnstileState === "expired"
      ) {
        resetTurnstile();
      }

      return;
    }

    submittingRef.current = true;
    setStatus("loading");
    setCustomError("");

    try {
      const payload = new FormData();

      payload.append(
        "firstName",
        firstName
      );

      payload.append(
        "lastName",
        lastName
      );

      payload.append(
        "email",
        email
      );

      payload.append(
        "phone",
        phone
      );

      payload.append(
        "preferredContact",
        phone ? "whatsapp" : "email"
      );

      payload.append(
        "topic",
        selectedTopic
      );

      payload.append(
        "message",
        message
      );

      payload.append(
        "botcheck",
        form.botcheck
      );

      payload.append(
        "turnstileToken",
        turnstileToken
      );

      files.forEach((file) => {
        payload.append(
          "files",
          file,
          file.name
        );
      });

      const response = await fetch(
        EDGE_FUNCTION_URL,
        {
          method: "POST",
          body: payload,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response
        .json()
        .catch(() => null);

      if (
        !response.ok ||
        result?.success !== true
      ) {
        if (response.status === 429) {
          throw new Error(
            localText(
              "تم تجاوز الحد المسموح من الرسائل. يرجى المحاولة لاحقًا.",
              "Too many messages. Please try again later."
            )
          );
        }

        if (response.status === 413) {
          throw new Error(
            localText(
              "حجم الطلب كبير جدًا. حاول إرسال ملفات أصغر.",
              "The request is too large. Try smaller files."
            )
          );
        }

        if (response.status === 403) {
          throw new Error(
            localText(
              "فشل التحقق الأمني أو انتهت صلاحيته. يرجى إعادة المحاولة.",
              "Security verification failed or expired. Please retry."
            )
          );
        }

        if (response.status === 503) {
          throw new Error(
            localText(
              "خدمة الإرسال غير متاحة مؤقتًا. يرجى المحاولة لاحقًا.",
              "The submission service is temporarily unavailable. Please try later."
            )
          );
        }

        throw new Error(
          localText(
            "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
            "Unable to send your message. Please try again."
          )
        );
      }

      setSentVia(
        phone ? "whatsapp" : "email"
      );

      skipDraftSaveRef.current = true;
      clearDraft();

      setForm({
        ...initialForm,
      });

      setFiles([]);
      setStatus("success");
      setCustomError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        error.message ||
          localText(
            "حدث خطأ غير متوقع.",
            "An unexpected error occurred."
          )
      );
    } finally {
      submittingRef.current = false;
      resetTurnstile();
    }
  };

  /* =====================================
     CONTACT METHODS
  ===================================== */

  const contactMethods = [
    {
      id: "email",
      icon: FiMail,
      title: t("methods.email"),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      title: t("methods.whatsapp"),
      value: t("methods.whatsappValue"),
      href: CONTACT.whatsapp,
    },
    {
      id: "phone",
      icon: FiPhone,
      title: t("methods.phone"),
      value: `+${CONTACT.phone}`,
      href: `tel:+${CONTACT.phone}`,
    },
  ];

  const socialMedia = [
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: FiLinkedin,
      href: CONTACT.linkedin,
    },
    {
      id: "github",
      title: "GitHub",
      icon: FiGithub,
      href: CONTACT.github,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      icon: FaWhatsapp,
      href: CONTACT.whatsapp,
    },
    {
      id: "email",
      title: "Email",
      icon: FiMail,
      href: `mailto:${CONTACT.email}`,
    },
    {
      id: "instagram",
      title: "Instagram",
      icon: FiInstagram,
      href: CONTACT.instagram,
    },
    {
      id: "snapchat",
      title: "Snapchat",
      icon: FaSnapchatGhost,
      href: CONTACT.snapchat,
    },
  ];

  /* =====================================
     RENDER
  ===================================== */

  return (
    <ContactPage
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* PAGE HEADER */}

      <PageHeader>
        <BreadCrumb value="contact" />

        <PageHeaderContainer>
          <SectionSTitle
            value="contact:page.title"
          />

          <SectionLightDesc
            value="contact:page.description"
          />
        </PageHeaderContainer>
      </PageHeader>

      {/* CONTACT SECTION */}

      <ContactSection>
        <ContactContainer>
          <ContactLayout>
            {/* CONTACT FORM */}

            <Panel>
              <PanelTitle>
                {t("form.title")}
              </PanelTitle>

              <PanelDescription>
                {t("form.description")}
              </PanelDescription>

              <Form
                onSubmit={handleSubmit}
              >
                {/* NAME */}

                <FormRow>
                  <FormGroup>
                    <Label
                      htmlFor="firstName"
                    >
                      {t("form.firstName")}
                      <Required>*</Required>
                    </Label>

                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      maxLength={80}
                      value={form.firstName}
                      onChange={updateField}
                      placeholder={t(
                        "form.firstNamePlaceholder"
                      )}
                      disabled={busy}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label
                      htmlFor="lastName"
                    >
                      {t("form.lastName")}
                      <Required>*</Required>
                    </Label>

                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      maxLength={80}
                      value={form.lastName}
                      onChange={updateField}
                      placeholder={t(
                        "form.lastNamePlaceholder"
                      )}
                      disabled={busy}
                      required
                    />
                  </FormGroup>
                </FormRow>

                {/* EMAIL */}

                <FormGroup>
                  <Label htmlFor="email">
                    {t("form.email")}
                    <Required>*</Required>
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    dir="ltr"
                    autoComplete="email"
                    maxLength={254}
                    value={form.email}
                    onChange={updateField}
                    placeholder="example@email.com"
                    disabled={busy}
                    required
                  />

                  <FormNote>
                    {localText(
                      "يرجى إدخال بريد إلكتروني صحيح، فقد نستخدمه للرد على رسالتك.",
                      "Please enter a valid email address, as we may use it to reply to your message."
                    )}
                  </FormNote>
                </FormGroup>

                {/* MOBILE NUMBER */}

                <FormGroup>
                  <Label htmlFor="phone">
                    {localText(
                      "رقم الجوال",
                      "Mobile Number"
                    )}
                  </Label>

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={25}
                    value={form.phone}
                    onChange={updateField}
                    placeholder="+966541234567"
                    disabled={busy}
                    aria-describedby="phoneHint"
                  />

                  <FormNote id="phoneHint">
                    {localText(
                      "يرجى إدخال رقم جوال صحيح مع مفتاح الدولة، فقد نستخدمه للرد على رسالتك عبر واتساب.",
                      "Please enter a valid mobile number with the country code, as we may use it to reply to your message via WhatsApp."
                    )}
                  </FormNote>
                </FormGroup>

                {/* TOPIC */}

                <FormGroup>
                  <Label htmlFor="topic">
                    {t("form.topic")}
                    <Required>*</Required>
                  </Label>

                  <SelectWrapper>
                    <Select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={updateField}
                      disabled={busy}
                      required
                    >
                      <option value="">
                        {t(
                          "form.selectTopic"
                        )}
                      </option>

                      {TOPICS.map(
                        (topic) => (
                          <option
                            key={topic}
                            value={topic}
                          >
                            {t(
                              `topics.${topic}`
                            )}
                          </option>
                        )
                      )}
                    </Select>

                    <FiChevronDown />
                  </SelectWrapper>
                </FormGroup>

                {/* CUSTOM TOPIC */}

                {form.topic ===
                  "other" && (
                  <FormGroup>
                    <Label
                      htmlFor="customTopic"
                    >
                      {t(
                        "form.customTopic"
                      )}
                      <Required>
                        *
                      </Required>
                    </Label>

                    <Input
                      id="customTopic"
                      name="customTopic"
                      type="text"
                      maxLength={120}
                      value={
                        form.customTopic
                      }
                      onChange={
                        updateField
                      }
                      placeholder={t(
                        "form.customTopicPlaceholder"
                      )}
                      disabled={busy}
                      required
                    />
                  </FormGroup>
                )}

                {/* MESSAGE */}

                <FormGroup>
                  <Label htmlFor="message">
                    {t("form.message")}
                    <Required>*</Required>
                  </Label>

                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    minLength={10}
                    maxLength={5000}
                    value={form.message}
                    onChange={updateField}
                    placeholder={t(
                      "form.messagePlaceholder"
                    )}
                    disabled={busy}
                    required
                  />

                  <FileSummary>
                    <span />

                    <span dir="ltr">
                      {form.message.length}
                      {" / "}
                      5000
                    </span>
                  </FileSummary>
                </FormGroup>

                {/* HONEYPOT */}

                <HiddenField
                  aria-hidden="true"
                >
                  <label
                    htmlFor="botcheck"
                  >
                    Leave this field empty
                  </label>

                  <input
                    id="botcheck"
                    name="botcheck"
                    type="text"
                    value={
                      form.botcheck
                    }
                    onChange={
                      updateField
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </HiddenField>

                {/* ATTACHMENTS */}

                <FormGroup>
                  <Label
                    htmlFor="contactFiles"
                  >
                    {localText(
                      "المرفقات",
                      "Attachments"
                    )}
                  </Label>

                  <UploadArea>
                    <UploadIcon />

                    <UploadTitle>
                      {localText(
                        "إرفاق ملفات مع الرسالة",
                        "Attach files to your message"
                      )}
                    </UploadTitle>

                    <UploadDescription>
                      {localText(
                        "يمكنك إرفاق 3 ملفات بحد أقصى، 5 MB لكل ملف و15 MB إجمالًا.",
                        "Up to 3 files, 5 MB per file and 15 MB total."
                      )}
                    </UploadDescription>

                    <input
                      ref={fileInputRef}
                      id="contactFiles"
                      type="file"
                      multiple
                      accept={ACCEPTED_EXTENSIONS.join(
                        ","
                      )}
                      onChange={
                        addFiles
                      }
                      disabled={busy}
                      style={{
                        display: "none",
                      }}
                    />

                    <UploadButton
                      type="button"
                      disabled={
                        busy ||
                        files.length >=
                          MAX_FILES
                      }
                      onClick={() =>
                        fileInputRef.current?.click()
                      }
                    >
                      <FiPaperclip />

                      {localText(
                        "اختيار الملفات",
                        "Choose Files"
                      )}
                    </UploadButton>
                  </UploadArea>

                  {files.length > 0 && (
                    <FileList>
                      {files.map(
                        (file, index) => (
                          <FileItem
                            key={`${file.name}-${file.size}-${index}`}
                          >
                            <FileIcon />

                            <FileDetails>
                              <strong
                                title={
                                  file.name
                                }
                              >
                                {
                                  file.name
                                }
                              </strong>

                              <small>
                                {formatSize(
                                  file.size
                                )}
                              </small>
                            </FileDetails>

                            <RemoveFileButton
                              type="button"
                              onClick={() =>
                                removeFile(
                                  index
                                )
                              }
                              disabled={
                                busy
                              }
                              aria-label={localText(
                                "حذف الملف",
                                "Remove file"
                              )}
                            >
                              <FiX />
                            </RemoveFileButton>
                          </FileItem>
                        )
                      )}
                    </FileList>
                  )}

                  <FileSummary>
                    <span>
                      {localText(
                        `${files.length} من ${MAX_FILES} ملفات`,
                        `${files.length} of ${MAX_FILES} files`
                      )}
                    </span>

                    <span dir="ltr">
                      {formatSize(
                        totalFileSize
                      )}
                      {" / "}
                      15 MB
                    </span>
                  </FileSummary>

                  <FormNote>
                    {localText(
                      "تُحفظ بيانات النموذج عند تحديث الصفحة، ولكن يجب إعادة اختيار المرفقات.",
                      "Your form details are preserved on refresh, but attachments must be selected again."
                    )}
                  </FormNote>
                </FormGroup>

                {/* TURNSTILE */}

                <TurnstileContainer>
                  <Label>
                    {localText(
                      "التحقق الأمني",
                      "Security Verification"
                    )}
                    <Required>*</Required>
                  </Label>

                  <TurnstileWrapper>
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={
                        TURNSTILE_SITE_KEY
                      }
                      options={{
                        theme: "auto",
                        language:
                          isArabic
                            ? "ar"
                            : "en",
                        retry: "auto",
                        "retry-interval":
                          2000,
                        "refresh-expired":
                          "auto",
                        "refresh-timeout":
                          "auto",
                      }}
                      onSuccess={(
                        token
                      ) => {
                        setTurnstileToken(
                          token
                        );
                        setTurnstileState(
                          "success"
                        );
                      }}
                      onExpire={() => {
                        setTurnstileToken(
                          ""
                        );
                        setTurnstileState(
                          "expired"
                        );
                      }}
                      onError={() => {
                        setTurnstileToken(
                          ""
                        );
                        setTurnstileState(
                          "error"
                        );
                      }}
                    />
                  </TurnstileWrapper>

                  {turnstileState ===
                    "success" && (
                    <FormNote
                      style={{
                        color:
                          "#16a34a",
                      }}
                    >
                      <FiCheckCircle
                        style={{
                          display:
                            "inline",
                          verticalAlign:
                            "middle",
                          marginInlineEnd:
                            5,
                        }}
                      />

                      {localText(
                        "تم التحقق بنجاح.",
                        "Verification completed successfully."
                      )}
                    </FormNote>
                  )}

                  {(turnstileState ===
                    "error" ||
                    turnstileState ===
                      "expired") && (
                    <>
                      <FormNote>
                        {localText(
                          "تعذر إكمال التحقق أو انتهت صلاحيته. يمكنك إعادة المحاولة دون تحديث الصفحة.",
                          "Verification failed or expired. You can retry without refreshing the page."
                        )}
                      </FormNote>

                      <RetryButton
                        type="button"
                        onClick={
                          resetTurnstile
                        }
                      >
                        <FiRefreshCw />

                        {localText(
                          "إعادة التحقق",
                          "Retry Verification"
                        )}
                      </RetryButton>
                    </>
                  )}
                </TurnstileContainer>

                {/* SUCCESS MESSAGE */}

                {status ===
                  "success" && (
                  <StatusMessage
                    $success
                    role="status"
                    aria-live="polite"
                  >
                    <FiCheckCircle />

                    <div>
                      <strong>
                        {localText(
                          "تم إرسال رسالتك بنجاح!",
                          "Your message was sent successfully!"
                        )}
                      </strong>

                      <p>
                        {localText(
                          "شكرًا لتواصلك. سأراجع رسالتك وأرد عليك في أقرب وقت ممكن، عادةً خلال 24 ساعة.",
                          "Thank you for reaching out. I'll review your message and respond as soon as possible, usually within 24 hours."
                        )}
                      </p>

                      <p
                        style={{
                          marginTop: 8,
                        }}
                      >
                        {sentVia ===
                        "whatsapp"
                          ? localText(
                              "قد أتواصل معك عبر واتساب على الرقم الذي أرفقته، لذا يُرجى التأكد من صحته.",
                              "I may contact you via WhatsApp at the number you provided, so please make sure it is correct."
                            )
                          : localText(
                              "سيكون الرد عبر بريدك الإلكتروني. يُرجى متابعة صندوق الوارد والبريد غير المرغوب فيه.",
                              "I'll reply via email. Please check your inbox and spam folder."
                            )}
                      </p>
                    </div>
                  </StatusMessage>
                )}

                {/* INVALID FORM */}

                {status ===
                  "invalid" && (
                  <StatusMessage
                    role="alert"
                  >
                    <FiAlertCircle />

                    <div>
                      <strong>
                        {localText(
                          "يرجى مراجعة البيانات",
                          "Please review your details"
                        )}
                      </strong>

                      <p>
                        {localText(
                          "تأكد من تعبئة الحقول المطلوبة بشكل صحيح، وأن الرسالة لا تقل عن 10 أحرف. إذا أدخلت رقم جوال، فتأكد من كتابته بصيغة دولية تبدأ بعلامة + ومفتاح الدولة.",
                          "Complete the required fields correctly and enter at least 10 characters. If you provide a mobile number, use international format starting with + and the country code."
                        )}
                      </p>
                    </div>
                  </StatusMessage>
                )}

                {/* ERROR */}

                {status ===
                  "error" && (
                  <StatusMessage
                    role="alert"
                  >
                    <FiAlertCircle />

                    <div>
                      <strong>
                        {localText(
                          "تعذر إرسال الرسالة",
                          "Message not sent"
                        )}
                      </strong>

                      <p>
                        {customError}
                      </p>
                    </div>
                  </StatusMessage>
                )}

                {/* SUBMIT */}

                <SubmitButton
                  type="submit"
                  disabled={busy}
                >
                  {busy ? (
                    <>
                      <LoadingIcon />

                      {localText(
                        "جارٍ إرسال الرسالة...",
                        "Sending Message..."
                      )}
                    </>
                  ) : (
                    <>
                      <FiSend />

                      {localText(
                        "إرسال الرسالة",
                        "Send Message"
                      )}
                    </>
                  )}
                </SubmitButton>
              </Form>
            </Panel>

            {/* SIDEBAR */}

            <Sidebar>
              {/* CONTACT INFORMATION */}

              <Panel>
                <PanelTitle>
                  {localText(
                    "معلومات التواصل",
                    "Contact Information"
                  )}
                </PanelTitle>

                <PanelDescription>
                  {localText(
                    "يمكنك التواصل معي مباشرة من خلال الوسائل التالية.",
                    "You can contact me directly using the following methods."
                  )}
                </PanelDescription>

                {contactMethods.map(
                  (method) => {
                    const Icon =
                      method.icon;

                    return (
                      <ContactItem
                        key={
                          method.id
                        }
                        href={
                          method.href
                        }
                        target={
                          method.id ===
                          "whatsapp"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          method.id ===
                          "whatsapp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <ContactIcon>
                          <Icon />
                        </ContactIcon>

                        <ContactItemText>
                          <strong>
                            {
                              method.title
                            }
                          </strong>

                          <small>
                            {
                              method.value
                            }
                          </small>
                        </ContactItemText>

                        <ExternalIcon />
                      </ContactItem>
                    );
                  }
                )}
              </Panel>

              {/* RESPONSE TIME */}

              <Panel>
                <ResponseTime>
                  <FiClock />

                  <div>
                    <strong>
                      {localText(
                        "وقت الاستجابة المتوقع",
                        "Expected Response Time"
                      )}
                    </strong>

                    <p>
                      {localText(
                        "عادةً ما أرد على الرسائل خلال 24 ساعة، وقد يختلف وقت الاستجابة حسب الظروف.",
                        "I usually respond to messages within 24 hours, although response times may vary depending on circumstances."
                      )}
                    </p>
                  </div>
                </ResponseTime>
              </Panel>

              {/* SOCIAL MEDIA */}

              <Panel>
                <PanelTitle>
                  {localText(
                    "التواصل الاجتماعي",
                    "Social Profiles"
                  )}
                </PanelTitle>

                <PanelDescription>
                  {localText(
                    "تابع حساباتي المهنية أو تواصل معي عبر منصات التواصل الاجتماعي.",
                    "Explore my professional profiles or connect with me on social media."
                  )}
                </PanelDescription>

                <SocialLinks>
                  {socialMedia.map(
                    (social) => {
                      const Icon =
                        social.icon;

                      return (
                        <SocialLink
                          key={
                            social.id
                          }
                          href={
                            social.href
                          }
                          title={
                            social.title
                          }
                          aria-label={
                            social.title
                          }
                          target={
                            social.id ===
                            "email"
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            social.id ===
                            "email"
                              ? undefined
                              : "noopener noreferrer"
                          }
                        >
                          <Icon />
                        </SocialLink>
                      );
                    }
                  )}
                </SocialLinks>
              </Panel>
            </Sidebar>
          </ContactLayout>
        </ContactContainer>
      </ContactSection>
    </ContactPage>
  );
};

export default Contact;
