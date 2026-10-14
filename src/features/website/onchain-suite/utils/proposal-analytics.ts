import { track } from "@vercel/analytics";

import type { CategoryId } from "@/onchain-suite-website/types/retention-proposal";

/** Where a walkthrough button sits: a playbook id or the closing section. */
export type WalkthroughSource = CategoryId | "next-step";

export type ProposalEvent =
  | {
      name: "retention_proposal_category_click";
      category: CategoryId;
      location: "hero" | "after-section-5";
    }
  | { name: "retention_proposal_playbook_pill_click"; category: CategoryId }
  | {
      name: "retention_proposal_walkthrough_click";
      section: WalkthroughSource;
    };

type Clarity = (command: "event", name: string) => void;

/**
 * Sends one proposal event to Vercel Web Analytics (mounted in the root
 * layout) and, when it is loaded, to Microsoft Clarity. Analytics must never
 * break navigation, so failures are swallowed.
 */
export function trackProposalEvent(event: ProposalEvent): void {
  const { name, ...properties } = event;
  try {
    track(name, properties);
    const { clarity } = window as unknown as { clarity?: Clarity };
    if (typeof clarity === "function") {
      clarity("event", name);
    }
  } catch {
    // Analytics is best effort.
  }
}
