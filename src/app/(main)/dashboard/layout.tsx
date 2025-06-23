import { Suspense } from "react";

export default function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[80vh] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#818cf8]">

          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
