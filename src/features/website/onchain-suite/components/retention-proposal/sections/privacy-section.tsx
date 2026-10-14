import {
  DocumentMagnifyingGlassIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

import { PointCards } from "@/onchain-suite-website/components/retention-proposal/point-cards";
import { SectionShell } from "@/onchain-suite-website/components/retention-proposal/section-shell";
import { PRIVACY } from "@/onchain-suite-website/data/retention-proposal";
import type { PrivacyIcon } from "@/onchain-suite-website/types/retention-proposal";
import {
  createGlossaryTracker,
  markPoints,
} from "@/onchain-suite-website/utils/glossary-marker";

const ICONS: Record<PrivacyIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  wallet: WalletIcon,
  hidden: EyeSlashIcon,
  "read-only": DocumentMagnifyingGlassIcon,
  compliant: ShieldCheckIcon,
};

/** 10. How we keep your users private */
export function PrivacySection() {
  const g = createGlossaryTracker();
  const points = markPoints(g, PRIVACY.points).map((p, i) => {
    const Icon = ICONS[PRIVACY.points[i].icon];
    return { ...p, icon: <Icon aria-hidden="true" /> };
  });

  return (
    <SectionShell id={PRIVACY.id} number={PRIVACY.number} title={PRIVACY.title}>
      <PointCards points={points} columns={2} />
    </SectionShell>
  );
}
