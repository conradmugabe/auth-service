import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  NEXTAUTH_URL: str(),
  NEXTAUTH_SECRET: str(),
  GITHUB_ID: str(),
  GITHUB_SECRET: str(),
});

export default env;
