import Image from "next/image";

import { SignIn } from "@/components/auth/sign-in";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 lg:block">
        <Image
          src="/images/auth.jpg"
          alt="Authentication background"
          width={1080}
          height={1080}
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Welcome to Our App
            </h2>
            <p className="mt-2 text-sm">
              Sign in with your Spotify account to get started
            </p>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}
