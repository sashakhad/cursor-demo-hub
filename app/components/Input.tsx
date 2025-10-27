interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function Input({ value, onChange, placeholder = "", className = "" }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`flex-grow rounded-lg bg-dev-card p-4 text-base text-dev-text placeholder-dev-secondary border border-dev-text/30 ${className}`}
    />
  );
}

export default Input;

