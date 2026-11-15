import type { HTMLAttributes } from "react";

import "./PageContainer.css";

type PageContainerProps = HTMLAttributes<HTMLDivElement>;

export function PageContainer({
  className,
  children,
  ...props
}: PageContainerProps) {
  const containerClassName = ["page-container", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName} {...props}>
      {children}
    </div>
  );
}
