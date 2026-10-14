import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { Stat } from "@/onchain-suite-website/types/retention-proposal";

/** Section 1's two figures, each with its source underneath. */
export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <ul className="rp-stats">
      {stats.map((s) => (
        <li key={s.figure} className="rp-stat">
          <p className="rp-stat-fig">{s.figure}</p>
          <p className="rp-stat-text">{s.text}</p>
          <p className="rp-stat-src">
            {UI.source}: {s.source}
          </p>
        </li>
      ))}
    </ul>
  );
}
