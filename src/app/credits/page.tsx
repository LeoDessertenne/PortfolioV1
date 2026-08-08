import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import { CreditsFooter } from "@/components/Footer";
import { creditSections } from "@/data/credits";

export const metadata: Metadata = {
  title: "Crédits",
  description:
    "Crédits des icônes, polices et images utilisées sur le portfolio de Léo Dessertenne.",
  alternates: { canonical: "/credits" },
  // Page utilitaire : indexee mais volontairement laissee hors sitemap.
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <>
      <Link href="/" className="go-back">
        Retour
      </Link>

      <div className="credits-all">
        <h1>Crédits</h1>
        <div className="credits-corps">
          {creditSections.map((section) => (
            <Fragment key={section.heading}>
              <h2>{section.heading}</h2>
              <div className={section.blockClassName}>
                {section.links.map((link) => (
                  <Fragment key={link.href}>
                    {link.label ? <p>{link.label}</p> : null}
                    <a href={link.href} title={link.title}>
                      {link.text}
                    </a>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <CreditsFooter />
    </>
  );
}
