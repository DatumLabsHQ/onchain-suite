import { PartCards } from "@/onchain-suite-website/components/retention-proposal/part-cards";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { WHAT } from "@/onchain-suite-website/data/retention-proposal";
import { createGlossaryTracker } from "@/onchain-suite-website/utils/glossary-marker";

/** 2. What OnchainSuite does */
export function WhatSection() {
  const g = createGlossaryTracker();
  const intro = g.mark(WHAT.intro);
  const parts = WHAT.parts.map((p) => ({
    icon: p.icon,
    name: p.name,
    does: g.mark(p.does),
    get: g.mark(p.get),
  }));
  const channels = g.mark(WHAT.channels);

  return (
    <SectionShell id={WHAT.id} number={WHAT.number} title={WHAT.title}>
      <p className="rp-p">
        <RichText segments={intro} />
      </p>
      <PartCards parts={parts} />
      <p className="rp-p">
        <RichText segments={channels} />
      </p>
    </SectionShell>
  );
}
