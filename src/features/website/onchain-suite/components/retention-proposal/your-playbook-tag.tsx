"use client";

import { useProposal } from "./proposal-context";
import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { CategoryId } from "@/onchain-suite-website/types/retention-proposal";

/** Marks the reader's own playbook next to its heading. */
export function YourPlaybookTag({ id }: { id: CategoryId }) {
  const { category } = useProposal();
  return category === id ? (
    <span className="tag">{UI.yourPlaybook}</span>
  ) : null;
}
