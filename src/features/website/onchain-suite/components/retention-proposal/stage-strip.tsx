"use client";

import { type KeyboardEvent, useRef, useState } from "react";

import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { Stage } from "@/onchain-suite-website/types/retention-proposal";

const PANEL_ID = "rp-stage-panel";
const tabId = (i: number) => `rp-stage-tab-${i}`;

/**
 * The six lifecycle stages as tabs. Selecting one shows its description and
 * goal underneath. Arrow keys, Home and End move between stages.
 */
export function StageStrip({
  stages,
  defaultStage,
}: {
  stages: Stage[];
  defaultStage: number;
}) {
  const [selected, setSelected] = useState(defaultStage);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[selected];

  function select(i: number) {
    const next = (i + stages.length) % stages.length;
    setSelected(next);
    tabs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const moves: Record<string, () => void> = {
      ArrowRight: () => select(selected + 1),
      ArrowDown: () => select(selected + 1),
      ArrowLeft: () => select(selected - 1),
      ArrowUp: () => select(selected - 1),
      Home: () => select(0),
      End: () => select(stages.length - 1),
    };
    const move = moves[e.key];
    if (move) {
      e.preventDefault();
      move();
    }
  }

  return (
    <div className="rp-stages">
      <div role="tablist" aria-label={UI.stagesLabel} className="rp-stage-list">
        {stages.map((s, i) => (
          <button
            key={s.name}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={tabId(i)}
            aria-selected={i === selected}
            aria-controls={PANEL_ID}
            tabIndex={i === selected ? 0 : -1}
            className={`rp-stage tone-${s.tone}${i === selected ? " is-on" : ""}`}
            onClick={() => setSelected(i)}
            onKeyDown={onKeyDown}
          >
            <span className="rp-stage-n" aria-hidden="true">
              {i + 1}
            </span>
            <span className="rp-stage-name">{s.name}</span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={PANEL_ID}
        aria-labelledby={tabId(selected)}
        className={`rp-stage-panel tone-${stage.tone}`}
      >
        <p className="rp-stage-title">{stage.name}</p>
        <p className="rp-stage-desc">{stage.description}</p>
        <p className="rp-stage-goal">{stage.goal}</p>
      </div>
    </div>
  );
}
