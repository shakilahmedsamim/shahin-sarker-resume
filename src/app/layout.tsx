import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "শাহিন সরকার | রেজুমে",
  description: "শাহিন সরকারের অনলাইন রেজুমে ও পোর্টফোলিও",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface font-sans text-ink">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
