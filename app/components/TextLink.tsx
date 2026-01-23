import { ReactNode } from "react";

interface TextLinkProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "default" | "underline" | "dev";
  className?: string;
}

function TextLink({ onClick, children, variant = "default", className = "" }: TextLinkProps) {
  const variantStyles = {
    default: "text-white dark:text-dev-text cursor-pointer transition-colors hover:opacity-70",
    underline: "text-white dark:text-dev-text cursor-pointer underline hover:font-semibold",
    dev: "text-dev-text cursor-pointer hover:underline",
  };

  return (
    <span
      onClick={onClick}
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default TextLink;

