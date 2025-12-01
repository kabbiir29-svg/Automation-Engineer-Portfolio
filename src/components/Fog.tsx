export default function Fog() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
      <div className="absolute top-10 left-0 w-[1200px] h-[600px] bg-white/3 blur-[150px] opacity-[0.05] animate-fog-slow" />
      <div className="absolute bottom-0 right-0 w-[1500px] h-[800px] bg-white/3 blur-[200px] opacity-[0.04] animate-fog-fast" />
    </div>
  );
}