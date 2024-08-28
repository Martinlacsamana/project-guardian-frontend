"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/Stories/Sidebar/Sidebar'
import StoryCard from '@/components/Stories/StoryCard'
import { PanelsTopLeft } from 'lucide-react'

const Stories = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // Mock data for story cards
    const recentEntries = [
        {
            title: "My first journal entry",
            startDate: "Jan 1, 2024",
            lastUpdated: "Jan 5, 2024",
            status: "In Progress",
            icon: "📝", // You can replace this with an actual icon component
            collaborators: ["user1", "user2"] // These could be user objects with more details
        },
        {
            title: "Reflections on 2023",
            startDate: "Dec 31, 2023",
            lastUpdated: "Jan 2, 2024",
            status: "Completed",
            icon: "🎉",
            collaborators: ["user3"]
        },
        // Add more entries as needed
    ]

    return (
        <div className="flex bg-black min-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            
            <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="max-w-7xl mx-auto">


                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-4 ">
                            {!isSidebarOpen && (
                                <div className="cursor-pointer hover:text-purple-custom" onClick={() => setIsSidebarOpen(true)}>
                                    <PanelsTopLeft size={28} />
                                </div>
                            )}
                            
                            
                        </div>
                        <button className="btn btn-md bg-gray-800 bg-opacity-60 font-normal text-white">+ Add a Journal Entry</button>
                    </div>
                    
                    {/* COLLECTION OF STORIES */}
                    <div className="flex flex-col p-8">
                        <h1 className="text-3xl font-normal text-white opacity-90">Recent journal entries</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
                            {recentEntries.map((entry, index) => (
                                <StoryCard key={index} {...entry} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Stories