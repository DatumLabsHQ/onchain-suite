/* All words on /retention-proposal live here, so wording can change without
   touching a component. `**text**` marks bold. Glossary terms are underlined
   automatically on their first use in each section. */

import type {
  CategoryCard,
  CategoryId,
  ExampleMessage,
  GlossaryEntry,
  IntelligenceRow,
  LabelledPoint,
  Loop,
  Part,
  Plan,
  Playbook,
  PrivacyIcon,
  SectionHead,
  SetupStep,
  Signal,
  Stage,
  Stat,
} from "@/onchain-suite-website/types/retention-proposal";

export const META = {
  // The root layout's title template appends " · OnchainSuite".
  title: "Retention proposal",
  description:
    "OnchainSuite retention proposal for perp DEXs, prediction markets and DeFi protocols",
};

/** Labels for buttons, controls and screen readers. */
export const UI = {
  preparedFor: "Prepared for",
  findPlaybook: "Find your playbook",
  jumpToPlaybook: "Jump to your playbook",
  nowJump: "Now jump to your playbook",
  yourPlaybook: "Your playbook",
  skipToIntelligence: "Skip to section 9: Intelligence",
  bookWalkthrough: "Book a walkthrough",
  contents: "Contents",
  contentsLabel: "Proposal sections",
  sectionPrefix: "Section",
  selected: "Selected",
  source: "Source",
  does: "What it does",
  get: "What you get",
  startsWhen: "Starts when",
  sends: "What it sends",
  stopsWhen: "Stops when",
  signal: "Signal",
  meaning: "What it usually means",
  stagesLabel: "The six stages",
  messageView: "Message view",
  email: "Email",
  inApp: "In-app",
  subject: "Subject",
  preview: "Preview",
  category: "Category",
  questions: "Questions your team can ask",
  yourCategory: "Your category",
  need: "What we need from you",
  priceLabel: "Price a month",
  contactsLabel: "Contacts included",
};

export const HERO = {
  eyebrow: "Retention proposal",
  title: "Keep more of the users you’ve already won",
  subtitle:
    "OnchainSuite spots the wallets that are slipping and reaches them by email or in-app, while they still have funds in your product.",
  /** The hero picture: one Loop from section 4, on the stage it acts in. */
  visual: {
    loop: "Slipping",
    stage: "At risk",
    loopTag: "Loop",
    label:
      "The Slipping Loop: when a user's activity falls to half of their own 30-day average, they move to At risk and get a check-in about what changed and what is new. The Loop stops when activity returns.",
  },
};

export const SHORT_VERSION = {
  heading: "The short version",
  paragraphs: [
    "Your users tell you on-chain when they are about to leave: they trade less, stop placing bets, or pull their deposit. Prior to now, nobody was able to reach out to those users at that stage of their lifecycle journey. But with OnchainSuite, you're now able to read those signals and send the right message, by email or inside your app, at the moment it matters.",
    "The result is a relationship with your users that does not depend on the next airdrop or incentive round. We set it up with you and run it alongside your marketing team.",
  ],
  guide:
    "Sections 1 to 5 are for everyone. Pick your category to jump to your playbook, then finish with sections 9 to 12.",
};

/** Anchor on the category picker, the target of "Find your playbook". */
export const PICKER_ID = "find-your-playbook";

export const CATEGORIES: CategoryCard[] = [
  {
    id: "perp-dex",
    label: "Perp DEX",
    line: "Traders who come back to trade week after week.",
    section: "Section 6",
  },
  {
    id: "prediction-market",
    label: "Prediction market",
    line: "Users who come back after their first market resolves.",
    section: "Section 7",
  },
  {
    id: "defi",
    label: "DeFi: lending, vaults, liquidity",
    line: "Deposits that stay, and depositors who add more over time.",
    section: "Section 8",
  },
];

