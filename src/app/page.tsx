import { LoginProviders } from "./_components/login-providers";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black text-white">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to an Auth Service
      </h1>
      <div className="items-center rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-black">
        lading page
      </div>
      <LoginProviders />
    </main>
  );
}
