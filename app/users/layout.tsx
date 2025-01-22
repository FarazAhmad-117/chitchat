import React from "react";
import Sidebar from "../_components/sidebar/sidebar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default layout;
