import { CategoryCards } from "@/onchain-suite-website/components/retention-proposal/category-cards";
import { PlaybookJumpButton } from "@/onchain-suite-website/components/retention-proposal/playbook-jump-button";
import {
  HERO,
  SHORT_VERSION,
  UI,
} from "@/onchain-suite-website/data/retention-proposal";

/** Title, subtitle, the short version and the category picker. */
export function ProposalHero({ client }: { client: string | null }) {
  return (
    <>
      <section className="rp-hero" aria-labelledby="rp-title">
        {client && (
          <p className="tag rp-prepared">
            {UI.preparedFor} {client}
          </p>
        )}
        <h1 className="h1 load" id="rp-title">
          {HERO.title}
        </h1>
        <p className="sub load" style={{ animationDelay: ".1s" }}>
          {HERO.subtitle}
        </p>
        <PlaybookJumpButton />
      </section>

      <section className="rp-short" aria-labelledby="rp-short-h">
        <div className="rp-short-copy">
          <h2 className="rp-short-h" id="rp-short-h">
            {SHORT_VERSION.heading}
          </h2>
          {SHORT_VERSION.paragraphs.map((p) => (
            <p key={p} className="rp-p">
              {p}
            </p>
          ))}
        </div>
        <p className="rp-guide">{SHORT_VERSION.guide}</p>
        <CategoryCards location="hero" />
      </section>
    </>
  );
}
