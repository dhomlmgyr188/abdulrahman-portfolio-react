
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
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

import { FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

import BreadCrumb from "../Components/ui/Breadcrumb";
import { PageHeader } from "../Components/ui/T";

/* =====================================================
   CONFIGURATION
===================================================== */

const EDGE_FUNCTION_URL =
  "https://odjamyrqnamvqyzzqiow.supabase.co/functions/v1/upload-contact-attachment";

const TURNSTILE_SITE_KEY = "0x4AAAAAAFryCxCaPlh1qRrw";

const DRAFT_KEY = "abdulrahman-contact-draft-v2";

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
  ...new Set(Object.values(ALLOWED_MIME_TYPES).flat()),
];

const ICONS = {
  mail: FiMail,
  phone: FiPhone,
  whatsapp: FaWhatsapp,
  linkedin: FiLinkedin,
  github: FiGithub,
  instagram: FiInstagram,
  snapchat: FaSnapchatGhost,
};

const DEFAULT_TOPICS = [
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

/* =====================================================
   HELPERS
===================================================== */

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

  return /^\+[1-9]\d{7,14}$/.test(normalizePhone(phone));
};

const getExtension = (name) => {
  const index = name.lastIndexOf(".");

  return index === -1 ? "" : name.slice(index).toLowerCase();
};

