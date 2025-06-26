"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center p-10 bg-gray-700" style={{ height: "100vh" }}>
      <SignUp routing="hash" />
    </div>
  );
}
