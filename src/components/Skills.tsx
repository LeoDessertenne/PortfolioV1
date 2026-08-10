import { SectionHeading } from "@/components/SectionHeading";
import type { TagGroup, ToolGroup } from "@/content/types";
import type { UiStrings } from "@/i18n/ui";

/** Bloc de competences presente sous forme d'etiquettes. */
function TagCard({
  group,
  listClassName,
}: {
  group: TagGroup;
  listClassName: string;
}) {
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
export function Skills({
  ui,
  professionalQualities,
  tools,
  programmingLanguages,
}: {
  ui: UiStrings;
  professionalQualities: TagGroup[];
  tools: ToolGroup[];
  programmingLanguages: TagGroup[];
}) {
  return (
    <div id="competences" className="droite">
      <SectionHeading variant="droite">{ui.sections.skills}</SectionHeading>

      <h3 className="reveal-apparition competences-group-title">
        {ui.skills.professional}
      </h3>
      <div className="container-competences">
        {professionalQualities.map((group) => (
          <TagCard key={group.title} group={group} listClassName="tech-tags" />
        ))}
      </div>

      <h3 className="reveal-apparition competences-group-title">
        {ui.skills.tools}
      </h3>
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

      <h3 className="reveal-apparition competences-group-title">
        {ui.skills.languages}
      </h3>
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
