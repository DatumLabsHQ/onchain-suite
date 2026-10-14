"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { NEXT_STEP, UI } from "@/onchain-suite-website/data/retention-proposal";
import {
  trackProposalEvent,
  type WalkthroughSource,
} from "@/onchain-suite-website/utils/proposal-analytics";

/**
 * "Book a walkthrough" link to /early-access. The site's Cal.com handler opens
 * its booking modal for any /early-access link and forwards `source`, the same
 * tagging the footer links use.
 */
export function WalkthroughButton({
  section,
  size = "compact",
}: {
  section: WalkthroughSource;
  size?: "compact" | "large";
}) {
  const href = `${NEXT_STEP.href}?source=retention_proposal_${section.replace(/-/g, "_")}`;
  return (
    <Link
      href={href}
      className={`btn solid ${size === "large" ? "lg rp-cta-lg" : ""}`}
      onClick={() =>
        trackProposalEvent({
          name: "retention_proposal_walkthrough_click",
          section,
        })
      }
    >
      {UI.bookWalkthrough}
      <ArrowRightIcon className="rp-icon-sm" aria-hidden="true" />
    </Link>
  );
}
