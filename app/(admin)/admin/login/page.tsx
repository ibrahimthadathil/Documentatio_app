"use client";
import { LoginForm } from "@/components/login-form";
export default function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
