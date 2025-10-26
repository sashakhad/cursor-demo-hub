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
      className={`flex-grow rounded-lg bg-theme-card p-4 text-base text-theme placeholder:text-theme-secondary/70 ${className}`}
      style={{ border: '1px solid rgba(6, 48, 43, 0.3)' }}
    />
  );
}

export default Input;