export const WHY: SectionHead & {
  intro: string;
  stats: Stat[];
  afterStats: string;
  blockersIntro: string;
  blockers: LabelledPoint[];
} = {
  id: "why-users-leave",
  number: 1,
  title: "Why users leave quietly",
  intro:
    "Crypto is good at bringing users in. Incentives, point systems and airdrops work for acquisition. The harder part comes after: most of those users go quiet within weeks, and the team only finds out from a dashboard.",
  stats: [
    {
      figure: "75%",
      text: "of Uniswap airdrop wallets sold every token within 7 days",
      source: "Dune, Uniswap airdrop analysis",
    },
    {
      figure: "29% vs 6.4%",
      text: "On Hyperliquid, 29% of the largest airdrop recipients still trade, against 6.4% of the smallest",
      source: "Otomato, July 2026",
    },
  ],
  afterStats:
    "The second line matters most. Users who get real value from a product stay. Users who never get there drift away. Retention is the work of moving more people from the second group into the first, and every wallet that drifts away leaves a trail on-chain that you can respond to.",
  blockersIntro: "Three things have stopped teams from doing this so far:",
  blockers: [
    {
      label: "Email tools block crypto.",
      text: "Mainstream senders flag words like token, staking or airdrop, so messages never land.",
    },
    {
      label: "Email tools cannot see the chain.",
      text: "They know who opened an email. They do not know who withdrew 9,800 USDC yesterday.",
    },
    {
      label: "A marketing list is a security risk.",
      text: "A list of emails tied to wallets is a list of targets if it leaks. Any fix has to reach users without exposing who they are.",
    },
  ],
};

export const WHAT: SectionHead & {
  intro: string;
  parts: Part[];
  channels: string;
} = {
  id: "what-onchainsuite-does",
  number: 2,
  title: "What OnchainSuite does",
  intro: "One product, four parts. Each one feeds the next.",
  parts: [
    {
      icon: "audience",
      name: "Audience",
      does: "Puts every user on one record: their wallet, their email if they shared one, what they did in your app and what their wallet did on-chain.",
      get: "You see each user as a person with a history, not a row in a spreadsheet.",
    },
    {
      icon: "segments",
      name: "Segments",
      does: 'Groups users by what they did or stopped doing. You type it in a sentence, for example "deposited over $10,000 and has not traded in 30 days", and it builds the group and counts it live.',
      get: "The right message goes to the right people.",
    },
    {
      icon: "loops",
      name: "Loops",
      does: "Automatic message sequences that start from an on-chain or in-app action, wait, send by email or in-app, and stop the moment the user acts.",
      get: "Retention runs every day without your team pressing send.",
    },
    {
      icon: "intelligence",
      name: "Intelligence",
      does: "Ask your data a question in plain English and get a table, a chart and the query behind it. No SQL needed. One click turns the answer into a segment.",
      get: "Your team finds who to talk to next without waiting on a data analyst.",
    },
  ],
  channels:
    "Messages go out by **email** and **in-app** today. In-app matters in crypto because many users never share an email: the message waits inside your product and shows the next time their wallet connects. X, Telegram and Discord are next on our roadmap.",
};

export const PLAN: SectionHead & {
  intro: string;
  stages: Stage[];
  defaultStage: number;
  outro: string;
} = {
  id: "the-plan",
  number: 3,
  title: "The plan in one picture",
  intro:
    "Every user sits in one of six stages. The stage is worked out from what they actually did, and it updates on its own. Each stage has one goal and one kind of message.",
  stages: [
    {
      name: "New",
      description: "Connected a wallet or signed up",
      goal: "Goal: first action",
      tone: "blue",
    },
    {
      name: "Activated",
      description: "Did the first real thing: a trade, a bet, a deposit",
      goal: "Goal: second action",
      tone: "blue",
    },
    {
      name: "Engaged",
      description: "Comes back regularly",
      goal: "Goal: feel valued",
      tone: "blue",
    },
    {
      name: "At risk",
      description: "Doing noticeably less than their usual",
      goal: "Goal: catch them early",
      tone: "orange",
    },
    {
      name: "Dormant",
      description: "No activity for 60 days or more",
      goal: "Goal: one good reason to return",
      tone: "grey",
    },
    {
      name: "Won back",
      description: "Came back after going quiet",
      goal: "Goal: keep them this time",
      tone: "navy",
    },
  ],
  // "At risk": the outro below points at the orange column.
  defaultStage: 3,
  outro:
    'Most retention tools only start talking at "Dormant", when the user has already gone. The biggest gains come from the orange column: a user who is slipping still has funds in your product and still opens your app.',
};

