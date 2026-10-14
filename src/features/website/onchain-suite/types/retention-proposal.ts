/* Shapes for the retention proposal page content. The words live in
   data/retention-proposal.ts; these types only describe how they are grouped. */

export type CategoryId = "perp-dex" | "prediction-market" | "defi";

export type GlossaryKey =
  | "segment"
  | "loop"
  | "trigger"
  | "in-app-message"
  | "cohort"
  | "holdout"
  | "zero-knowledge-proof"
  | "health-factor";

export type StageTone = "blue" | "orange" | "grey" | "navy";

export type PrivacyIcon = "wallet" | "hidden" | "read-only" | "compliant";

export type PartIcon = "audience" | "segments" | "loops" | "intelligence";

/** A bold lead-in followed by one line, e.g. a rule or a privacy point. */
export interface LabelledPoint {
  label: string;
  text: string;
}

export interface CategoryCard {
  id: CategoryId;
  label: string;
  line: string;
  section: string;
}

export interface Stat {
  figure: string;
  text: string;
  source: string;
}

export interface Part {
  icon: PartIcon;
  name: string;
  does: string;
  get: string;
}

export interface Stage {
  name: string;
  description: string;
  goal: string;
  tone: StageTone;
}

export interface Loop {
  name: string;
  startsWhen: string;
  sends: string;
  stopsWhen: string;
}

export interface Signal {
  signal: string;
  meaning: string;
}

export interface ExampleMessage {
  type: string;
  /** "in-app-and-email" adds the email / in-app view toggle. */
  channels: "email" | "in-app-and-email";
  subject: string;
  preview: string;
  body: string[];
  action: string;
}

export interface SectionHead {
  id: string;
  number: number;
  title: string;
}

export interface Playbook extends SectionHead {
  id: CategoryId;
  meaning: LabelledPoint;
  signalsTitle: string;
  signals: Signal[];
  loopsTitle: string;
  loops: Loop[];
  success: LabelledPoint;
  line?: LabelledPoint;
  exampleTitle: string;
  example: ExampleMessage;
}

export interface IntelligenceRow {
  category: CategoryId;
  label: string;
  questions: string[];
}

export interface SetupStep {
  text: string;
  need: string;
}

export interface Plan {
  name: string;
  price: string;
  priceNote?: string;
  contacts: string;
}

export interface GlossaryEntry {
  key: GlossaryKey;
  term: string;
  definition: string;
}
