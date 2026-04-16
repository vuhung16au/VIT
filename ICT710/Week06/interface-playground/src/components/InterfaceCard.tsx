import Link from "next/link";

type InterfaceCardProps = {
  title: string;
  description: string;
  href: string;
  pros: string;
  cons: string;
  icon: string;
  category?: string;
};

export function InterfaceCard({
  title,
  description,
  href,
  pros,
  cons,
  icon,
  category,
}: InterfaceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_14px_40px_rgba(37,99,235,0.10)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]"
    >
      <div className="mb-4 text-5xl text-center">{icon}</div>
      {category ? (
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-calm-600">
          {category}
        </p>
      ) : null}
      <h2 className="text-center text-2xl font-bold text-calm-900">{title}</h2>
      <p className="mt-3 text-center text-slate-600">{description}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <span className="rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-mint-700">
          Pro: {pros}
        </span>
        <span className="rounded-full bg-coral-100 px-3 py-1 text-xs font-semibold text-coral-500">
          Con: {cons}
        </span>
      </div>
    </Link>
  );
}
