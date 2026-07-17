import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <main className="mobile-viewport">
      {children}
    </main>
  );
}
