interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

function Input({ value, onChange, onInput, placeholder = "", className = "", error }: InputProps) {
  return (
    <div className="flex flex-grow flex-col">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        className={`flex-grow rounded-lg bg-dev-card p-4 text-base text-dev-text placeholder-dev-secondary border ${error ? 'border-red-500' : 'border-dev-accent/30 dark:border-dev-text/30'} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? 'input-error' : undefined}
      />
      {error && (
        <span id="input-error" className="mt-1 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;

