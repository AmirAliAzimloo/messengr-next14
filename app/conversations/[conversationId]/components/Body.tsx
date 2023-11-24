'use client';

import { useState } from "react";
import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages);
  
  const { conversationId } = useConversation();

  return ( 
    <div className="flex-1 overflow-y-auto">
      Body !
    </div>
  );
}
 
export default Body;