export const LOOPS: SectionHead & {
  intro: string;
  loops: Loop[];
  rulesTitle: string;
  rules: LabelledPoint[];
} = {
  id: "loops",
  number: 4,
  title: "The Loops every protocol gets",
  intro:
    "These seven Loops work for all three categories. Your category section then adds the Loops specific to your product.",
  loops: [
    {
      name: "Welcome",
      startsWhen: "A wallet connects for the first time",
      sends:
        "In-app: how to do the first thing. Email, if shared: what you can do here and one link to start",
      stopsWhen: "They complete a first action",
    },
    {
      name: "First-action nudge",
      startsWhen: "Connected, nothing done after 48 hours",
      sends:
        "One message that removes the most common blocker, such as how to bridge funds",
      stopsWhen: "They complete a first action",
    },
    {
      name: "Second action",
      startsWhen: "First action done, nothing after 7 days",
      sends: "A short guide to the next most useful feature",
      stopsWhen: "A second action",
    },
    {
      name: "Thank you",
      startsWhen: "A milestone: 10th trade, 30 days deposited, first win",
      sends: "A short, personal note. No offer attached",
      stopsWhen: "Single message",
    },
    {
      name: "Slipping",
      startsWhen: "Activity falls to half of their own 30-day average",
      sends: "A check-in about what changed and what is new",
      stopsWhen: "Activity returns",
    },
    {
      name: "Went quiet",
      startsWhen: "No activity for 14, then 30, then 60 days",
      sends:
        "Three messages spaced out, each with a different reason to return",
      stopsWhen: "Any on-chain activity",
    },
    {
      name: "Top users",
      startsWhen: "Enters your top 5% by value",
      sends:
        "Recognition and a direct line to the team, early access to new features",
      stopsWhen: "Leaves the top group",
    },
  ],
  rulesTitle: "Six rules we build every Loop on",
  rules: [
    {
      label: "Nothing goes to the whole list.",
      text: "Every message goes to a segment.",
    },
    {
      label: "One message, one action.",
      text: "One link, one button. Two asks means two messages.",
    },
    {
      label: "Stop when they act.",
      text: "Every Loop ends on the action it was built for, not on a schedule.",
    },
    {
      label: "Service messages carry no offers.",
      text: "A payout, a liquidation notice or a security alert is never used to sell.",
    },
    {
      label: "No fake deadlines.",
      text: "Urgency only comes from real dates, such as an unlock or a market closing.",
    },
    {
      label: "A cap on messages.",
      text: "No user gets more than a set number of messages a week across email and in-app combined.",
    },
  ],
};

export const MEASURE: SectionHead & {
  intro: string;
  metrics: LabelledPoint[];
} = {
  id: "what-we-measure",
  number: 5,
  title: "What we measure",
  intro:
    "Opens are not results. Every Loop is judged on what the user did on-chain afterwards.",
  metrics: [
    {
      label: "On-chain conversion:",
      text: "the share of users who took the action the Loop asked for, inside a set window, usually 7 days.",
    },
    {
      label: "Retention by cohort:",
      text: "of the users who joined in a given month, how many are still active 30, 60 and 90 days later.",
    },
    {
      label: "Holdout lift:",
      text: "we keep a small group, usually 5 to 10%, out of each Loop on purpose. Comparing them with everyone else shows what the messages caused, not what would have happened anyway.",
    },
  ],
};

const MEANING_LABEL = "What retention means for you:";
const SUCCESS_LABEL = "What success looks like:";
const LINE_LABEL = "A line we do not cross:";
const SIGNALS_TITLE = "Signals we watch";
const EXAMPLE_TITLE = "Example message";

const perpExample: ExampleMessage = {
  type: "After a liquidation, email",
  channels: "email",
  subject: "What happened to your ETH position",
  preview: "A plain explanation, and two tools that help next time",
  body: [
    "Your ETH long was liquidated at 14:32 UTC when the price reached your liquidation level.",
    "Here is what that means: when losses on a position use up most of its margin, the position closes automatically so the loss cannot grow past what you put in.",
    "Two tools can help on your next trade. A stop-loss closes your position at a price you choose. The position size calculator shows how far the price can move before liquidation.",
  ],
  action: "See how stop-losses work",
};

const perpSignals: Signal[] = [
  {
    signal: "Deposited margin, no trade in 24 hours",
    meaning: "Unsure how to place the first trade",
  },
  {
    signal: "Liquidated",
    meaning: "The highest-risk moment for losing a trader for good",
  },
  {
    signal: "Weekly volume falls by half against their own average",
    meaning: "Trading elsewhere, or losing interest",
  },
  {
    signal: "Withdrew most of their collateral",
    meaning: "Leaving, or moving funds to another venue",
  },
  {
    signal: "Close to the next fee tier",
    meaning: "A real, useful reason to stay",
  },
  {
    signal: "Margin sitting idle for 14 days",
    meaning: "Still with you, but not active",
  },
];

