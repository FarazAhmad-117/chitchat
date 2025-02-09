import getCurrentUser from "./getCurrentUser";
import prisma from "@/libs/prismadb";

const getConversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error) {
    console.log("[ERROR_CONVERSATION_ID]:", error);
    return null;
  }
};

export default getConversationById;
