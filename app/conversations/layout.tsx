import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayou({
    children
}:{
    children: React.ReactNode
}) {
    
    const conversations = await getConversations();

    return (
        <Sidebar>
            <div className="h-full" >
            <ConversationList
            // initialItems={[]} 
            />
            {children}
            </div>
        </Sidebar>
    )
}