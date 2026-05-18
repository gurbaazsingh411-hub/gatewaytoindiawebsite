import { createClient } from "@/utils/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>View and manage incoming orders.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">No recent orders to display.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Menu Management</CardTitle>
            <CardDescription>Update dishes, prices, and availability.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">Manage Menu</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Sales overview and popular items.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground italic">Analytics data will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
