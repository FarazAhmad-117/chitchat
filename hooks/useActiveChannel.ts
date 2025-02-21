import { useEffect, useState } from "react";
import userActiveList from "./useActiveList";
import { Channel, Members } from "pusher-js";
import { pusherClient } from "@/libs/pusher";

const useActiveChannel = () => {
  const { add, remove, set } = userActiveList();
  const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

  useEffect(() => {
    let channel = activeChannel;

    if (!channel) {
      channel = pusherClient.subscribe("presence-messenger");
      setActiveChannel(channel);
    }

    channel.bind("pusher:subscription-succeeded", (members: Members) => {
      const initialMembers: string[] = [];

      members.each((member: Record<string, any>) =>
        initialMembers.push(member.id)
      );
      set(initialMembers);
    });

    channel.bind("pusher:member_added", (member: Record<string, any>) => {
      add(member.id);
    });

    channel.bind("pusher:member_removed", (memberId: string) => {
      remove(memberId);
    });

    return () => {
      if (activeChannel) {
        pusherClient.unsubscribe("presence-messenger");
        setActiveChannel(null);
      }
    };
  }, [activeChannel, set, add, remove]);
};

export default useActiveChannel;