const perpLoops: Loop[] = [
  {
    name: "First trade",
    startsWhen: "Margin deposited, no trade in 24 hours",
    sends:
      "In-app walkthrough of placing an order, then one email with a short guide",
    stopsWhen: "First trade",
  },
  {
    name: "After a liquidation",
    startsWhen: "Position liquidated",
    sends:
      "Within hours: what happened, in plain words, and how stop-losses and position sizing tools work. No promotion",
    stopsWhen: "Single message",
  },
  {
    name: "Fee tier",
    startsWhen: "Within 10% of the next fee tier in the period",
    sends: '"You are $X of volume from lower fees this month"',
    stopsWhen: "Tier reached or period ends",
  },
  {
    name: "Collateral out",
    startsWhen: "Withdrew more than half their collateral",
    sends:
      "One question: what could we do better. Then, after 14 days, what has shipped since",
    stopsWhen: "New deposit",
  },
  {
    name: "Top traders",
    startsWhen: "Top 5% by volume",
    sends:
      "Direct contact with the team, early access to new markets, a monthly summary of their trading",
    stopsWhen: "Leaves the group",
  },
];

const predictionSignals: Signal[] = [
  {
    signal: "Deposited, no position in 24 hours",
    meaning: "Has not found a market they care about yet",
  },
  {
    signal: "A market they hold resolves",
    meaning: "The moment they decide whether to come back",
  },
  {
    signal: "Winnings unclaimed after 48 hours",
    meaning: "Missed the result, or forgot",
  },
  {
    signal: "New market in a topic they have traded",
    meaning: "A natural reason to return",
  },
  {
    signal: "One position, then nothing for 14 days",
    meaning: "Came for one event only",
  },
];

const predictionLoops: Loop[] = [
  {
    name: "First position",
    startsWhen: "Deposited, no position in 24 hours",
    sends:
      "In-app: three open markets in popular topics. Email: how a market works, start to finish",
    stopsWhen: "First position",
  },
  {
    name: "Market resolved",
    startsWhen: "A market they hold resolves",
    sends:
      "The result and, if they won, one button to claim. No offer attached",
    stopsWhen: "Single message",
  },
  {
    name: "Unclaimed winnings",
    startsWhen: "Winnings unclaimed after 48 hours",
    sends: "A reminder with the amount",
    stopsWhen: "Claimed",
  },
  {
    name: "Your topics",
    startsWhen: "New market opens in a topic they have traded",
    sends: "The new market, one line on why it matters. At most one a day",
    stopsWhen: "Single message",
  },
  {
    name: "One-event users",
    startsWhen: "One position, nothing for 14 days",
    sends: "Upcoming markets in the same topic, with their close dates",
    stopsWhen: "New position",
  },
];

const defiSignals: Signal[] = [
  {
    signal: "Loan health falling toward liquidation",
    meaning: "The user may lose funds without knowing",
  },
  {
    signal: "Liquidity position out of range",
    meaning: "It has stopped earning fees",
  },
  {
    signal: "Rewards claimable above a set amount",
    meaning: "Value they have not collected",
  },
  {
    signal: "Lock or unlock date in 7 days",
    meaning: "A decision point: stay or leave",
  },
  {
    signal: "Withdrew more than half their deposit",
    meaning: "Moving to another protocol, or needs the funds",
  },
  {
    signal: "Holds an asset your new vault supports",
    meaning: "A relevant reason to deposit",
  },
];

const defiLoops: Loop[] = [
  {
    name: "Loan health alert",
    startsWhen: "Health factor drops below a level you set",
    sends:
      "In-app and email at once: current health, the price that triggers liquidation, how to add collateral or repay",
    stopsWhen: "Health back above the level",
  },
  {
    name: "Out of range",
    startsWhen: "Liquidity position out of range for 24 hours",
    sends: "What it means and how to rebalance",
    stopsWhen: "Back in range",
  },
  {
    name: "Unclaimed rewards",
    startsWhen: "Claimable rewards pass a set amount",
    sends: "The amount and one button to claim",
    stopsWhen: "Claimed",
  },
  {
    name: "Unlock coming up",
    startsWhen: "7 days, then 1 day, before an unlock",
    sends: "The date, the amount and their options, including relocking",
    stopsWhen: "Unlock date passes",
  },
  {
    name: "Big withdrawal",
    startsWhen: "Withdrew more than half their deposit",
    sends: "One question on why, then what has changed since, after 14 days",
    stopsWhen: "New deposit",
  },
  {
    name: "Monthly statement",
    startsWhen: "First day of each month, active depositors",
    sends: "What their position earned last month, in dollars",
    stopsWhen: "Single message",
  },
];

