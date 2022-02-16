import React from "react";
import { getSession, signOut } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import Button from "@/element/button";

import { Session } from "next-auth";

interface dashboardProps {
  session: Session | null;
}

const Dashboard = ({ session }: dashboardProps) => {
  if (!session) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  return (
    <div>
      <h1 className="heading-1">Dashboard</h1>
      <h4 className="heading-4">Name:-{session?.user?.name}</h4>
      <h4 className="heading-4">Email:- {session?.user?.email}</h4>
      <h4>Image:-{session?.user?.image}</h4>

      <Button name="Sign out" onClickHandler={() => signOut()} />
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return {
      props: {
        session,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/admin",
    },
  };
}
