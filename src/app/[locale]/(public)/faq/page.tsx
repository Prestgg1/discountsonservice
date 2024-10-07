import FAQ from "@/components/FAQ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Teztez verilən suallar',
}
export default function FAQPage() {
  return (
    <div className="my-10">
      <FAQ />
    </div>
  );
}
