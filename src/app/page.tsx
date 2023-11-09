import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { DashboardButton } from "./_components/dashboard-button";
import { LoginProviders } from "./_components/login-providers";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white text-dark">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to an Auth Service
      </h1>
      <DashboardButton />
      <LoginProviders />
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </main>
  );
}
