"use client";

import React from 'react';
import { PanelsTopLeft, FileText, Flag, Book, AlertCircle, Users, Home, MessageCircle, HelpCircle, UserPlus, Archive } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={`fixed top-0 left-0 h-full bg-black bg-opacity-90  border-r border-r-gray-800 shadow-lg transition-all duration-300 z-50 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden rounded-tr-1xl rounded-br-1xl`}>
            <div className="h-full flex flex-col w-64 p-3">
                {/* SIDEBAR HEADER */}
                <div className="flex justify-between items-center px-3 pt-4 space-x-6">
                    <p className="text-sm font-semibold opacity-90">Martin's Dashboard</p>

                    <div className="cursor-pointer text-gray-300" onClick={closeSidebar}>
                        <PanelsTopLeft size={22} />
                    </div>
                </div>

                {/* SIDEBAR CONTENT */}
                <div className="px-3 flex-grow overflow-y-auto text-gray-300 pt-8">
                    {/* Favorites Section */}
                    <div className="mb-8">
                        <h3 className="text-xs font-semibold mb-4 text-gray-400">Favorites</h3>
                        <ul className="space-y-2 text-sm space-y-5">
                            <li className="flex items-center space-x-3"><FileText size={18} /><span>Technical Docs</span></li>
                            <li className="flex items-center space-x-3"><Flag size={18} /><span>Campaign Guidelines</span></li>
                            <li className="flex items-center space-x-3"><Book size={18} /><span>Important Rules</span></li>
                            <li className="flex items-center space-x-3"><AlertCircle size={18} /><span>Onboarding</span></li>
                        </ul>
                    </div>

                    {/* Main Menu Section */}
                    <div>
                        <h3 className="text-xs font-semibold mb-4 text-gray-400">Main Menu</h3>
                        <ul className="space-y-2 text-sm space-y-5">
                            <li className="flex items-center space-x-3"><Home size={18} /><span>Dashboard</span></li>
                            <li className="flex items-center space-x-3"><Flag size={18} /><span>Campaigns</span></li>
                            <li className="flex items-center space-x-3"><MessageCircle size={18} /><span>Chat</span></li>
                            <li className="flex items-center space-x-3"><HelpCircle size={18} /><span>Support Center</span></li>
                            <li className="flex items-center space-x-3"><UserPlus size={18} /><span>Leads</span></li>
                            <li className="flex items-center space-x-3"><Archive size={18} /><span>Archive</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;