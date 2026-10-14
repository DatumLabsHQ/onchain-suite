"use client";

import { TOC_IDS, TocList } from "./toc-list";
import { UI } from "@/onchain-suite-website/data/retention-proposal";
import { useActiveSection } from "@/onchain-suite-website/hooks/use-active-section";

/** Desktop: sticky contents rail on the left, highlighting the section in view. */
export function ProposalRail() {
  const active = useActiveSection(TOC_IDS);
  return (
    <aside className="rp-rail">
      <nav aria-label={UI.contentsLabel}>
        <p className="rp-rail-title">{UI.contents}</p>
        <TocList active={active} groupId="rp-rail-playbooks" />
      </nav>
    </aside>
  );
}
