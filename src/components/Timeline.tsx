import { SectionHeading } from "@/components/SectionHeading";
import type { TimelineEntry } from "@/content/types";

/**
 * Section « Mon Parcours ».
 *
 * Au-dela de 800px, les entrees alternent de part et d'autre d'un axe central
 * via :nth-child(odd) / :nth-child(even) : l'ordre de la liste conditionne donc
 * le cote d'affichage.
 */
export function Timeline({
  heading,
  entries,
}: {
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <div id="idtimeline" className="droite ma-timeline">
      <SectionHeading variant="droite">{heading}</SectionHeading>

      <div className="timeline-shell">
        <div className="timeline">
          <ul>
            {entries.map((entry) => (
              <li key={entry.title} className="reveal-apparition">
                <div className="timeline-content">
                  <h3 className="date">{entry.period}</h3>
                  <h2>{entry.title}</h2>
                  <p>{entry.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
