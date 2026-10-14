import {
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  FunnelIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

import { RichText } from "./rich-text";
import { UI } from "@/onchain-suite-website/data/retention-proposal";
import type { PartIcon } from "@/onchain-suite-website/types/retention-proposal";
import type { RichSegment } from "@/onchain-suite-website/utils/glossary-marker";

const ICONS: Record<PartIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  audience: UserGroupIcon,
  segments: FunnelIcon,
  loops: ArrowPathIcon,
  intelligence: ChatBubbleBottomCenterTextIcon,
};

export interface MarkedPart {
  icon: PartIcon;
  name: string;
  does: RichSegment[];
  get: RichSegment[];
}

/** Section 2's four parts: icon, name, what it does, what you get. */
export function PartCards({ parts }: { parts: MarkedPart[] }) {
  return (
    <ul className="rp-parts">
      {parts.map((part) => {
        const Icon = ICONS[part.icon];
        return (
          <li key={part.name} className="rp-part">
            <span className="rp-part-icon">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="rp-part-name">{part.name}</h3>
            <p className="rp-part-k">{UI.does}</p>
            <p className="rp-part-v">
              <RichText segments={part.does} />
            </p>
            <p className="rp-part-k">{UI.get}</p>
            <p className="rp-part-v">
              <RichText segments={part.get} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}
