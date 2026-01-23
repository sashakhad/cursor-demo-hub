interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function Input({ value, onChange, onInput, placeholder = "", className = "" }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      className={`flex-grow rounded-lg bg-dev-card p-4 text-base text-dev-text placeholder-dev-secondary border ${className}`}
      style={{ borderColor: 'var(--color-dev-border-subtle)' }}
    />
  );
}

export default Input;

