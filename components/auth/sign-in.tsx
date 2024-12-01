import { signIn } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import spotifyIcon from "@/public/images/spotify.png";
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify", { redirectTo: "/echo" });
      }}
      className="w-full flex justify-center text-white">
      <Button className="w-2/3 text-base">
        <Image src={spotifyIcon} alt="Spotify" width={24} height={24} />
        Continue with Spotify
      </Button>
    </form>
  );
}
