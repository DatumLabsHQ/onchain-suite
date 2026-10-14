"use client";

import { BookOpenIcon } from "@heroicons/react/20/solid";

import { useProposal } from "./proposal-context";
import {
  CATEGORIES,
  UI,
} from "@/onchain-suite-website/data/retention-proposal";
import { trackProposalEvent } from "@/onchain-suite-website/utils/proposal-analytics";

/** Floating "Your playbook" pill, shown once a category is chosen. */
export function PlaybookPill() {
  const { category, jumpTo } = useProposal();
  const card = CATEGORIES.find((c) => c.id === category);
  if (!category || !card) {
    return null;
  }
  return (
    <button
      type="button"
      className="rp-pill"
      onClick={() => {
        trackProposalEvent({
          name: "retention_proposal_playbook_pill_click",
          category,
        });
        jumpTo(category);
      }}
    >
      <BookOpenIcon className="rp-icon-sm" aria-hidden="true" />
      <span className="rp-pill-k">{UI.yourPlaybook}</span>{" "}
      <span className="rp-pill-v">{card.label}</span>
    </button>
  );
}
