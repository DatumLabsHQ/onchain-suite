"use client";

import { ArrowDownIcon } from "@heroicons/react/20/solid";

import { JumpLink } from "./jump-link";
import { useProposal } from "./proposal-context";
import { UI } from "@/onchain-suite-website/data/retention-proposal";

/**
 * Hero button for links that carry ?category=. It jumps to the reader's
 * current category, which a card click can change.
 */
export function PlaybookJumpButton() {
  const { category, fromLink } = useProposal();
  if (!fromLink || !category) {
    return null;
  }
  return (
    <div className="ctas rp-hero-ctas">
      <JumpLink target={category} className="btn solid lg">
        {UI.jumpToPlaybook}
        <ArrowDownIcon className="rp-icon-sm" aria-hidden="true" />
      </JumpLink>
    </div>
  );
}
