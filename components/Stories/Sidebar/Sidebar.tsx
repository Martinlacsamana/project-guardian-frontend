"use client";

import React from 'react';
import { PanelsTopLeft, FileText, Flag, Book, AlertCircle, Home, MessageCircle, HelpCircle, UserPlus, Archive, Mic, Star, Calendar, Smile } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const journalingTools = [
        { name: 'AI Conversation', icon: MessageCircle, description: 'Journal through a guided conversation with AI' },
        { name: 'Quick Entry', icon: FileText, description: 'Traditional journal entry with text editor' },
        { name: 'Voice Notes', icon: Mic, description: 'Record your thoughts and convert to text' },
        { name: 'Guided Prompts', icon: HelpCircle, description: 'Use writing prompts to inspire your entry' },
    ];

    const libraryViews = [
        { name: 'All Entries', icon: Book, description: 'View all your journal entries' },
        { name: 'Favorites', icon: Star, description: 'Your marked favorite entries' },
        { name: 'By Mood', icon: Smile, description: 'Browse entries by sentiment' },
        { name: 'Calendar', icon: Calendar, description: 'View entries by date' },
        { name: 'Archive', icon: Archive, description: 'Past entries you\'ve archived' },
    ];

    return (
        <div className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-60 border-r border-r-gray-800 shadow-lg transition-all duration-300 z-50 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden rounded-tr-1xl rounded-br-1xl`}>
            <div className="h-full flex flex-col w-64 p-3">
                {/* SIDEBAR HEADER */}
                <div className="flex justify-between items-center px-3 pt-4 pb-6">
                    <p className="text-sm font-semibold text-white opacity-90">Journal Space</p>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200" onClick={closeSidebar}>
                        <PanelsTopLeft size={22} />
                    </div>
                </div>

                {/* SIDEBAR CONTENT */}
                <div className="px-3 flex-grow overflow-y-auto text-gray-300 pt-2">
                    {/* Create New Section */}
                    <div className="mb-8">
                        <h3 className="text-xs font-semibold mb-2 text-gray-300">CREATE NEW</h3>
                        <ul className="space-y-3 text-sm">
                            {journalingTools.map((item, index) => (
                                <li key={index} className="group">
                                    <button className="w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-200">
                                        <item.icon size={18} className="text-gray-400" />
                                        <div className="text-left">
                                            <span className="block">{item.name}</span>
                                            <span className="text-xs text-gray-500 group-hover:text-gray-400">{item.description}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Library Views Section */}
                    <div>
                        <h3 className="text-xs font-semibold mb-2 text-gray-300">LIBRARY VIEWS</h3>
                        <ul className="space-y-3 text-sm">
                            {libraryViews.map((item, index) => (
                                <li key={index} className="group">
                                    <button className="w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-200">
                                        <item.icon size={18} className="text-gray-400" />
                                        <div className="text-left">
                                            <span className="block">{item.name}</span>
                                            <span className="text-xs text-gray-500 group-hover:text-gray-400">{item.description}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;