export const PLAYBOOKS: Playbook[] = [
  {
    id: "perp-dex",
    number: 6,
    title: "Perp DEX playbook",
    meaning: {
      label: MEANING_LABEL,
      text: "traders who come back to trade week after week, and keep their margin with you between trades.",
    },
    signalsTitle: SIGNALS_TITLE,
    signals: perpSignals,
    loopsTitle: "Perp DEX Loops",
    loops: perpLoops,
    success: {
      label: SUCCESS_LABEL,
      text: "more traders placing a second trade within 7 days of the first, and more traders still active 30 days after joining.",
    },
    line: {
      label: LINE_LABEL,
      text: "we never message users to take on more leverage or more risk. Messages explain tools and share what is new.",
    },
    exampleTitle: EXAMPLE_TITLE,
    example: perpExample,
  },
  {
    id: "prediction-market",
    number: 7,
    title: "Prediction market playbook",
    meaning: {
      label: MEANING_LABEL,
      text: "users who come back after their first market resolves, and follow the topics they care about.",
    },
    signalsTitle: SIGNALS_TITLE,
    signals: predictionSignals,
    loopsTitle: "Prediction market Loops",
    loops: predictionLoops,
    success: {
      label: SUCCESS_LABEL,
      text: "more users opening a second position within 14 days of their first market resolving.",
    },
    line: {
      label: LINE_LABEL,
      text: 'after a loss, we share the result and nothing else. We never use "win it back" language.',
    },
    exampleTitle: EXAMPLE_TITLE,
    example: {
      type: "Market resolved, user won, in-app and email",
      channels: "in-app-and-email",
      subject: "Your market resolved: you won $240",
      preview: "Your winnings are ready to claim in one step",
      body: [
        'The market "Will the Fed cut rates in December?" resolved YES.',
        "Your position paid out $240. It is ready to claim now.",
      ],
      action: "Claim $240",
    },
  },
  {
    id: "defi",
    number: 8,
    title: "DeFi playbook: lending, vaults and liquidity",
    meaning: {
      label: MEANING_LABEL,
      text: "deposits that stay, and depositors who add more over time. Here, keeping a user also means keeping their capital.",
    },
    signalsTitle: SIGNALS_TITLE,
    signals: defiSignals,
    loopsTitle: "DeFi Loops",
    loops: defiLoops,
    success: {
      label: SUCCESS_LABEL,
      text: "a higher share of deposits still in place 30 and 90 days after they arrive, and more new deposits coming from existing users.",
    },
    exampleTitle: EXAMPLE_TITLE,
    example: {
      type: "Loan health alert, in-app and email",
      channels: "in-app-and-email",
      subject: "Your loan is close to liquidation",
      preview: "ETH at $2,410 would trigger it. Here is how to stay safe",
      body: [
        "Your loan health is 1.08. If ETH falls to $2,410, part of your collateral will be sold to repay the loan.",
        "You can raise your health by adding collateral or repaying part of the loan. Both take one step.",
      ],
      action: "Manage my loan",
    },
  },
];

export const INTELLIGENCE: SectionHead & {
  intro: string;
  rows: IntelligenceRow[];
  outro: string;
} = {
  id: "intelligence",
  number: 9,
  title: "Intelligence: getting better every month",
  intro:
    "The Loops above are a starting point. Intelligence shows what to change next. Your team asks questions in plain English, and each answer can become a new segment or Loop in one click. Nothing sends until you approve it.",
  rows: [
    {
      category: "perp-dex",
      label: "Perp DEX",
      questions: [
        "Which traders cut their volume by half this month?",
        "Which markets do our top traders use most?",
      ],
    },
    {
      category: "prediction-market",
      label: "Prediction market",
      questions: [
        "Which users opened a position on one election market and nothing since?",
        "Which topics bring users back most often?",
      ],
    },
    {
      category: "defi",
      label: "DeFi",
      questions: [
        "Which depositors withdrew over $50,000 in the last 7 days?",
        "Which vault keeps deposits longest?",
      ],
    },
  ],
  outro:
    "Every week your dashboard shows who came back and who started slipping. Every month we review results with you and agree the one change that will move retention most.",
};

