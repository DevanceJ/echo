import { SignIn } from "@/components/auth/sign-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-md w-full shadow-xl rounded-lg p-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800 text-center">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-center mb-6">
            Please sign in to access your echo.
          </CardDescription>
          <div className="flex justify-center">
            <SignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