const formatSize = (bytes) =>
  `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const readDraft = () => {
  try {
    const saved =
      sessionStorage.getItem(DRAFT_KEY) ||
      sessionStorage.getItem("abdulrahman-contact-draft-v1");

    if (!saved) return { ...initialForm };

    const parsed = JSON.parse(saved);

    if (!parsed || typeof parsed !== "object") {
      return { ...initialForm };
    }

    return {
      ...initialForm,
      firstName: String(parsed.firstName || "").slice(0, 80),
      lastName: String(parsed.lastName || "").slice(0, 80),
      email: String(parsed.email || "").slice(0, 254),
      phone: String(parsed.phone || "").slice(0, 25),
      topic: DEFAULT_TOPICS.includes(parsed.topic)
        ? parsed.topic
        : "",
      customTopic: String(parsed.customTopic || "").slice(0, 120),
      message: String(parsed.message || "").slice(0, 5000),
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
    sessionStorage.removeItem("abdulrahman-contact-draft-v1");
  } catch {
    // Ignore storage errors.
  }
};

const validateForm = (form, topics = DEFAULT_TOPICS) => {
  const errors = {};

  const firstName = form.firstName.trim();
  const lastName = form.lastName.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const customTopic = form.customTopic.trim();
  const message = form.message.trim();

  if (!firstName || firstName.length > 80) {
    errors.firstName = true;
  }

  if (!lastName || lastName.length > 80) {
    errors.lastName = true;
  }

  if (!validateEmail(email)) {
    errors.email = true;
  }

  if (phone && !validatePhone(phone)) {
    errors.phone = true;
  }

  if (!topics.includes(form.topic)) {
    errors.topic = true;
  }

  if (
    form.topic === "other" &&
    (!customTopic || customTopic.length > 120)
  ) {
    errors.customTopic = true;
  }

  if (message.length < 10 || message.length > 5000) {
    errors.message = true;
  }

  return errors;
};

/* =====================================================
   ANIMATIONS
===================================================== */

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/* =====================================================
   PAGE LAYOUT
===================================================== */

const ContactPage = styled.main`
  --contact-bg: var(--color-background);
  --contact-panel-bg: var(--color-surface);
  --contact-input-bg: var(--color-input-background);
  --contact-text: var(--color-text-primary);
  --contact-muted: var(--color-text-secondary);
  --contact-border: var(--color-border);
  --contact-accent: var(--color-primary);
  --contact-soft: var(--color-primary-soft);
  --contact-focus: var(--color-border-focus);
  --contact-error-border: var(--color-danger);
  --contact-error-focus: var(--color-danger);

  width: 100%;
  min-width: 0;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
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

  padding: 35px 0 90px;

  background-color: var(--contact-bg);
  color: var(--contact-text);

  @media (max-width: 768px) {
    padding: 24px 0 60px;
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

/* =====================================================
   PANELS
===================================================== */

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
  margin: 0 0 24px;

  font-size: clamp(21px, 2.5vw, 27px);
  font-weight: 700;

  color: var(--contact-text);
`;

/* =====================================================
   FORM
===================================================== */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

const FieldStyle = css`
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
    outline: none;
    box-shadow: 0 0 0 2px
      color-mix(
        in srgb,
        var(--contact-focus) 15%,
        transparent
      );
  }

  &[aria-invalid="true"] {
    border-color: var(--contact-error-border);
  }

  &[aria-invalid="true"]:focus {
    border-color: var(--contact-error-focus);

    box-shadow: 0 0 0 2px
      color-mix(
        in srgb,
        var(--contact-error-focus) 12%,
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

/* =====================================================
   ATTACHMENTS
===================================================== */

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

/* =====================================================
   TURNSTILE
===================================================== */

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

/* =====================================================
   SUBMIT BUTTON
===================================================== */

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

/* =====================================================
   STATUS MESSAGES
===================================================== */

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

/* =====================================================
   SIDEBAR
===================================================== */

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
`;

/* =====================================================
   CONTACT COMPONENT
===================================================== */

const Contact = () => {
  const { t, i18n } = useTranslation("contact");

  const isArabic = i18n.language?.startsWith("ar");

  /* =====================================================
     JSON DATA
  ===================================================== */

  const contactData = t("contactData", {
    returnObjects: true,
  });

  const topicOptionsData = t("topicOptions", {
    returnObjects: true,
  });

  const contactMethodsData = t("contactMethods", {
    returnObjects: true,
  });

  const socialMediaData = t("socialMedia", {
    returnObjects: true,
  });

  const topicOptions = Array.isArray(topicOptionsData)
    ? topicOptionsData
    : DEFAULT_TOPICS;

  const contactMethodsConfig = Array.isArray(contactMethodsData)
    ? contactMethodsData
    : [];

  const socialMediaConfig = Array.isArray(socialMediaData)
    ? socialMediaData
    : [];

  const getContactUrl = (id) => {
    if (id === "email") {
      return `mailto:${contactData.email}`;
    }

    if (id === "phone") {
      return `tel:+${contactData.phone}`;
    }

    return contactData[id] || "#";
  };

  const contactMethods = contactMethodsConfig.map((item) => ({
    id: item.id,
    icon: ICONS[item.icon] || FiMail,
    title: t(item.titleKey),
    value:
      item.id === "phone"
        ? `+${contactData.phone}`
        : t(item.valueKey),
    href: getContactUrl(item.id),
  }));

  const socialMedia = socialMediaConfig.map((item) => ({
    id: item.id,
    title: item.title,
    icon: ICONS[item.icon] || FiMail,
    href: getContactUrl(item.id),
  }));

  /* =====================================================
     STATE
  ===================================================== */

  const [form, setForm] = useState(readDraft);
  const [files, setFiles] = useState([]);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileState, setTurnstileState] = useState("loading");

  const [status, setStatus] = useState("idle");
  const [customError, setCustomError] = useState("");
  const [sentVia, setSentVia] = useState("email");

  const [validationEnabled, setValidationEnabled] =
    useState(false);

  const submittingRef = useRef(false);
  const fileInputRef = useRef(null);
  const turnstileRef = useRef(null);
  const skipDraftSaveRef = useRef(false);

  const busy = status === "loading";

  const errors = validationEnabled
    ? validateForm(form, topicOptions)
    : {};

  const isInvalid = (name) => Boolean(errors[name]);

  /* =====================================================
     SAVE DRAFT
  ===================================================== */

  useEffect(() => {
    if (skipDraftSaveRef.current) {
      skipDraftSaveRef.current = false;
      return;
    }

    saveDraft(form);
  }, [form]);

  /* =====================================================
     STATUS HELPERS
  ===================================================== */

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

  /* =====================================================
     INPUT HANDLING
  ===================================================== */

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "topic" && value !== "other"
        ? { customTopic: "" }
        : {}),
    }));

    if (!busy && status !== "idle") {
      setStatus("idle");
      setCustomError("");
    }
  };

  /* =====================================================
     ATTACHMENTS
  ===================================================== */

  const addFiles = (event) => {
    const selected = Array.from(event.target.files || []);

    event.target.value = "";

    if (!selected.length || busy) return;

    const nextFiles = [...files, ...selected];

    if (nextFiles.length > MAX_FILES) {
      setError(
        t("status.maxFiles", {
          max: MAX_FILES,
        })
      );
      return;
    }

    for (const file of selected) {
      if (file.size === 0 || file.size > MAX_FILE_SIZE) {
        setError(
          t("status.invalidFileSize", {
            name: file.name,
            max: MAX_FILE_SIZE / (1024 * 1024),
          })
        );
        return;
      }

      const extension = getExtension(file.name);

      if (
        !ACCEPTED_EXTENSIONS.includes(extension) ||
        !ALLOWED_MIME_TYPES[file.type]?.includes(extension)
      ) {
        setError(
          t("status.invalidFileType", {
            name: file.name,
          })
        );
        return;
      }
    }

    const totalSize = nextFiles.reduce(
      (sum, file) => sum + file.size,
      0
    );

    if (totalSize > MAX_TOTAL_SIZE) {
      setError(
        t("status.totalSize", {
          max: MAX_TOTAL_SIZE / (1024 * 1024),
        })
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
      previous.filter((_, currentIndex) => currentIndex !== index)
    );

    setStatus("idle");
    setCustomError("");
  };

  const totalFileSize = files.reduce(
    (sum, file) => sum + file.size,
    0
  );

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;

    setValidationEnabled(true);

    const nextErrors = validateForm(form, topicOptions);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      setCustomError("");

      const firstInvalidField = Object.keys(nextErrors)[0];

      requestAnimationFrame(() => {
        document.getElementById(firstInvalidField)?.focus();
      });

      return;
    }

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();
    const phone = normalizePhone(form.phone);
    const message = form.message.trim();

    const selectedTopic =
      form.topic === "other"
        ? form.customTopic.trim()
        : t(`topics.${form.topic}`);

    if (form.botcheck) {
      setError(t("status.botcheck"));
      return;
    }

    if (!turnstileToken) {
      setError(t("status.turnstileRequired"));

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

      payload.append("firstName", firstName);
      payload.append("lastName", lastName);
      payload.append("email", email);
      payload.append("phone", phone);

      payload.append(
        "preferredContact",
        phone ? "whatsapp" : "email"
      );

      payload.append("topic", selectedTopic);
      payload.append("message", message);
      payload.append("botcheck", form.botcheck);
      payload.append("turnstileToken", turnstileToken);

      files.forEach((file) => {
        payload.append("files", file, file.name);
      });

      const response = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        if (response.status === 429) {
          throw new Error(t("status.rateLimit"));
        }

        if (response.status === 413) {
          throw new Error(t("status.requestTooLarge"));
        }

        if (response.status === 403) {
          throw new Error(t("status.securityError"));
        }

        if (response.status === 503) {
          throw new Error(t("status.serviceUnavailable"));
        }

        throw new Error(t("status.error"));
      }

      setSentVia(phone ? "whatsapp" : "email");

      skipDraftSaveRef.current = true;
      clearDraft();

      setForm({ ...initialForm });
      setFiles([]);

      setValidationEnabled(false);
      setStatus("success");
      setCustomError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setError(error.message || t("status.unexpected"));
    } finally {
      submittingRef.current = false;
      resetTurnstile();
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <ContactPage dir={isArabic ? "rtl" : "ltr"}>
      {/* BREADCRUMB */}

      <PageHeader>
        <BreadCrumb value="contact" />
      </PageHeader>

      {/* CONTACT SECTION */}

      <ContactSection>
        <ContactContainer>
          <ContactLayout>
            {/* CONTACT FORM */}

            <Panel>
              <PanelTitle>{t("form.title")}</PanelTitle>

              <Form onSubmit={handleSubmit} noValidate>
                {/* NAME */}

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="firstName">
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
                      placeholder={t("form.firstNamePlaceholder")}
                      disabled={busy}
                      required
                      aria-invalid={isInvalid("firstName")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="lastName">
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
                      placeholder={t("form.lastNamePlaceholder")}
                      disabled={busy}
                      required
                      aria-invalid={isInvalid("lastName")}
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
                    placeholder={t("form.emailPlaceholder")}
                    disabled={busy}
                    required
                    aria-invalid={isInvalid("email")}
                  />

                </FormGroup>

                {/* PHONE */}

                <FormGroup>
                  <Label htmlFor="phone">
                    {t("form.phone")}
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
                    placeholder={t("form.phonePlaceholder")}
                    disabled={busy}
                    aria-invalid={isInvalid("phone")}
                  />

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
                      aria-invalid={isInvalid("topic")}
                    >
                      <option value="">
                        {t("form.selectTopic")}
                      </option>

                      {topicOptions.map((topic) => (
                        <option key={topic} value={topic}>
                          {t(`topics.${topic}`)}
                        </option>
                      ))}
                    </Select>

                    <FiChevronDown aria-hidden="true" />
                  </SelectWrapper>
                </FormGroup>

                {/* CUSTOM TOPIC */}

                {form.topic === "other" && (
                  <FormGroup>
                    <Label htmlFor="customTopic">
                      {t("form.customTopic")}
                      <Required>*</Required>
                    </Label>

                    <Input
                      id="customTopic"
                      name="customTopic"
                      type="text"
                      maxLength={120}
                      value={form.customTopic}
                      onChange={updateField}
                      placeholder={t("form.customTopicPlaceholder")}
                      disabled={busy}
                      required
                      aria-invalid={isInvalid("customTopic")}
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
                    placeholder={t("form.messagePlaceholder")}
                    disabled={busy}
                    required
                    aria-invalid={isInvalid("message")}
                  />

                  <FileSummary>
                    <span />

                    <span dir="ltr">
                      {form.message.length} / 5000
                    </span>
                  </FileSummary>
                </FormGroup>

                {/* HONEYPOT */}

                <HiddenField aria-hidden="true">
                  <label htmlFor="botcheck">
                    {t("form.honeypot")}
                  </label>

                  <input
                    id="botcheck"
                    name="botcheck"
                    type="text"
                    value={form.botcheck}
                    onChange={updateField}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </HiddenField>

                {/* ATTACHMENTS */}

                <FormGroup>
                  <Label htmlFor="contactFiles">
                    {t("form.attachments")}
                  </Label>

                  <UploadArea>
                    <UploadIcon aria-hidden="true" />

                    <UploadTitle>
                      {t("form.uploadTitle")}
                    </UploadTitle>

                    <UploadDescription>
                      {t("form.uploadDescription")}
                    </UploadDescription>

                    <input
                      ref={fileInputRef}
                      id="contactFiles"
                      type="file"
                      multiple
                      accept={ACCEPTED_EXTENSIONS.join(",")}
                      onChange={addFiles}
                      disabled={busy}
                      style={{ display: "none" }}
                    />

                    <UploadButton
                      type="button"
                      disabled={busy || files.length >= MAX_FILES}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FiPaperclip />

                      {t("form.chooseFiles")}
                    </UploadButton>
                  </UploadArea>

                  {files.length > 0 && (
                    <FileList>
                      {files.map((file, index) => (
                        <FileItem
                          key={`${file.name}-${file.size}-${index}`}
                        >
                          <FileIcon aria-hidden="true" />

                          <FileDetails>
                            <strong title={file.name}>
                              {file.name}
                            </strong>

                            <small>
                              {formatSize(file.size)}
                            </small>
                          </FileDetails>

                          <RemoveFileButton
                            type="button"
                            onClick={() => removeFile(index)}
                            disabled={busy}
                            aria-label={t("form.removeFile")}
                          >
                            <FiX />
                          </RemoveFileButton>
                        </FileItem>
                      ))}
                    </FileList>
                  )}

                  <FileSummary>
                    <span>
                      {t("form.filesCount", {
                        count: files.length,
                        max: MAX_FILES,
                      })}
                    </span>

                    <span dir="ltr">
                      {formatSize(totalFileSize)} / 15 MB
                    </span>
                  </FileSummary>

                </FormGroup>

                {/* TURNSTILE */}

                <TurnstileContainer>
                  <Label>
                    {t("form.securityTitle")}
                    <Required>*</Required>
                  </Label>

                  <TurnstileWrapper>
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      options={{
                        theme: "auto",
                        language: isArabic ? "ar" : "en",
                        retry: "auto",
                        "retry-interval": 2000,
                        "refresh-expired": "auto",
                        "refresh-timeout": "auto",
                      }}
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                        setTurnstileState("success");
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                        setTurnstileState("expired");
                      }}
                      onError={() => {
                        setTurnstileToken("");
                        setTurnstileState("error");
                      }}
                    />
                  </TurnstileWrapper>

                  {turnstileState === "success" && (
                    <FormNote
                      style={{ color: "#16a34a" }}
                    >
                      <FiCheckCircle
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          marginInlineEnd: 5,
                        }}
                      />

                      {t("form.securitySuccess")}
                    </FormNote>
                  )}

                  {(turnstileState === "error" ||
                    turnstileState === "expired") && (
                      <>
                        <FormNote>
                          {t("form.securityFailed")}
                        </FormNote>

                        <RetryButton
                          type="button"
                          onClick={resetTurnstile}
                        >
                          <FiRefreshCw />

                          {t("form.retryVerification")}
                        </RetryButton>
                      </>
                    )}
                </TurnstileContainer>

                {/* SUCCESS */}

                {status === "success" && (
                  <StatusMessage
                    $success
                    role="status"
                    aria-live="polite"
                  >
                    <FiCheckCircle />

                    <div>
                      <strong>
                        {t("status.successTitle")}
                      </strong>

                      <p>
                        {t("status.successDescription")}
                      </p>

                      <p style={{ marginTop: 8 }}>
                        {sentVia === "whatsapp"
                          ? t("status.successWhatsapp")
                          : t("status.successEmail")}
                      </p>
                    </div>
                  </StatusMessage>
                )}

                {/* INVALID FORM */}

                {status === "invalid" && (
                  <StatusMessage role="alert">
                    <FiAlertCircle />

                    <div>
                      <strong>
                        {t("status.invalidTitle")}
                      </strong>

                      <p>
                        {t("status.invalidDescription")}
                      </p>
                    </div>
                  </StatusMessage>
                )}

                {/* SUBMISSION ERROR */}

                {status === "error" && (
                  <StatusMessage role="alert">
                    <FiAlertCircle />

                    <div>
                      <strong>
                        {t("status.errorTitle")}
                      </strong>

                      <p>{customError}</p>
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
                      {t("form.sending")}
                    </>
                  ) : (
                    <>
                      <FiSend />
                      {t("form.submit")}
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
                  {t("info.title")}
                </PanelTitle>

                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <ContactItem
                      key={method.id}
                      href={method.href}
                      target={
                        method.id === "whatsapp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        method.id === "whatsapp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <ContactIcon>
                        <Icon />
                      </ContactIcon>

                      <ContactItemText>
                        <strong>
                          {method.title}
                        </strong>

                        <small>
                          {method.value}
                        </small>
                      </ContactItemText>

                      <ExternalIcon />
                    </ContactItem>
                  );
                })}
              </Panel>

              {/* RESPONSE TIME */}

              <Panel>
                <ResponseTime>
                  <FiClock />

                  <div>
                    <strong>
                      {t("availability.title")}
                    </strong>

                    <p>
                      {t("availability.description")}
                    </p>
                  </div>
                </ResponseTime>
              </Panel>

              {/* SOCIAL MEDIA */}

              <Panel>
                <PanelTitle>
                  {t("social.title")}
                </PanelTitle>

                <SocialLinks>
                  {socialMedia.map((social) => {
                    const Icon = social.icon;

                    return (
                      <SocialLink
                        key={social.id}
                        href={social.href}
                        title={social.title}
                        aria-label={social.title}
                        target={
                          social.id === "email"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          social.id === "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        <Icon />
                      </SocialLink>
                    );
                  })}
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
