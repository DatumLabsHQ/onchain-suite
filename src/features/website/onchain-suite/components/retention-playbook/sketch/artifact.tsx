import { DiagramSketch } from "@/onchain-suite-website/components/retention-playbook/sketch/diagrams";
import { UI } from "@/onchain-suite-website/data/retention-playbook";
import type { Diagram } from "@/onchain-suite-website/types/retention-playbook";
import { seedFrom } from "@/onchain-suite-website/utils/sketch";

/** Plain-text version of a diagram for screen readers. */
function describe(diagram: Diagram): string[] {
  switch (diagram.type) {
    case "ladder":
      return diagram.steps.map((s) => `${s.label}: ${s.note}`);
    case "flow":
      return diagram.nodes.map((n) =>
        n.note ? `${n.label}: ${n.note}` : n.label
      );
    case "timeline":
      return diagram.points.map((p) => `${p.when}: ${p.label}`);
    case "stack":
      return diagram.layers.map((l) => `${l.label}: ${l.note}`);
  }
}

/**
 * A numbered, hand-drawn diagram on graph paper, captioned like
 * "[Artifact 01.02: The trader lifecycle]". The drawing is decorative to
 * assistive tech; the list beside it carries the same content.
 */
export function Artifact({
  code,
  title,
  diagram,
}: {
  code: string;
  title: string;
  diagram: Diagram;
}) {
  const caption = `${UI.artifact} ${code}: ${title}`;
  return (
    <figure className="rp-artifact" data-draw>
      <div className="rp-art-paper">
        <DiagramSketch diagram={diagram} seed={seedFrom(code)} />
      </div>
      <figcaption>
        [{caption}]
        <ul className="sr-only">
          {describe(diagram).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
