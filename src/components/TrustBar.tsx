import { trustStats } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
      {trustStats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-mino-blue sm:text-4xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm font-medium text-mino-text/70">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
