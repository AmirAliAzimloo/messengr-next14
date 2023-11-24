"use client"

import useConversation from "@/app/hooks/useConversation";

const Form = () => {

  const { conversationId } = useConversation()


  return ( 
    <div 
      className="
        py-4 
        px-4 
        bg-white 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
      "
    >
    Form !
    </div>
  );
}
 
export default Form;