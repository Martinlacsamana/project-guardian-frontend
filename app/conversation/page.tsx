import UserMessageCard from "@/components/Chatbot/UserMessageCard"
import AIMessageCard from "@/components/Chatbot/AIResponse"
import InputBar from "@/components/Chatbot/InputBar"

const Conversation = () => {
    return (
        <main className="w-full bg-[#1C1C1C] bg-opacity-100 min-h-screen pt-12 relative">
            <div className="flex flex-col mx-auto justify-center items-center w-1/2 pb-12">
                {/* <div className="w-full text- text-white text-2xl font-light mb-4">
                    What's on your mind, Martin?
                </div> */}
                <div className="flex flex-col mx-auto h-full pb-16">
                    <div className="overflow-y-auto space-y-8 flex-1">
                        <UserMessageCard text="Hey! I am currently creating a journaling app for myself where I can host all of my journal entries in my own database. The application is called Project Guardian because although it's just a collection of journal entries, there's a bigger purpose. That purpose is that when technology scales with time, eventually I can train an ai model on my entire life which myself and my future kids can access for advice / anything they need. It could be like a personal jarvis for them. The reasons for this is because I am very family-oriented which means my worries in the future are
                            1) There is a generational gap between my kids and I and this could serve as an intermediary to bridge the gap. 
                            Do you want to ask me more questions about my vision / meanings before we continue so that we are on the same page?
                            2) In the worst case, that I have kids and pass on early, they have a limitless resource that transcends morality
                            This would also be a good way for me to make journaling meaningful if that makes sense."
                        />
                        <AIMessageCard text="Your vision for Project Guardian is both innovative and deeply personal. The flexibility you’re building in with different types of journal entries and the idea of creating specialized models for various purposes is particularly compelling. This approach will likely make your journaling process more dynamic and meaningful.

                            Focusing on a simple journaling interface as a starting point makes perfect sense. It lays the foundation for something much more expansive down the line. As technology evolves, you can always iterate and add more advanced features.

                            If you need any assistance with developing the journaling interface or exploring ideas for future AI capabilities, I’m here to help!"
                        />
                        <UserMessageCard text="Hey! I am currently creating a journaling app for myself where I can host all of my journal entries in my own database. The application is called Project Guardian because although it's just a collection of journal entries, there's a bigger purpose. That purpose is that when technology scales with time, eventually I can train an ai model on my entire life which myself and my future kids can access for advice / anything they need. It could be like a personal jarvis for them. The reasons for this is because I am very family-oriented which means my worries in the future are
                            1) There is a generational gap between my kids and I and this could serve as an intermediary to bridge the gap. 
                            Do you want to ask me more questions about my vision / meanings before we continue so that we are on the same page?
                            2) In the worst case, that I have kids and pass on early, they have a limitless resource that transcends morality
                            This would also be a good way for me to make journaling meaningful if that makes sense."
                        />
                    </div>
                </div>

                <div className="fixed bottom-0 pb-4 w-full bg-[#1C1C1C]">
                    <div className="w-1/2 mx-auto">
                        <InputBar />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Conversation