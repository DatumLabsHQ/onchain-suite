import { CategoryCards } from "@/onchain-suite-website/components/retention-proposal/category-cards";
import { HeroActions } from "@/onchain-suite-website/components/retention-proposal/hero-actions";
import { HeroVisual } from "@/onchain-suite-website/components/retention-proposal/hero-visual";
import {
  HERO,
  PICKER_ID,
  SHORT_VERSION,
  UI,
} from "@/onchain-suite-website/data/retention-proposal";

/** Hero, the short version and the category picker. */
export function ProposalHero({ client }: { client: string | null }) {
  return (
    <>
      <section className="rp-hero" aria-labelledby="rp-title">
        <p className="pill rp-eyebrow load">
          {HERO.eyebrow}
          {client && (
            <span>
              {UI.preparedFor} {client}
            </span>
          )}
        </p>
        <h1
          className="h1 load"
          id="rp-title"
          style={{ animationDelay: ".06s" }}
        >
          {HERO.title}
        </h1>
        <p className="sub load" style={{ animationDelay: ".12s" }}>
          {HERO.subtitle}
        </p>
        <HeroActions />
        <HeroVisual />
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
        <div className="rp-picker" id={PICKER_ID}>
          <p className="rp-guide" tabIndex={-1} data-jump-focus>
            {SHORT_VERSION.guide}
          </p>
          <CategoryCards location="hero" />
        </div>
      </section>
    </>
  );
}
