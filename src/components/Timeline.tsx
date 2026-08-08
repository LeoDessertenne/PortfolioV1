import { SectionHeading } from "@/components/SectionHeading";
import { timeline } from "@/data/timeline";

/**
 * Section « Mon Parcours ».
 *
 * Au-dela de 768px, les entrees alternent de part et d'autre d'un axe central
 * via :nth-child(odd) / :nth-child(even) : l'ordre de la liste conditionne donc
 * le cote d'affichage.
 */
export function Timeline() {
  return (
    <div id="idtimeline" className="droite ma-timeline">
      <SectionHeading variant="droite">Mon Parcours</SectionHeading>

      <div className="timeline-shell">
        <div className="timeline">
          <ul>
            {timeline.map((entry) => (
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
