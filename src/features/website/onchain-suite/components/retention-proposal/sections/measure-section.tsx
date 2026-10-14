import { CategoryCards } from "@/onchain-suite-website/components/retention-proposal/category-cards";
import { PointCards } from "@/onchain-suite-website/components/retention-proposal/point-cards";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { MEASURE, UI } from "@/onchain-suite-website/data/retention-proposal";
import {
  createGlossaryTracker,
  markPoints,
} from "@/onchain-suite-website/utils/glossary-marker";

/** 5. What we measure, then the jump to the reader's playbook. */
export function MeasureSection() {
  const g = createGlossaryTracker();
  const intro = g.mark(MEASURE.intro);
  const metrics = markPoints(g, MEASURE.metrics);

  return (
    <SectionShell id={MEASURE.id} number={MEASURE.number} title={MEASURE.title}>
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <PointCards points={metrics} />
      <div className="rp-jump">
        <h3 className="rp-h3">{UI.nowJump}</h3>
        <CategoryCards location="after-section-5" compact />
      </div>
    </SectionShell>
  );
}
