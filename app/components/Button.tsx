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
    primary: "bg-dev-accent text-white dark:text-white hover:opacity-90",
    secondary: "bg-white dark:bg-dev-card text-dev-primary dark:text-dev-text hover:bg-opacity-90 dark:hover:bg-dev-card-02 shadow-md",
    pagination: "text-white dark:text-dev-text hover:bg-white dark:hover:bg-dev-card hover:text-dev-primary dark:hover:text-dev-text",
    "pagination-active": "bg-dev-primary dark:bg-dev-primary text-white dark:text-white border border-white dark:border-dev-text",
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