export const PRIVACY: SectionHead & {
  points: (LabelledPoint & { icon: PrivacyIcon })[];
} = {
  id: "privacy",
  number: 10,
  title: "How we keep your users private",
  points: [
    {
      icon: "wallet",
      label: "Wallet first.",
      text: "A user can exist with only a wallet. Email is optional and only ever shared by the user.",
    },
    {
      icon: "hidden",
      label: "Your team never sees who a user is.",
      text: 'A wallet and an email are matched with a zero-knowledge proof, so we can confirm they belong to the same person without showing the email to your team. In the app, it reads "Hidden from your team".',
    },
    {
      icon: "read-only",
      label: "Read-only.",
      text: "We read public blockchain data. We never hold keys or funds.",
    },
    {
      icon: "compliant",
      label: "Compliant.",
      text: "OnchainSuite Ltd is registered in England and Wales, UK GDPR compliant and registered with the ICO.",
    },
  ],
};

export const GETTING_STARTED: SectionHead & {
  steps: SetupStep[];
  plansTitle: string;
  plans: Plan[];
  payment: string;
} = {
  id: "getting-started",
  number: 11,
  title: "Getting started",
  steps: [
    {
      text: "We find your contracts and holders from your project's address and load their history",
      need: "Your contract address",
    },
    {
      text: "We bring in the records you already have: email lists, app accounts, wallet logins",
      need: "Your existing lists, in any format",
    },
    {
      text: "We connect your sending domain for email and add our SDK for in-app messages",
      need: "Access to your domain settings, and a developer for one short script",
    },
    {
      text: "We build your first Loops together, starting with the ones in your category section",
      need: "Who approves messages, and whose voice they go out in",
    },
    {
      text: "Monthly review of results and the next change",
      need: "30 minutes a month",
    },
  ],
  plansTitle: "Plans",
  plans: [
    {
      name: "Pay as you go",
      price: "$0",
      priceNote: "plus usage",
      contacts: "1,000",
    },
    { name: "Launch", price: "$39", contacts: "2,500" },
    { name: "Growth", price: "$349", contacts: "25,000" },
    { name: "Pro", price: "$1,622", contacts: "75,000" },
  ],
  payment: "Pay by card or crypto.",
};

export const GLOSSARY: SectionHead & { entries: GlossaryEntry[] } = {
  id: "words-we-use",
  number: 12,
  title: "Words we use",
  entries: [
    {
      key: "segment",
      term: "Segment",
      definition:
        'A saved group of users who share something, such as "deposited this month"',
    },
    {
      key: "loop",
      term: "Loop",
      definition:
        "An automatic sequence of messages that starts from a user's action and stops when they act",
    },
    {
      key: "trigger",
      term: "Trigger",
      definition: "The action that starts a Loop, such as a withdrawal",
    },
    {
      key: "in-app-message",
      term: "In-app message",
      definition:
        "A message that shows inside your product the next time the user opens it. No email needed",
    },
    {
      key: "cohort",
      term: "Cohort",
      definition:
        "A group of users who joined in the same period, followed over time",
    },
    {
      key: "holdout",
      term: "Holdout",
      definition:
        "A small group left out of a Loop on purpose, to show what the messages caused",
    },
    {
      key: "zero-knowledge-proof",
      term: "Zero-knowledge proof",
      definition:
        "A way to prove two things match, such as a wallet and an email, without showing either one",
    },
    {
      key: "health-factor",
      term: "Health factor",
      definition:
        "A number that shows how close a loan is to liquidation. Below 1 means liquidation",
    },
  ],
};

export const NEXT_STEP = {
  id: "next-step",
  title: "Next step",
  text: "Book a 30-minute walkthrough and we will show you which of your users are slipping right now.",
  button: "Book a walkthrough",
  href: "/early-access",
};

/** Table of contents, in page order. Playbooks render under one group. */
export const TOC: { id: string; label: string; playbook?: CategoryId }[] = [
  WHY,
  WHAT,
  PLAN,
  LOOPS,
  MEASURE,
]
  .map((s) => ({ id: s.id, label: `${s.number}. ${s.title}` }))
  .concat(
    PLAYBOOKS.map((p) => ({
      id: p.id,
      label: `${p.number}. ${p.title}`,
      playbook: p.id,
    })),
    [INTELLIGENCE, PRIVACY, GETTING_STARTED, GLOSSARY].map((s) => ({
      id: s.id,
      label: `${s.number}. ${s.title}`,
    })),
    [{ id: NEXT_STEP.id, label: NEXT_STEP.title }]
  );
