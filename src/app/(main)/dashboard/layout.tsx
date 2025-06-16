import { Suspense } from "react";

export default function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={<div className="p-8 text-center">Loading reminders...</div>}
    >
      {children}
    </Suspense>
  );
}
