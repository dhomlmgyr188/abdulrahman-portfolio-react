import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaMicrosoft,
} from "react-icons/fa";

import { SiMysql, SiPostman } from "react-icons/si";

const iconMap = {
    React: {
        icon: FaReact,
        color: "var(--color-react)",
    },
    JavaScript: {
        icon: FaJs,
        color: "var(--color-js)",
    },
    HTML: {
        icon: FaHtml5,
        color: "var(--color-html)",
    },
    CSS: {
        icon: FaCss3Alt,
        color: "var(--color-css)",
    },
    Git: {
        icon: FaGitAlt,
        color: "var(--color-git)",
    },
    SQL: {
        icon: SiMysql,
        color: "var(--color-sql)",
    },
    "REST API": {
        icon: SiPostman,
        color: "var(--color-rest_api)",
    },
    "Microsoft 365": {
        icon: FaMicrosoft,
        color: "var(--color-ms365)",
    }
};

const TechIcon = ({ name }) => {
    const tech = iconMap[name];

    if (!tech) return null;

    const Icon = tech.icon;

    return <Icon style={{ color: tech.color, width: "var(--size-ml)", height: "var(--size-ml)" }} />;
};

export default TechIcon;