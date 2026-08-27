/**
 * Decorative, GPU-friendly animated background.
 * Pure CSS transforms/opacity only — no layout thrash.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_80%_-10%,rgba(99,102,241,0.10),transparent),radial-gradient(50rem_50rem_at_-10%_20%,rgba(34,211,238,0.08),transparent)]" />

      {/* floating gradient blobs */}
      <div className="absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-brand-1/25 blur-[130px] animate-blob" />
      <div
        className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-3/20 blur-[130px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-2/20 blur-[130px] animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />

      {/* subtle grid with bottom fade */}
      <div className="absolute inset-0 bg-grid opacity-70 mask-fade-b" />
    </div>
  );
}
