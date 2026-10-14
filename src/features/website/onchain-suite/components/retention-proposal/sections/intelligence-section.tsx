import { IntelligenceTable } from "@/onchain-suite-website/components/retention-proposal/intelligence-table";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { INTELLIGENCE } from "@/onchain-suite-website/data/retention-proposal";
import { createGlossaryTracker } from "@/onchain-suite-website/utils/glossary-marker";

/** 9. Intelligence: getting better every month */
export function IntelligenceSection() {
  const g = createGlossaryTracker();
  const intro = g.mark(INTELLIGENCE.intro);
  const outro = g.mark(INTELLIGENCE.outro);

  return (
    <SectionShell
      id={INTELLIGENCE.id}
      number={INTELLIGENCE.number}
      title={INTELLIGENCE.title}
    >
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <IntelligenceTable rows={INTELLIGENCE.rows} />
      <p className="rp-p">
        <RichText segments={outro} />
      </p>
    </SectionShell>
  );
}
