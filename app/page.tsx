import Image from "next/image";
import authImage from "@/public/images/auth.jpg";
import { SignIn } from "@/components/auth/sign-in";

export default function AuthPage() {
  return (
    <div className="fixed inset-0 flex overflow-hidden lg:overflow-auto">
      <div className="hidden w-1/2 lg:block">
        <Image
          src={authImage}
          alt="Authentication background"
          width={1080}
          height={1080}
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-8 lg:w-1/2 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Welcome to Echo
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
