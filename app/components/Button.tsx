import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "pagination" | "pagination-active";
  className?: string;
}

function Button({ onClick, children, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "rounded-lg px-4 py-2 transition-colors duration-100 ease-in";
  
  const variantStyles = {
    primary: "bg-dev-accent text-white hover:opacity-90",
    secondary: "text-dev-text hover:underline",
    pagination: "text-white dark:text-dev-text hover:bg-white dark:hover:bg-dev-card hover:text-dev-primary dark:hover:text-dev-accent",
    "pagination-active": "bg-dev-primary text-white dark:text-dev-text border border-white dark:border-dev-text",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

