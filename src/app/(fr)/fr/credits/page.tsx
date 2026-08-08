import type { Metadata } from "next";

import { CreditsPage } from "@/components/pages/CreditsPage";
import { buildCreditsMetadata } from "@/lib/metadata";
import "@/styles/credits-page.css";

export const metadata: Metadata = buildCreditsMetadata("fr");

export default function Page() {
  return <CreditsPage locale="fr" />;
}
