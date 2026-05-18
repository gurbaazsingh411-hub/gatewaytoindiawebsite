import { createClient } from "@/utils/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { AdminDashboard } from "./_components/admin-dashboard";

export default async function AdminPage() {
  const supabase = await createClient();
  const cookieStore = await cookies();
  const isAdminCookie = cookieStore.get("gateway_admin_logged_in")?.value === "true";
  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !isAdminCookie) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-playfair font-bold text-charcoal dark:text-cream">Admin Dashboard</h1>
        <form action={async () => {
          "use server";
          const supabase = await createClient();
          await supabase.auth.signOut();
          const cookieStore = await cookies();
          cookieStore.delete("gateway_admin_logged_in");
          redirect("/login");
        }}>
          <Button variant="outline">Sign Out</Button>
        </form>
      </div>

      <p className="text-muted-foreground">
        Welcome back, {user?.email || "user@1234"}! This is your restaurant management dashboard.
      </p>

      <AdminDashboard />
    </div>
  );
}
