export function Icon({ children, className = 'w-5 h-5' }) {
  return (
    <span className={`inline-flex shrink-0 text-amber-700 ${className}`} aria-hidden>
      {children}
    </span>
  );
}
