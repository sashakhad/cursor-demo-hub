interface DividerProps {
  className?: string;
}

function Divider({ className = "" }: DividerProps) {
  return (
    <div 
      className={`w-full pb-5 border-b border-white/10 dark:border-dev-text/10 ${className}`}
    />
  );
}

export default Divider;

