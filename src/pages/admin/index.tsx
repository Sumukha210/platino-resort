import React from "react";
import { useRouter } from "next/router";
import { useSession, getCsrfToken } from "next-auth/react";
import AdminLayout from "@/layout/admin_page/adminLayout";
import { GetServerSidePropsContext } from "next";
import { AdminProps } from "@/layout/admin_page/adminLayout/types";

const Admin: React.FC<AdminProps> = ({ csrfToken }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated" || session) {
    router.replace("/admin/dashboard");
  }

  return <AdminLayout csrfToken={csrfToken} />;
};

export default Admin;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
