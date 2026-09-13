import type { Row, Section } from "@/data/resume";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function RowValue({ row }: { row: Row }) {
  if (row.href) {
    return (
      <a
        href={row.href}
        target={row.icon === "facebook" ? "_blank" : undefined}
        rel={row.icon === "facebook" ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 text-brand-700 underline decoration-brand-100 underline-offset-2 hover:text-brand-800"
      >
        {row.icon === "facebook" && <FacebookIcon />}
        {row.value}
      </a>
    );
  }

  return <span className="whitespace-pre-line">{row.value}</span>;
}

export default function InfoSection({ section }: { section: Section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-20 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm"
    >
      <h2 className="bg-brand-700 py-3.5 text-center text-lg font-semibold text-white sm:text-xl">
        {section.title}
      </h2>
      <div className="divide-y divide-brand-50">
        {section.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <div className="bg-brand-50 px-5 py-3.5 text-base font-medium text-brand-800 sm:text-lg">
              {row.label}
            </div>
            <div className="px-5 py-3.5 text-base text-ink sm:text-lg">
              <RowValue row={row} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
