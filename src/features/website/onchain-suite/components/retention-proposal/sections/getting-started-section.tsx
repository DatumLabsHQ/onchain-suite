import { RichText } from "@/onchain-suite-website/components/retention-proposal/rich-text";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import {
  GETTING_STARTED,
  UI,
} from "@/onchain-suite-website/data/retention-proposal";
import { createGlossaryTracker } from "@/onchain-suite-website/utils/glossary-marker";

/** 11. Getting started: the five steps as a timeline, then the plans. */
export function GettingStartedSection() {
  const g = createGlossaryTracker();
  const steps = GETTING_STARTED.steps.map((s) => ({
    key: s.text,
    text: g.mark(s.text),
    need: g.mark(s.need),
  }));

  return (
    <SectionShell
      id={GETTING_STARTED.id}
      number={GETTING_STARTED.number}
      title={GETTING_STARTED.title}
    >
      <ol className="rp-steps">
        {steps.map((s, i) => (
          <li key={s.key} className="rp-step">
            <span className="rp-step-n" aria-hidden="true">
              {i + 1}
            </span>
            <div className="rp-step-body">
              <p className="rp-step-text">
                <RichText segments={s.text} />
              </p>
              <p className="rp-need">
                <span className="rp-need-k">{UI.need}:</span>{" "}
                <RichText segments={s.need} />
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="rp-h3">{GETTING_STARTED.plansTitle}</h3>
      <ul className="rp-plans">
        {GETTING_STARTED.plans.map((plan) => (
          <li key={plan.name} className="plan rp-plan">
            <h4 className="rp-plan-name">{plan.name}</h4>
            <div>
              <p className="rp-plan-k">{UI.priceLabel}</p>
              <p className="rp-plan-price">
                <b>{plan.price}</b>
                {plan.priceNote && <span> {plan.priceNote}</span>}
              </p>
            </div>
            <div>
              <p className="rp-plan-k">{UI.contactsLabel}</p>
              <p className="rp-plan-contacts">{plan.contacts}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="rp-p rp-payment">{GETTING_STARTED.payment}</p>
    </SectionShell>
  );
}
