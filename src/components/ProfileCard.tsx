import { profile, quickFacts } from "@/data/resume";
import Avatar from "@/components/Avatar";

export default function ProfileCard() {
  return (
    <aside className="w-full shrink-0 self-start rounded-2xl border border-brand-100 bg-white shadow-sm md:w-80 lg:w-96">
      <div className="flex flex-col items-center gap-3 rounded-t-2xl bg-gradient-to-b from-brand-700 to-brand-800 px-6 py-8 text-center text-white">
        <Avatar src={profile.photo} alt={profile.name} />
        <h1 className="text-2xl font-semibold sm:text-3xl">{profile.name}</h1>
        <p className="text-base text-brand-100/90 sm:text-lg">{profile.designation}</p>
        <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium sm:text-base">
          বায়োডাটা নং : {profile.refId}
        </span>
      </div>

      <dl className="divide-y divide-brand-50 text-base sm:text-lg">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="flex justify-between gap-4 px-5 py-3.5">
            <dt className="text-ink-soft">{fact.label}</dt>
            <dd className="text-right font-medium text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3 px-5 pb-6 pt-3">
        <a
          href={profile.resumeUrl}
          className="rounded-full border border-brand-700 px-4 py-2.5 text-center text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50 sm:text-lg"
        >
          PDF ডাউনলোড
        </a>
        <a
          href="#contact"
          className="rounded-full bg-brand-700 px-4 py-2.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-800 sm:text-lg"
        >
          যোগাযোগ করুন
        </a>
      </div>
    </aside>
  );
}
