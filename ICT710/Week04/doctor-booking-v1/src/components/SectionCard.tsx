import Link from "next/link";

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function SectionCard({ title, description, href, icon }: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,49,68,0.12)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(15,49,68,0.16)]"
    >
      <div className="mb-4 text-center text-5xl">{icon}</div>
      <h2 className="text-center text-2xl font-bold text-calm-900">{title}</h2>
      <p className="mt-3 text-center text-slate-600">{description}</p>
    </Link>
  );
}
