import React, { ReactNode } from "react";
import DesktopSidebar from "./desktop-sidebar";
import MobileFooter from "./mobile-footer";
import getCurrentUser from "@/actions/getCurrentUser";

const Sidebar = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
