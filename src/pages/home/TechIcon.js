
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { FiCode } from "react-icons/fi";

const iconMap = {
  React: FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Git: FaGitAlt,
  SQL: SiMysql,
  MySQL: SiMysql,
  "REST API": SiPostman,
  "Microsoft 365": FaMicrosoft,
};

const TechIcon = ({ name }) => {
  const Icon = iconMap[name] || FiCode;

  return (
    <Icon
      aria-hidden="true"
      style={{
        color: "var(--color-primary)",
        width: "19px",
        height: "19px",
      }}
    />
  );
};

export default TechIcon;
