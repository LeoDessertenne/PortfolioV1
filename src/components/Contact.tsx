import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

/** Section « Contact ». */
export function Contact() {
  return (
    <div className="contact gauche glass--dark on-dark" id="contact">
      <SectionHeading variant="gauche">Contact</SectionHeading>

      <p className="p-gauche reveal-apparition">
        En dernière année d&apos;école d&apos;ingénieur, je suis à l&apos;écoute
        d&apos;opportunités de stage ou de premier poste en développement
        fullstack. N&apos;hésitez pas à me contacter.
      </p>

      <div className="hero-cta">
        <a href={`mailto:${site.email}`} className="btn-glass btn-glass--primary">
          {site.email}
        </a>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
        >
          CV PDF
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
