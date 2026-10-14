import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { GLOSSARY } from "@/onchain-suite-website/data/retention-proposal";

/** 12. Words we use: the same definitions the underlined terms show. */
export function GlossarySection() {
  return (
    <SectionShell
      id={GLOSSARY.id}
      number={GLOSSARY.number}
      title={GLOSSARY.title}
    >
      <dl className="rp-glossary">
        {GLOSSARY.entries.map((e) => (
          <div key={e.key}>
            <dt>{e.term}</dt>
            <dd>{e.definition}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
