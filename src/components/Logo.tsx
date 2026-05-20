export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <g id="arm">
          <path d="M 50 28 C 65 28 80 20 90 10" fill="none" stroke="#F58220" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      </defs>
      {Array.from({ length: 24 }).map((_, i) => (
        <use key={i} href="#arm" transform={`rotate(${i * 15} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="20" fill="#111111" />
    </svg>
  );
}
