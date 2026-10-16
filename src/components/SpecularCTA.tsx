import React, { useRef, useState } from "react";

export interface SpecularCTAProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle" | "blush";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export const SpecularCTA: React.FC<SpecularCTAProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
  type = "button",
  icon,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 50, y: 50 });
  };

  // Specular reflection gradient variables
  const specularStyle: React.CSSProperties = {
    "--specular-x": `${mousePos.x}%`,
    "--specular-y": `${mousePos.y}%`,
    "--specular-opacity": isHovered ? "0.85" : "0.25",
  } as React.CSSProperties;

  const baseClasses = `specular-cta specular-${variant} specular-${size} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={baseClasses}
        style={specularStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        <span className="specular-content">
          {children}
          {icon && <span className="specular-icon">{icon}</span>}
        </span>
        <span className="specular-sheen" aria-hidden="true" />
        <span className="specular-border" aria-hidden="true" />
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={specularStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      <span className="specular-content">
        {children}
        {icon && <span className="specular-icon">{icon}</span>}
      </span>
      <span className="specular-sheen" aria-hidden="true" />
      <span className="specular-border" aria-hidden="true" />
    </button>
  );
};
