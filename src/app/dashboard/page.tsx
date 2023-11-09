import { redirect } from "next/navigation";

import { UserButton, auth } from "@clerk/nextjs";
import { getXataClient } from "@/db";

export default async function Page() {
  const client = getXataClient();
  const { userId } = auth();
  if (!userId) redirect("/");

  const posts = await client.db.Posts.getAll();

  return (
    <main>
      <nav>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <section className="flex min-h-screen flex-col items-center justify-center gap-10">
        <p className="text-2xl">
          userId <span className="font-bold">{userId}</span>
        </p>
        <p className="text-2xl">
          posts count <span className="font-bold">{posts.length}</span>
        </p>
      </section>
    </main>
  );
}
