import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/flows.css";
import "./styles/closing.css";
import { PlaybookPill } from "@/onchain-suite-website/components/retention-proposal/playbook-pill";
import { ProposalProvider } from "@/onchain-suite-website/components/retention-proposal/proposal-context";
import { ProposalMobileBar } from "@/onchain-suite-website/components/retention-proposal/proposal-mobile-bar";
import { ProposalRail } from "@/onchain-suite-website/components/retention-proposal/proposal-rail";
import { ReadingProgress } from "@/onchain-suite-website/components/retention-proposal/reading-progress";
import { GettingStartedSection } from "@/onchain-suite-website/components/retention-proposal/sections/getting-started-section";
import { GlossarySection } from "@/onchain-suite-website/components/retention-proposal/sections/glossary-section";
import { IntelligenceSection } from "@/onchain-suite-website/components/retention-proposal/sections/intelligence-section";
import { LoopsSection } from "@/onchain-suite-website/components/retention-proposal/sections/loops-section";
import { MeasureSection } from "@/onchain-suite-website/components/retention-proposal/sections/measure-section";
import { NextStepSection } from "@/onchain-suite-website/components/retention-proposal/sections/next-step-section";
import { PlanSection } from "@/onchain-suite-website/components/retention-proposal/sections/plan-section";
import { PlaybookSection } from "@/onchain-suite-website/components/retention-proposal/sections/playbook-section";
import { PrivacySection } from "@/onchain-suite-website/components/retention-proposal/sections/privacy-section";
import { ProposalHero } from "@/onchain-suite-website/components/retention-proposal/sections/proposal-hero";
import { WhatSection } from "@/onchain-suite-website/components/retention-proposal/sections/what-section";
import { WhySection } from "@/onchain-suite-website/components/retention-proposal/sections/why-section";
import { NsShell } from "@/onchain-suite-website/components/site/ns-shell";
import { PLAYBOOKS } from "@/onchain-suite-website/data/retention-proposal";
import type { CategoryId } from "@/onchain-suite-website/types/retention-proposal";

/**
 * /retention-proposal: the sales proposal for perp DEXs, prediction markets
 * and DeFi protocols, inside the site's own header and footer. Server
 * rendered; only the navigation, toggles and tooltips hydrate.
 */
export function RetentionProposalPage({
  client,
  category,
}: {
  client: string | null;
  category: CategoryId | null;
}) {
  return (
    <NsShell>
      <ProposalProvider initialCategory={category}>
        <ReadingProgress />
        <div className="wrap rp">
          <ProposalHero client={client} />
          <div className="rp-grid">
            <ProposalRail />
            <div className="rp-main">
              <ProposalMobileBar />
              <WhySection />
              <WhatSection />
              <PlanSection />
              <LoopsSection />
              <MeasureSection />
              {PLAYBOOKS.map((p) => (
                <PlaybookSection key={p.id} playbook={p} />
              ))}
              <IntelligenceSection />
              <PrivacySection />
              <GettingStartedSection />
              <GlossarySection />
              <NextStepSection />
            </div>
          </div>
        </div>
        <PlaybookPill />
      </ProposalProvider>
    </NsShell>
  );
}
