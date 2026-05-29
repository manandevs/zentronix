export function SectionFallback({ minHeight = "40vh" }: { minHeight?: string }) {
  return (
    <div
      className="w-full animate-pulse bg-stone-100/80"
      style={{ minHeight }}
      aria-hidden
    />
  );
}
