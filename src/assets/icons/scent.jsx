// src/assets/icons/scent.jsx
import { FaSprayCanSparkles } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScentIcon = ({ className = "w-6 h-6" }) => {
  return <FontAwesomeIcon icon={FaSprayCanSparkles} className={className} />;
};

export default ScentIcon;