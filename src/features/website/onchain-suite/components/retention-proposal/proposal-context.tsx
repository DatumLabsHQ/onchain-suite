"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { CategoryId } from "@/onchain-suite-website/types/retention-proposal";
import { parseCategory } from "@/onchain-suite-website/utils/retention-proposal-params";

interface ProposalState {
  category: CategoryId | null;
  /**
   * True when the link carried ?category=. Only then does the hero show its
   * jump button: it is server rendered, so it never shifts the page under a
   * reader who is already scrolling.
   */
  fromLink: boolean;
  chooseCategory: (category: CategoryId) => void;
  /** Scrolls to a section, moves focus to its heading and updates the hash. */
  jumpTo: (id: string) => void;
}

const ProposalContext = createContext<ProposalState | null>(null);

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToSection(id: string): void {
  const section = document.getElementById(id);
  if (!section) {
    return;
  }
  // "instant", not "auto": <html> carries a global scroll-smooth class, and
  // "auto" would inherit it.
  section.scrollIntoView({
    behavior: prefersReducedMotion() ? "instant" : "smooth",
    block: "start",
  });
  const heading = section.querySelector<HTMLElement>("[data-jump-focus]");
  heading?.focus({ preventScroll: true });
  // replaceState keeps ?client= and ?category=, and does not add a history
  // entry or a page view.
  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(window.history.state, "", `#${id}`);
  }
}

export function ProposalProvider({
  initialCategory,
  children,
}: {
  initialCategory: CategoryId | null;
  children: ReactNode;
}) {
  const [category, setCategory] = useState<CategoryId | null>(initialCategory);

  // A shared link like /retention-proposal#defi also picks the category.
  useEffect(() => {
    const fromHash = parseCategory(window.location.hash.slice(1));
    if (fromHash) {
      setCategory(fromHash);
    }
  }, []);

  const chooseCategory = useCallback((next: CategoryId) => {
    setCategory(next);
    // Keep a ?category= link in step with the choice, so a copied URL is right.
    const url = new URL(window.location.href);
    if (url.searchParams.has("category")) {
      url.searchParams.set("category", next);
      window.history.replaceState(window.history.state, "", url);
    }
  }, []);

  const fromLink = initialCategory !== null;
  const value = useMemo(
    () => ({ category, fromLink, chooseCategory, jumpTo: scrollToSection }),
    [category, fromLink, chooseCategory]
  );

  return (
    <ProposalContext.Provider value={value}>
      {children}
    </ProposalContext.Provider>
  );
}

export function useProposal(): ProposalState {
  const ctx = useContext(ProposalContext);
  if (!ctx) {
    throw new Error("useProposal must be used inside ProposalProvider");
  }
  return ctx;
}
