import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import AdminLayout from "@/layout/admin_page/adminLayout";

const Admin = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated" || session) {
    router.replace("/admin/dashboard");
  }

  return <AdminLayout />;
};

export default Admin;
