import { SectionHeading } from "@/components/SectionHeading";
import {
  professionalQualities,
  programmingLanguages,
  tools,
  type TagGroup,
} from "@/data/skills";

/** Bloc de competences presente sous forme d'etiquettes. */
function TagCard({ group, listClassName }: { group: TagGroup; listClassName: string }) {
  return (
    <div className="container-competence reveal-apparition">
      <h4>{group.title}</h4>
      <ul className={listClassName}>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Section « Compétences » : qualites professionnelles, outils, langages. */
export function Skills() {
  return (
    <div id="competences" className="droite">
      <SectionHeading variant="droite">Compétences</SectionHeading>

      <h3 className="reveal-apparition">Qualités Professionnelles</h3>
      <div className="container-competences">
        {professionalQualities.map((group) => (
          <TagCard key={group.title} group={group} listClassName="tech-tags" />
        ))}
      </div>

      <h3 className="reveal-apparition">Outils</h3>
      <div className="container-competences">
        {tools.map((group) => (
          <div
            key={group.title}
            className="container-competence reveal-apparition"
          >
            <h4>{group.title}</h4>
            <ul className="detail-outil">
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  {/* Le logo est purement illustratif : le nom est juste en dessous. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.icon} alt="" />
                  <p>{tool.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="reveal-apparition">Langages de programmation</h3>
      <div className="container-competences skill-tiers">
        {programmingLanguages.map((group) => (
          <TagCard
            key={group.title}
            group={group}
            listClassName="detail-competence tech-tags"
          />
        ))}
      </div>
    </div>
  );
}
