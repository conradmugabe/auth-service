import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";

export default function Page() {
  const { userId } = auth();
  if (!userId) redirect("/");

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-2xl">
        userId <span className="font-bold">{userId}</span>
      </p>
    </main>
  );
}
