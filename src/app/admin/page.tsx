import { createClient } from "@/utils/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AdminDashboard } from "./admin-dashboard";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
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
          redirect("/login");
        }}>
          <Button variant="outline">Sign Out</Button>
        </form>
      </div>

      <p className="text-muted-foreground">
        Welcome back, {user.email}! This is your restaurant management dashboard.
      </p>

      <AdminDashboard />
    </div>
  );
}
