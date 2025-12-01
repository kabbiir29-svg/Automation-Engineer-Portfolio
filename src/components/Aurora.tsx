export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1800px] h-[1200px] opacity-[0.17] aurora-mask animate-aurora aurora-ripple" />
    </div>
  );
}