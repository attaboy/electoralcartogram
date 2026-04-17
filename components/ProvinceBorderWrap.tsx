import type { ReactNode } from "react";

/** Optional nudge so dashed provincial borders stay aligned with shifted riding hexes. */
export function ProvinceBorderWrap({
  nudge,
  children,
}: {
  nudge?: string;
  children: ReactNode;
}) {
  if (!nudge) return <>{children}</>;
  return <g transform={nudge}>{children}</g>;
}
