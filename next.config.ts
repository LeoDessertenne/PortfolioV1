import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ancre la racine du projet : sans cela Next remonte jusqu'a un lockfile
  // parent present sur la machine et emet un avertissement au build.
  outputFileTracingRoot: path.join(import.meta.dirname, "."),

  /**
   * Le site est publie sur GitHub Pages : pas de serveur Node, donc export
   * statique integral. `trailingSlash` fait generer `credits/index.html`
   * plutot que `credits.html`, ce que GitHub Pages sert sans ambiguite.
   */
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,

  // L'optimiseur d'images de Next a besoin d'un serveur : inutilisable en export.
  images: { unoptimized: true },
};

export default nextConfig;
