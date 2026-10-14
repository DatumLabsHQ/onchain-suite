import { LoopCards } from "@/onchain-suite-website/components/retention-proposal/loop-cards";
import { PointCards } from "@/onchain-suite-website/components/retention-proposal/point-cards";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { LOOPS } from "@/onchain-suite-website/data/retention-proposal";
import {
  createGlossaryTracker,
  markLoops,
  markPoints,
} from "@/onchain-suite-website/utils/glossary-marker";

/** 4. The Loops every protocol gets */
export function LoopsSection() {
  const g = createGlossaryTracker();
  const intro = g.mark(LOOPS.intro);
  const loops = markLoops(g, LOOPS.loops);
  const rules = markPoints(g, LOOPS.rules);

  return (
    <SectionShell id={LOOPS.id} number={LOOPS.number} title={LOOPS.title}>
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <LoopCards loops={loops} headingLevel={3} />
      <h3 className="rp-h3">{LOOPS.rulesTitle}</h3>
      <PointCards points={rules} numbered />
    </SectionShell>
  );
}
