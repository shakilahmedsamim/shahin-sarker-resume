import ProfileCard from "@/components/ProfileCard";
import InfoSection from "@/components/InfoSection";
import { sections } from "@/data/resume";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <ProfileCard />
        <div className="flex flex-1 flex-col gap-6">
          {sections.map((section) => (
            <InfoSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
