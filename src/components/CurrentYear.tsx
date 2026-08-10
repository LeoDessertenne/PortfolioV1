"use client";

import { useEffect, useState } from "react";

/**
 * Annee courante du copyright.
 *
 * Le site etant exporte en statique, l'annee figee au build finirait par etre
 * fausse : elle est donc reevaluee cote client au montage, comme le faisait le
 * script inline de l'ancienne page. `fallback` est l'annee du build, utilisee
 * pour le rendu serveur afin d'eviter tout ecart d'hydratation.
 */
export function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback);

  useEffect(() => setYear(new Date().getFullYear()), []);

  return <span id="current-year">{year}</span>;
}
