// Placeholder content. Replace bracketed values once real details are provided.

export type Row = { label: string; value: string };
export type Section = { id: string; title: string; rows: Row[] };

export const profile = {
  name: "[আপনার পূর্ণ নাম]",
  designation: "[পদবি, যেমন: সফটওয়্যার ইঞ্জিনিয়ার]",
  tagline: "[এক লাইনে নিজের পরিচয় লিখুন]",
  refId: "SR-2026",
  location: "[শহর, দেশ]",
  phone: "[+৮৮০ XXXXXXXXXX]",
  email: "[email@example.com]",
  resumeUrl: "#",
};

export const quickFacts: Row[] = [
  { label: "পদবি", value: "[পদবি]" },
  { label: "অভিজ্ঞতা", value: "[X বছর]" },
  { label: "অবস্থান", value: "[শহর, দেশ]" },
  { label: "প্রধান দক্ষতা", value: "[দক্ষতা ১, দক্ষতা ২]" },
  { label: "ভাষা", value: "[বাংলা, ইংরেজি]" },
  { label: "প্রাপ্যতা", value: "[তাৎক্ষণিক / আলোচনা সাপেক্ষে]" },
];

export const sections: Section[] = [
  {
    id: "personal",
    title: "ব্যক্তিগত তথ্য",
    rows: [
      { label: "পূর্ণ নাম", value: "[আপনার পূর্ণ নাম]" },
      { label: "জন্ম তারিখ", value: "[তারিখ, মাস, বছর]" },
      { label: "জাতীয়তা", value: "[জাতীয়তা]" },
      { label: "বর্তমান ঠিকানা", value: "[বর্তমান ঠিকানা]" },
      { label: "স্থায়ী ঠিকানা", value: "[স্থায়ী ঠিকানা]" },
    ],
  },
  {
    id: "education",
    title: "শিক্ষাগত যোগ্যতা",
    rows: [
      { label: "সর্বোচ্চ ডিগ্রি", value: "[ডিগ্রির নাম]" },
      { label: "প্রতিষ্ঠান", value: "[প্রতিষ্ঠানের নাম]" },
      { label: "পাসের সন", value: "[সন]" },
      { label: "ফলাফল", value: "[সিজিপিএ / বিভাগ]" },
    ],
  },
  {
    id: "experience",
    title: "পেশাগত অভিজ্ঞতা",
    rows: [
      { label: "বর্তমান প্রতিষ্ঠান", value: "[প্রতিষ্ঠানের নাম]" },
      { label: "পদবি", value: "[পদবি]" },
      { label: "কর্মকাল", value: "[শুরু - বর্তমান]" },
      { label: "দায়িত্ব", value: "[মূল দায়িত্বের সংক্ষিপ্ত বিবরণ]" },
    ],
  },
  {
    id: "skills",
    title: "দক্ষতা",
    rows: [
      { label: "কারিগরি দক্ষতা", value: "[দক্ষতা ১, দক্ষতা ২, দক্ষতা ৩]" },
      { label: "সফট স্কিল", value: "[যোগাযোগ, টিমওয়ার্ক, নেতৃত্ব]" },
      { label: "টুলস", value: "[টুল ১, টুল ২]" },
    ],
  },
  {
    id: "certificates",
    title: "প্রশিক্ষণ ও সার্টিফিকেট",
    rows: [
      { label: "কোর্স / সার্টিফিকেট", value: "[সার্টিফিকেটের নাম]" },
      { label: "প্রতিষ্ঠান", value: "[প্রদানকারী প্রতিষ্ঠান]" },
      { label: "সাল", value: "[সাল]" },
    ],
  },
  {
    id: "languages",
    title: "ভাষাগত দক্ষতা",
    rows: [
      { label: "বাংলা", value: "[দক্ষতার মান]" },
      { label: "ইংরেজি", value: "[দক্ষতার মান]" },
    ],
  },
  {
    id: "references",
    title: "রেফারেন্স",
    rows: [
      { label: "নাম", value: "[রেফারেন্সের নাম]" },
      { label: "পদবি ও প্রতিষ্ঠান", value: "[পদবি, প্রতিষ্ঠান]" },
      { label: "যোগাযোগ", value: "[ফোন / ইমেইল]" },
    ],
  },
  {
    id: "contact",
    title: "যোগাযোগ",
    rows: [
      { label: "মোবাইল নম্বর", value: "[+৮৮০ XXXXXXXXXX]" },
      { label: "ইমেইল", value: "[email@example.com]" },
      { label: "ঠিকানা", value: "[বর্তমান ঠিকানা]" },
      { label: "লিংকডইন / পোর্টফোলিও", value: "[লিংক]" },
    ],
  },
];

export const navLinks = [
  { href: "#personal", label: "সম্পর্কে" },
  { href: "#education", label: "শিক্ষা" },
  { href: "#experience", label: "অভিজ্ঞতা" },
  { href: "#skills", label: "দক্ষতা" },
  { href: "#contact", label: "যোগাযোগ" },
];
