"use client";

import React from 'react';
import { PanelsTopLeft, FileText, Flag, Book, AlertCircle, Home, MessageCircle, HelpCircle, UserPlus, Archive } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const favoriteItems = [
        { name: 'Technical Docs', icon: FileText },
        { name: 'Campaign Guidelines', icon: Flag },
        { name: 'Important Rules', icon: Book },
        { name: 'Onboarding', icon: AlertCircle },
    ];

    const mainMenuItems = [
        { name: 'Dashboard', icon: Home },
        { name: 'Campaigns', icon: Flag },
        { name: 'Chat', icon: MessageCircle },
        { name: 'Support Center', icon: HelpCircle },
        { name: 'Leads', icon: UserPlus },
        { name: 'Archive', icon: Archive },
    ];

    return (
        <div className={`fixed top-0 left-0 h-full bg-black bg-opacity-90 border-r border-r-gray-800 shadow-lg transition-all duration-300 z-50 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden rounded-tr-1xl rounded-br-1xl`}>
            <div className="h-full flex flex-col w-64 p-3">
                {/* SIDEBAR HEADER */}
                <div className="flex justify-between items-center px-3 pt-4 pb-6">
                    <p className="text-sm font-semibold text-white opacity-90">Martin's Dashboard</p>
                    <div className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200" onClick={closeSidebar}>
                        <PanelsTopLeft size={22} />
                    </div>
                </div>

                {/* SIDEBAR CONTENT */}
                <div className="px-3 flex-grow overflow-y-auto text-gray-300 pt-2">
                    {/* Favorites Section */}
                    <div className="mb-6">
                        <h3 className="text-xs font-semibold mb-2 text-gray-300">Favorites</h3>
                        <ul className="space-y-1 text-sm">
                            {favoriteItems.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-200">
                                    <item.icon size={18} className="text-gray-400" />
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Menu Section */}
                    <div>
                        <h3 className="text-xs font-semibold mb-2 text-gray-300">Main Menu</h3>
                        <ul className="space-y-1 text-sm">
                            {mainMenuItems.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-200">
                                    <item.icon size={18} className="text-gray-400" />
                                    <span>{item.name}</span>
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