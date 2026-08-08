import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

/** Section « Contact ». */
export function Contact() {
  return (
    <div className="contact gauche" id="contact">
      <SectionHeading variant="gauche">Contact</SectionHeading>

      <p className="p-gauche p-balanced reveal-apparition">
        En dernière année d&apos;école d&apos;ingénieur, je suis à l&apos;écoute
        d&apos;opportunités de stage ou de premier poste en développement
        fullstack. N&apos;hésitez pas à me contacter.
      </p>

      <div className="hero-cta contact-cta">
        <a href={`mailto:${site.email}`} className="hero-btn hero-btn-primary">
          {site.email}
        </a>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          CV PDF
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
