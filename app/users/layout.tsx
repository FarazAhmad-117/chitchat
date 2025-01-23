import React from "react";
import Sidebar from "../_components/sidebar/sidebar";
import getUsers from "@/actions/getUsers";
import UsersList from "./_components/users-list";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UsersList users={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default layout;
