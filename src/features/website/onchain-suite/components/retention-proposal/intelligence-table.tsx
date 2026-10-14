"use client";

import { useMemo } from "react";

import { useProposal } from "./proposal-context";
import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { IntelligenceRow } from "@/onchain-suite-website/types/retention-proposal";

/** Section 9's questions by category. The reader's category moves to the top. */
export function IntelligenceTable({ rows }: { rows: IntelligenceRow[] }) {
  const { category } = useProposal();
  const ordered = useMemo(
    () =>
      category
        ? [...rows].sort(
            (a, b) =>
              Number(b.category === category) - Number(a.category === category)
          )
        : rows,
    [rows, category]
  );

  return (
    <div className="rp-intel">
      <div className="rp-intel-head" aria-hidden="true">
        <span>{UI.category}</span>
        <span>{UI.questions}</span>
      </div>
      <ul>
        {ordered.map((row) => {
          const mine = row.category === category;
          return (
            <li
              key={row.category}
              className={`rp-intel-row${mine ? " is-mine" : ""}`}
            >
              <p className="rp-intel-cat">
                {row.label}
                {mine && <span className="tag">{UI.yourCategory}</span>}
              </p>
              <ul className="rp-intel-qs">
                {row.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
