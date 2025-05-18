// src/data/navLinks.js
import { FiHome, FiCalendar, FiUser, FiBarChart2, FiSettings, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';

const general = [
    { id: 1, label: "Dashboard", icon: <FiHome /> },
    { id: 2, label: "Appointments", icon: <FiCalendar /> },
    { id: 3, label: "Patients", icon: <FiUser /> },
    { id: 4, label: "Reports", icon: <FiBarChart2 /> },
    { id: 5, label: "Settings", icon: <FiSettings /> },
];

const tools = [
    { id: 1, label: "Chat", icon: <FiMessageSquare /> },
    { id: 2, label: "Support", icon: <FiHelpCircle /> },
];

const navLinks = {
    1: {
        name: "General",
        data: general
    },
    2: {
        name: "Tools",
        data: tools
    }
};

export default navLinks;
