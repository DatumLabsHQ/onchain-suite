import {
  ArrowDownIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

import { JumpLink } from "@/onchain-suite-website/components/retention-proposal/jump-link";
import { LoopCards } from "@/onchain-suite-website/components/retention-proposal/loop-cards";
import { MessagePreview } from "@/onchain-suite-website/components/retention-proposal/message-preview";
import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { SignalList } from "@/onchain-suite-website/components/retention-proposal/signal-list";
import { WalkthroughButton } from "@/onchain-suite-website/components/retention-proposal/walkthrough-button";
import { YourPlaybookTag } from "@/onchain-suite-website/components/retention-proposal/your-playbook-tag";
import {
  INTELLIGENCE,
  UI,
} from "@/onchain-suite-website/data/retention-proposal";
import type { Playbook } from "@/onchain-suite-website/types/retention-proposal";
import {
  createGlossaryTracker,
  markLoops,
} from "@/onchain-suite-website/utils/glossary-marker";

/** Sections 6, 7 and 8: one category's playbook, ending in two ways out. */
export function PlaybookSection({ playbook }: { playbook: Playbook }) {
  const g = createGlossaryTracker();
  const meaningLabel = g.mark(playbook.meaning.label);
  const meaning = g.mark(playbook.meaning.text);
  const signals = playbook.signals.map((s) => ({
    key: s.signal,
    signal: g.mark(s.signal),
    meaning: g.mark(s.meaning),
  }));
  const loops = markLoops(g, playbook.loops);
  const successLabel = g.mark(playbook.success.label);
  const success = g.mark(playbook.success.text);
  const line = playbook.line && {
    label: g.mark(playbook.line.label),
    text: g.mark(playbook.line.text),
  };

  return (
    <SectionShell
      id={playbook.id}
      number={playbook.number}
      title={playbook.title}
      className="rp-playbook"
      aside={<YourPlaybookTag id={playbook.id} />}
    >
      <p className="rp-p rp-meaning">
        <strong>
          <RichText segments={meaningLabel} />
        </strong>{" "}
        <RichText segments={meaning} />
      </p>

      <h3 className="rp-h3">{playbook.signalsTitle}</h3>
      <SignalList signals={signals} />

      <h3 className="rp-h3">{playbook.loopsTitle}</h3>
      <LoopCards loops={loops} headingLevel={4} />

      <div className="rp-callout is-success">
        <CheckCircleIcon className="rp-callout-icon" aria-hidden="true" />
        <p>
          <strong>
            <RichText segments={successLabel} />
          </strong>{" "}
          <RichText segments={success} />
        </p>
      </div>

      {line && (
        <div className="rp-callout is-warning">
          <ExclamationTriangleIcon
            className="rp-callout-icon"
            aria-hidden="true"
          />
          <p>
            <strong>
              <RichText segments={line.label} />
            </strong>{" "}
            <RichText segments={line.text} />
          </p>
        </div>
      )}

      <h3 className="rp-h3">{playbook.exampleTitle}</h3>
      <MessagePreview example={playbook.example} />

      <div className="rp-playbook-end">
        <JumpLink target={INTELLIGENCE.id} className="btn lg">
          {UI.skipToIntelligence}
          <ArrowDownIcon className="rp-icon-sm" aria-hidden="true" />
        </JumpLink>
        <WalkthroughButton section={playbook.id} />
      </div>
    </SectionShell>
  );
}
