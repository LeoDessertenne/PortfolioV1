import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Document } from "@/components/Document";
import { buildHomeMetadata } from "@/lib/metadata";

/**
 * Layout racine de la version anglaise, servie a la racine du site.
 * La version francaise a le sien, sous (fr), pour porter <html lang="fr">.
 */
export const metadata: Metadata = buildHomeMetadata("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Teinte le chrome du navigateur sur mobile avec le creme du socle.
  themeColor: "#fffaea",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
