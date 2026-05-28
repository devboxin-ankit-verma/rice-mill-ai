"use client";

import type { ReactNode } from "react";
import styles from "./gradient-text.module.css";

type Direction = "horizontal" | "vertical" | "diagonal";

export function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B497CF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}: {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: Direction;
  pauseOnHover?: boolean;
  yoyo?: boolean;
}) {
  const gradientAngle =
    direction === "horizontal"
      ? "to right"
      : direction === "vertical"
        ? "to bottom"
        : "to bottom right";

  const gradientColors = [...colors, colors[0]].join(", ");
  const backgroundSize =
    direction === "horizontal" ? "300% 100%" : direction === "vertical" ? "100% 300%" : "300% 300%";

  const gradientStyle = {
    ["--gt-gradient" as any]: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    ["--gt-duration" as any]: `${Math.max(0.1, animationSpeed)}s`,
    ["--gt-bg-size" as any]: backgroundSize,
    ["--gt-direction" as any]: yoyo ? "alternate" : "normal",
  } as React.CSSProperties;

  return (
    <span
      className={[
        styles.root,
        styles[direction],
        showBorder ? styles.withBorder : "",
        pauseOnHover ? styles.pauseOnHover : "",
        className,
      ].filter(Boolean).join(" ")}
      style={gradientStyle}
    >
      {showBorder && <span className={styles.border} aria-hidden />}
      <span className={styles.text}>
        {children}
      </span>
    </span>
  );
}

