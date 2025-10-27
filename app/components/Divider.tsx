interface DividerProps {
  className?: string;
}

function Divider({ className = "" }: DividerProps) {
  return (
    <div 
      className={`w-full pb-5 ${className}`}
      style={{ borderBottomColor: 'color-mix(in srgb, currentColor 10%, transparent)' }}
    />
  );
}

export default Divider;

