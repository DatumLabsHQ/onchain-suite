"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

import { TOC_IDS, TocList } from "./toc-list";
import { TOC, UI } from "@/onchain-suite-website/data/retention-proposal";
import { useActiveSection } from "@/onchain-suite-website/hooks/use-active-section";

const LIST_ID = "rp-mbar-list";

/**
 * Mobile and tablet: a slim sticky bar naming the current section. Tapping it
 * opens the full contents; picking a section or pressing Escape closes it.
 */
export function ProposalMobileBar() {
  const active = useActiveSection(TOC_IDS);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const current = TOC.find((t) => t.id === active);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!barRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div className="rp-mbar" ref={barRef}>
      <button
        ref={buttonRef}
        type="button"
        className="rp-mbar-btn"
        aria-expanded={open}
        aria-controls={LIST_ID}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="rp-mbar-k">{UI.contents}</span>
        <span className="rp-mbar-v">{current?.label ?? TOC[0].label}</span>
        <ChevronDownIcon
          className={`rp-mbar-chev${open ? " is-open" : ""}`}
          aria-hidden="true"
        />
      </button>
      <nav
        id={LIST_ID}
        className="rp-mbar-panel"
        aria-label={UI.contentsLabel}
        hidden={!open}
      >
        <TocList
          active={active}
          groupId="rp-mbar-playbooks"
          onPick={() => setOpen(false)}
        />
      </nav>
    </div>
  );
}
