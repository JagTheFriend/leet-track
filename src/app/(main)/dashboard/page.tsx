import Dashboard from "./_components/Dashboard";
import { getReminders } from "./dashboard-action";

export default async function DashboardPage() {
  const reminders = await getReminders();

  if (reminders?.serverError) {
    return (
      <div className="p-8 text-center text-red-600">An error occurred.</div>
    );
  }

  return <Dashboard reminders={reminders?.data ?? []} />;
}
