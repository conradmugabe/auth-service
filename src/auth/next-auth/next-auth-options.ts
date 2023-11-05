import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import env from "@/utils/env";

export const nextAuthOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
};
