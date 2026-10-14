import type { CategoryId } from "@/onchain-suite-website/types/retention-proposal";

const CATEGORY_IDS: readonly CategoryId[] = [
  "perp-dex",
  "prediction-market",
  "defi",
];

const CLIENT_MAX_LENGTH = 60;

type RawParam = string | string[] | undefined;

function first(raw: RawParam): string {
  return (Array.isArray(raw) ? raw[0] : raw) ?? "";
}

/**
 * Turns `?client=` into a short plain-text name for the "Prepared for" label.
 * Keeps letters (any script), digits, spaces and `. , & ' ( ) -`, collapses
 * whitespace and caps the length. Returns null when nothing usable is left.
 * React escapes the result anyway; this keeps the label tidy and short.
 */
export function sanitizeClientName(raw: RawParam): string | null {
  const cleaned = first(raw)
    .normalize("NFKC")
    .replace(/[^\p{L}\p{N} .,&'()-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, CLIENT_MAX_LENGTH)
    .trim();
  return cleaned.length > 0 ? cleaned : null;
}

export function isCategoryId(value: string): value is CategoryId {
  return (CATEGORY_IDS as readonly string[]).includes(value);
}

/** Reads `?category=` (or a URL hash without the #) into a known category. */
export function parseCategory(raw: RawParam): CategoryId | null {
  const value = first(raw).trim().toLowerCase();
  return isCategoryId(value) ? value : null;
}
