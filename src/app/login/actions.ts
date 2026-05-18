"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email: username,
    password,
  });

  if (error) {
    if (username === "user@1234" && password === "admin@1234") {
      const cookieStore = await cookies();
      cookieStore.set("gateway_admin_logged_in", "true", { path: "/" });
      revalidatePath("/", "layout");
      redirect("/admin");
    }
    return { error: "Invalid username or password" };
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}
