import { auth } from "@clerk/nextjs";

export function DashboardButton() {
  const { userId } = auth();

  if (!userId)
    return (
      <div className="items-center rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-black">
        lading page
      </div>
    );

  return (
    <div className="items-center rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-black">
      dashboard page
    </div>
  );
}
