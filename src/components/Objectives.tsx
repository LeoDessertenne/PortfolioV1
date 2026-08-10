import type { ReactNode } from "react";

import { SectionHeading } from "@/components/SectionHeading";

/** Section « Mes objectifs ». */
export function Objectives({
  heading,
  body,
}: {
  heading: string;
  body: ReactNode;
}) {
  return (
    <div className="mes-objectifs droite" id="h-objectifs">
      <SectionHeading variant="droite">{heading}</SectionHeading>
      <p className="objectifs reveal-apparition">{body}</p>
    </div>
  );
}
