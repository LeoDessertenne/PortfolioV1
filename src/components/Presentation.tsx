import type { ReactNode } from "react";

import { SectionHeading } from "@/components/SectionHeading";

/** Section « Présentation ». */
export function Presentation({
  heading,
  body,
}: {
  heading: string;
  body: ReactNode;
}) {
  return (
    <div className="mon-portfolio droite" id="presentation">
      <SectionHeading variant="droite">{heading}</SectionHeading>
      <p className="p-droite reveal-apparition">{body}</p>
    </div>
  );
}
