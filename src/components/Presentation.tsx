import { SectionHeading } from "@/components/SectionHeading";

/** Section « Présentation ». */
export function Presentation() {
  return (
    <div className="mon-portfolio droite" id="presentation">
      <SectionHeading variant="droite">Présentation</SectionHeading>

      <p className="p-droite p-balanced reveal-apparition">
        Je m&apos;appelle Léo Dessertenne. Passionné d&apos;informatique, j&apos;ai
        rejoint le BUT Informatique de l&apos;Université Gustave Eiffel en 2022,
        avant de poursuivre en codiplomation au sein du cycle ingénieur de
        l&apos;ESIEE Paris, où je suis aujourd&apos;hui en dernière année (E5).{" "}
        <br />
        En parallèle, je suis en alternance chez IDM Group, une entreprise
        spécialisée dans la création de sites web, depuis 2023. Membre de
        l&apos;équipe de développement, j&apos;y contribue au développement
        fullstack des plateformes des dictionnaires en ligne d&apos;Oxford,
        Cambridge et Collins, avec des missions de plus en plus techniques au fil
        du temps.
        <br />
        Mon portfolio illustre mon parcours, mes réalisations et mon enthousiasme
        pour le domaine de l&apos;informatique.
      </p>
    </div>
  );
}
