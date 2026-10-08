import { NotionSpinner } from "./notion-spinner";

export function ReposSectionLoading({
  label = "Loading repositories…",
}: Readonly<{ label?: string }>) {
  return (
    <div
      className="flex items-center gap-2.5 py-6 text-[14px] text-neutral-600"
      aria-live="polite"
    >
      <NotionSpinner size={16} />
      <span>{label}</span>
    </div>
  );
}

export function ReposSectionEmpty({
  message,
}: Readonly<{ message: string }>) {
  return (
    <p className="py-4 text-[14px] leading-relaxed text-neutral-600">{message}</p>
  );
}
