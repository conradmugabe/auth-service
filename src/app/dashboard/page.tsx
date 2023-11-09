import { redirect } from "next/navigation";

import { UserButton, auth } from "@clerk/nextjs";

export default function Page() {
  const { userId } = auth();
  if (!userId) redirect("/");

  return (
    <main>
      <nav>
        <UserButton />
      </nav>
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-2xl">
          userId <span className="font-bold">{userId}</span>
        </p>
      </section>
    </main>
  );
}
