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
            title: "Finally Nailed That Recipe!",
            icon: "🍝",
            createdAt: "Jan 20, 2024",
            summary: "After three failed attempts, I finally got my grandmother's pasta sauce recipe right! The secret was adding the basil at the very end. The kitchen smelled amazing, and it tasted just like I remember from childhood.",
            sentiment: 95
        },
        {
            title: "Tough Day at Work",
            icon: "😮‍💨",
            createdAt: "Jan 19, 2024",
            summary: "Had a challenging meeting where my presentation didn't go as planned. Feeling down but trying to remember that one setback doesn't define me. Planning to practice more for next time.",
            sentiment: 35
        },
        {
            title: "Morning Run Breakthrough",
            icon: "🏃",
            createdAt: "Jan 18, 2024",
            summary: "Finally broke my 5k record! The morning was crisp and perfect for running. Found a new route through the park that really helped me stay motivated. Feeling proud of my progress.",
            sentiment: 90
        },
        {
            title: "Coffee with Sarah",
            icon: "☕",
            createdAt: "Jan 17, 2024",
            summary: "Caught up with Sarah after months. We talked for hours about life, relationships, and our dreams. It's amazing how some friendships just pick up right where they left off.",
            sentiment: 85
        },
        {
            title: "Dealing with Anxiety",
            icon: "🫂",
            createdAt: "Jan 16, 2024",
            summary: "Felt overwhelmed about the upcoming project deadlines. Tried the new breathing exercises my therapist suggested. They actually helped more than I expected. Taking it one day at a time.",
            sentiment: 45
        },
        {
            title: "Weekend Garden Victory",
            icon: "🌺",
            createdAt: "Jan 15, 2024",
            summary: "My first orchid finally bloomed! After months of careful watering and probably too much worry, seeing those purple petals open up made all the effort worth it. Nature is amazing.",
            sentiment: 88
        }
    ];

    return (
        <div className="flex bg-black min-h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            
            <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="max-w-7xl mx-auto">


                    {/* LIBRARY PAGE */}
                    <div className="flex flex-col px-8 py-8">

                        {/* HEADER */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 w-full">
                                {!isSidebarOpen && (
                                    <div className="cursor-pointer hover:text-purple-custom" onClick={() => setIsSidebarOpen(true)}>
                                        <PanelsTopLeft size={22} className="text-white opacity-80" />
                                    </div>
                                )}
                                <StoryBar/>
                            </div>
                          
                            <button className="btn btn-md bg-gray-800 bg-opacity-80 font-normal text-white text-opacity-90 hover:bg-gray-600"> <span className="text-xl">+</span> Add a thought</button>
                            
                        </div>
                        

                        {/* COLLECTION OF STORIES */}
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