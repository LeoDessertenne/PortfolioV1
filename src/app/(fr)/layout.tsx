import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Document } from "@/components/Document";
import { buildHomeMetadata } from "@/lib/metadata";

/** Layout racine de la version francaise, servie sous /fr. */
export const metadata: Metadata = buildHomeMetadata("fr");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaea",
};

export default function FrLayout({ children }: { children: ReactNode }) {
  return <Document locale="fr">{children}</Document>;
}
