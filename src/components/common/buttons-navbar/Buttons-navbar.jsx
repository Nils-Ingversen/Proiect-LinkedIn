import { useState } from "react";
import "./Buttons-navbar.css";

export default function Buttons({ icon, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`button ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={icon} className="buton-imagine"></img>
      <span className="buton-text">{text}</span>
    </button>
  );
}
