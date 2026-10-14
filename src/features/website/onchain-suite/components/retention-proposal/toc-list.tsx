"use client";

import { JumpLink } from "./jump-link";
import { useProposal } from "./proposal-context";
import { TOC, UI } from "@/onchain-suite-website/data/retention-proposal";

export const TOC_IDS: readonly string[] = TOC.map((t) => t.id);

// The playbooks sit together in TOC, so the list splits into three runs.
const FIRST_PLAYBOOK = TOC.findIndex((t) => t.playbook);
const PLAYBOOKS = TOC.filter((t) => t.playbook);
const BEFORE = TOC.slice(0, FIRST_PLAYBOOK);
const AFTER = TOC.slice(FIRST_PLAYBOOK + PLAYBOOKS.length);

/**
 * Sections 1 to 12 and Next step, with the three playbooks grouped under
 * "Your playbook". The section in view is marked with aria-current.
 */
export function TocList({
  active,
  groupId,
  onPick,
}: {
  active: string | null;
  groupId: string;
  onPick?: () => void;
}) {
  const { category } = useProposal();

  const item = (t: (typeof TOC)[number]) => (
    <li key={t.id}>
      <JumpLink
        target={t.id}
        className={`rp-toc-link${active === t.id ? " on" : ""}${
          t.playbook && t.playbook === category ? " is-mine" : ""
        }`}
        ariaCurrent={active === t.id ? "location" : undefined}
        onJump={onPick}
      >
        {t.label}
      </JumpLink>
    </li>
  );

  return (
    <ol className="rp-toc">
      {BEFORE.map(item)}
      <li className="rp-toc-group">
        <span className="rp-toc-glabel" id={groupId}>
          {UI.yourPlaybook}
        </span>
        <ol aria-labelledby={groupId}>{PLAYBOOKS.map(item)}</ol>
      </li>
      {AFTER.map(item)}
    </ol>
  );
}
