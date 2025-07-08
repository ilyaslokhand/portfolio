// src/components/HoverCard.jsx
import React from "react";
import arrow from "../Images/arrow.svg";

const HoverCard = ({
  imageUrl,
  title,
  subtitle,
  link = "#",
  className = "",
}) => {
  const handleClick = () => {
    console.log("Card clicked, opening link:", link);
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-lg ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      style={{ cursor: "pointer", height: "100%", width: "100%" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10">
        <h3 className="text-[20px] font-bold instrument-font">{title}</h3>
        <p className="text-[18px] italic inter-font">{subtitle}</p>
        <div className="absolute top-3 right-3">
          <img src={arrow} alt="Open link" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
