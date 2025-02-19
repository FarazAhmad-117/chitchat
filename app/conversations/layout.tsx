import { ReactNode } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import ConversationList from "./components/conversation-list";
import getConversations from "@/actions/getConverations";
import getUsers from "@/actions/getUsers";

const ConversationLayout = async ({ children }: { children: ReactNode }) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default ConversationLayout;
