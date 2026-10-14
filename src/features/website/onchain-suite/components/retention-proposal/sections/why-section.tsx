import { PointCards } from "@/onchain-suite-website/components/retention-proposal/point-cards";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { StatCards } from "@/onchain-suite-website/components/retention-proposal/stat-cards";
import { WHY } from "@/onchain-suite-website/data/retention-proposal";
import {
  createGlossaryTracker,
  markPoints,
} from "@/onchain-suite-website/utils/glossary-marker";

/** 1. Why users leave quietly */
export function WhySection() {
  // Mark in reading order: the first use of a term in this section wins.
  const g = createGlossaryTracker();
  const intro = g.mark(WHY.intro);
  const afterStats = g.mark(WHY.afterStats);
  const blockersIntro = g.mark(WHY.blockersIntro);
  const blockers = markPoints(g, WHY.blockers);

  return (
    <SectionShell id={WHY.id} number={WHY.number} title={WHY.title}>
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <StatCards stats={WHY.stats} />
      <p className="rp-p">
        <RichText segments={afterStats} />
      </p>
      <p className="rp-p rp-lead">
        <RichText segments={blockersIntro} />
      </p>
      <PointCards points={blockers} />
    </SectionShell>
  );
}
