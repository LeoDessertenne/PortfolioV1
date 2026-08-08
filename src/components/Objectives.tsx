import { SectionHeading } from "@/components/SectionHeading";

/** Section « Mes objectifs ». */
export function Objectives() {
  return (
    <div className="mes-objectifs droite" id="h-objectifs">
      <SectionHeading variant="droite">Mes objectifs</SectionHeading>

      <p className="objectifs reveal-apparition">
        Je termine actuellement mon cursus ingénieur à l&apos;ESIEE Paris
        (dernière année, E5), en parallèle de mon alternance chez IDM Group où mes
        missions gagnent en responsabilité. Un stage à l&apos;international est
        prévu dans le cadre de ma formation. Une fois diplômé, je vise un poste de
        développeur fullstack sur des projets à plus grande échelle, en France ou
        à l&apos;international.
      </p>
    </div>
  );
}
