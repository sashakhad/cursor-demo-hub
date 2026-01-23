interface DividerProps {
  className?: string;
}

function Divider({ className = "" }: DividerProps) {
  return (
    <div 
      className={`w-full pb-5 border-b border-dev-border-subtle ${className}`}
      style={{ borderBottomColor: 'var(--color-dev-border-subtle)' }}
    />
  );
}

export default Divider;

