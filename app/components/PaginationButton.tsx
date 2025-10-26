interface PaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

function PaginationButton({ onClick, children, isActive = false, className = "" }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 transition-colors duration-100 ease-in ${
        isActive
          ? "bg-dev-primary text-white border border-white"
          : "text-white hover:bg-white hover:text-dev-primary"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
