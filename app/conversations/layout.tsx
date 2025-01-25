import { ReactNode } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import ConversationList from "./components/conversation-list";
import getConversations from "@/actions/getConverations";

const ConversationLayout = async ({ children }: { children: ReactNode }) => {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <ConversationList initialItems={conversations} />
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default ConversationLayout;
