import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  NEXTAUTH_URL: str(),
  NEXTAUTH_SECRET: str(),
  GITHUB_ID: str(),
  GITHUB_SECRET: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
  FIREBASE_APIKEY: str(),
  FIREBASE_AUTHDOMAIN: str(),
  FIREBASE_PROJECTID: str(),
  FIREBASE_STORAGEBUCKET: str(),
  FIREBASE_MESSAGINGSENDERID: str(),
  FIREBASE_APPID: str(),
});

export default env;
