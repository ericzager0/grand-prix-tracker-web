import React, { ReactNode } from "react";
import IconArrow from "./icons/IconArrow";

interface ButtonCheckerProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  showArrow?: boolean;
}

export default function ButtonChecker({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  showArrow = false,
}: ButtonCheckerProps) {
  const baseClasses =
    "gpt-checker-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E10600] text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 " +
    className;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {children}
        {showArrow && <IconArrow className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
      {showArrow && <IconArrow className="h-4 w-4" />}
    </button>
  );
}