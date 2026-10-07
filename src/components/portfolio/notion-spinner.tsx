export function NotionSpinner({
  size = 18,
  className = "",
}: Readonly<{ size?: number; className?: string }>) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-neutral-200/90 border-t-neutral-500/90 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
