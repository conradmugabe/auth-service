"use client";

import { signIn } from "next-auth/react";

const providers = [
  { provider: "github", label: "Github" },
  { provider: "google", label: "Google" },
];

export function LoginProviders() {
  return (
    <div className="grid gap-2">
      {providers.map(({ provider, label }) => (
        <button
          key={provider}
          className="h-10 w-40 rounded bg-gray-900 px-4 py-2"
          onClick={async () => await signIn(provider)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
