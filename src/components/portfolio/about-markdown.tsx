import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const bodyClass = "text-[15px] leading-[1.75] text-neutral-600";
const linkClass =
  "text-neutral-900 underline decoration-neutral-300/55 underline-offset-[3px] hover:decoration-neutral-400/65";

export function AboutMarkdown({ markdown }: Readonly<{ markdown: string }>) {
  return (
    <div className="mt-4 space-y-4 [&>*:first-child]:mt-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className={bodyClass}>{children}</p>,
          h1: ({ children }) => (
            <p className={`${bodyClass} font-medium text-neutral-800`}>{children}</p>
          ),
          h2: ({ children }) => (
            <p className={`${bodyClass} font-medium text-neutral-800`}>{children}</p>
          ),
          h3: ({ children }) => (
            <p className={`${bodyClass} font-medium text-neutral-800`}>{children}</p>
          ),
          ul: ({ children }) => (
            <ul className={`${bodyClass} list-disc space-y-2 pl-5`}>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className={`${bodyClass} list-decimal space-y-2 pl-5`}>{children}</ol>
          ),
          li: ({ children }) => <li className="leading-[1.75]">{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-medium text-neutral-800">{children}</strong>
          ),
          em: ({ children }) => <em>{children}</em>,
          code: ({ children }) => (
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-[14px] text-neutral-800">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className={`border-l-2 border-neutral-200 pl-4 ${bodyClass}`}
            >
              {children}
            </blockquote>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
