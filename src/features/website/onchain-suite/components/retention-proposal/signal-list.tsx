import { RichText } from "./rich-text";
import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { RichSegment } from "@/onchain-suite-website/utils/glossary-marker";

export interface MarkedSignal {
  key: string;
  signal: RichSegment[];
  meaning: RichSegment[];
}

/** Signal on the left, what it usually means on the right. */
export function SignalList({ signals }: { signals: MarkedSignal[] }) {
  return (
    <div className="rp-signals">
      <div className="rp-signals-head" aria-hidden="true">
        <span>{UI.signal}</span>
        <span>{UI.meaning}</span>
      </div>
      <dl>
        {signals.map((s) => (
          <div key={s.key} className="rp-signal">
            <dt>
              <RichText segments={s.signal} />
            </dt>
            <dd>
              <RichText segments={s.meaning} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
