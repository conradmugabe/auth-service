import { auth } from "@clerk/nextjs";

export function DashboardButton() {
  const { userId } = auth();

  if (!userId)
    return (
      <div className="items-center rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-white">
        lading page
      </div>
    );

  return (
    <div className="items-center rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-white">
      dashboard page
    </div>
  );
}
