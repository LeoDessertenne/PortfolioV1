"use client";

import { useState } from "react";

import { navigation } from "@/lib/site";

/**
 * Navigation principale. Au-dela de 1200px la barre est toujours visible ; en
 * dessous elle devient un panneau plein ecran ouvert par le bouton hamburger.
 *
 * Les classes `nav-menu` et `mobile-menu` reproduisent le comportement de
 * l'ancien scripts/script_hamburger.js : la premiere affiche le <nav>, la
 * seconde fait glisser la liste depuis la gauche.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Image/menu-btn.png"
        alt="Ouvrir le menu"
        className="hamburger"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
      />

      <nav className={open ? "custom-nav nav-menu" : "custom-nav"}>
        <ul
          id="menu-principal"
          className={
            open ? "custom-nav-links mobile-menu" : "custom-nav-links"
          }
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
