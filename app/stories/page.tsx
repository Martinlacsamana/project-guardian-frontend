"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/Stories/Sidebar/Sidebar'
import StoryCard from '@/components/Stories/StoryCard'
import StoryBar from '@/components/Stories/StoryBar'
import { PanelsTopLeft } from 'lucide-react'

const Stories = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const recentEntries = [
        {
            title: "My first journal entry",
            icon: "📝",
            createdAt: "Jan 1, 2024",
            summary: "Reflected on my goals and aspirations for the year ahead. Identified key areas for personal and professional growth, setting the stage for a transformative year.",
            sentiment: 85
        },
        {
            title: "Reflections on 2023",
            icon: "🎉",
            createdAt: "Dec 31, 2023",
            summary: "Analyzed the ups and downs of the past year and lessons learned. Celebrated achievements while acknowledging areas for improvement in the coming year.",
            sentiment: 70
        },
        {
            title: "Goals for Q1 2024",
            icon: "🎯",
            createdAt: "Jan 3, 2024",
            summary: "Set ambitious but achievable targets for the first quarter. Outlined specific action steps and milestones to track progress towards these goals.",
            sentiment: 90
        },
        {
            title: "Project X Brainstorming",
            icon: "💡",
            createdAt: "Jan 15, 2024",
            summary: "Explored innovative ideas for our upcoming major project. Generated a list of potential features and discussed their feasibility and impact on user experience.",
            sentiment: 65
        },
        {
            title: "Weekly Team Updates",
            icon: "📅",
            createdAt: "Jan 8, 2024",
            summary: "Summarized progress and challenges faced by each team member. Identified common obstacles and brainstormed solutions to improve overall team efficiency.",
            sentiment: 50
        },
        {
            title: "Personal Growth Reflections",
            icon: "🌱",
            createdAt: "Jan 20, 2024",
            summary: "Contemplated areas of personal development and growth opportunities. Crafted a plan to acquire new skills and expand my comfort zone in both personal and professional spheres.",
            sentiment: 75
        }
    ];

    return (
        <div className="flex bg-black min-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            
            <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="max-w-7xl mx-auto">


                    {/* HEADER */}
                    <div className="flex justify-between items-center p-4 px-8">
                        <div className="flex items-center space-x-4 w-full">
                            {!isSidebarOpen && (
                                <div className="cursor-pointer hover:text-purple-custom" onClick={() => setIsSidebarOpen(true)}>
                                    <PanelsTopLeft size={28} />
                                </div>
                            )}
                            <StoryBar/>
                        </div>
                        <button className="btn btn-md bg-gray-800 bg-opacity-80 font-normal text-white text-opacity-90 hover:bg-gray-600"> <span className="text-xl">+</span> Add a Journal Entry</button>
                    </div>
                    
                    {/* COLLECTION OF STORIES */}
                    <div className="flex flex-col px-8 py-4">
                        <h1 className="text-3xl font-light text-white opacity-90">Your journal entries</h1>
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