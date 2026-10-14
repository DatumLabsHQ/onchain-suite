import { Fragment } from "react";

import { GlossaryTerm } from "./glossary-term";
import { GLOSSARY } from "@/onchain-suite-website/data/retention-proposal";
import type { GlossaryKey } from "@/onchain-suite-website/types/retention-proposal";
import type { RichSegment } from "@/onchain-suite-website/utils/glossary-marker";

const DEFINITIONS = Object.fromEntries(
  GLOSSARY.entries.map((e) => [e.key, e.definition])
) as Record<GlossaryKey, string>;

/** Renders marked text: plain runs, bold runs and glossary terms. */
export function RichText({ segments }: { segments: RichSegment[] }) {
  // Keys from character offsets: the segments of one string never reorder.
  let offset = 0;
  const keyed = segments.map((segment) => {
    const key = offset;
    offset += segment.text.length;
    return { key, segment };
  });

  return (
    <>
      {keyed.map(({ key, segment }) => {
        if (segment.term) {
          return (
            <GlossaryTerm
              key={key}
              text={segment.text}
              definition={DEFINITIONS[segment.term]}
              bold={segment.bold}
            />
          );
        }
        if (segment.bold) {
          return <strong key={key}>{segment.text}</strong>;
        }
        return <Fragment key={key}>{segment.text}</Fragment>;
      })}
    </>
  );
}
