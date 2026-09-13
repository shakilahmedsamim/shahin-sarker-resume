import type { Section } from "@/data/resume";

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
            <div className="px-5 py-3.5 text-base text-ink sm:text-lg">{row.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
