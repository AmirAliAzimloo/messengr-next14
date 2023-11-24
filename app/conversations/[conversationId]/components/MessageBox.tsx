"use client";

import Avatar from "@/app/components/Avatar";
import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import axios from "axios";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: Boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const { conversationId } = useConversation();

  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-2", isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  useEffect(()=>{
    axios.post(`/api/conversations/${conversationId}/seen`);
  },[conversationId])

  return (
    <div className={container}>

      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>

      <div className={body}>

         <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), 'p')}
          </div>
        </div>

        <div className={message}>
          {
            data.image ? (
                <Image
                alt="Image"
                height="288"
                width="288"
                src={data.image} 
              className="
                object-cover 
                cursor-pointer 
                hover:scale-110 
                transition 
                translate
              "
                />
            ) : (
                <div>{data.body}</div>
            )
          }
        </div>
       
      </div>


    </div>
  );
};

export default MessageBox;
