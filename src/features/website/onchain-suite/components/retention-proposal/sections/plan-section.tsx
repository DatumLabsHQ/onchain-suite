import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { StageStrip } from "@/onchain-suite-website/components/retention-proposal/stage-strip";
import { PLAN } from "@/onchain-suite-website/data/retention-proposal";
import { createGlossaryTracker } from "@/onchain-suite-website/utils/glossary-marker";

/** 3. The plan in one picture */
export function PlanSection() {
  const g = createGlossaryTracker();
  const intro = g.mark(PLAN.intro);
  const outro = g.mark(PLAN.outro);

  return (
    <SectionShell id={PLAN.id} number={PLAN.number} title={PLAN.title}>
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <StageStrip stages={PLAN.stages} defaultStage={PLAN.defaultStage} />
      <p className="rp-p">
        <RichText segments={outro} />
      </p>
    </SectionShell>
  );
}
