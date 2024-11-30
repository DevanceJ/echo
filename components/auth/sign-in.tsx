import { signIn } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", { redirectTo: "/echo" });
      }}
      className="w-full flex justify-center">
      <Button className="bg-green-600 text-white hover:bg-green-700">
        <Image src="/images/spotify.png" alt="Spotify" width={24} height={24} />
        Sign in with Spotify
      </Button>
    </form>
  );
}
