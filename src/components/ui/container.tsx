import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`landing-container ${className}`}>
      {children}
    </Tag>
  );
}
