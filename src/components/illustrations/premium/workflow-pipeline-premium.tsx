"use client";

import { MillVisual } from "./mill-visual";

/** End-to-end mill operations visual — uses premium factory render */
export function WorkflowPipelinePremium({ className = "" }: { className?: string }) {
  return (
    <MillVisual
      variant="workflow"
      className={className}
      alt="Rice mill workflow from procurement to analytics"
    />
  );
}
