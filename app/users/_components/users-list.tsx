"use client";
import { User } from "@prisma/client";
import React from "react";
import UserBox from "./userbox";

interface UserListProps {
  users: User[];
}

const UsersList = ({ users }: UserListProps) => {
  return (
    <aside className="fixed inset-y-0 lg:pb-0 pb-20 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">People</div>
        </div>
        <div>
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default UsersList;
