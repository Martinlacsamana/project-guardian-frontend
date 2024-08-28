import React from 'react'

interface StoryCardProps {
    title: string;
    startDate: string;
    lastUpdated: string;
    status: string;
    icon: string;
    collaborators: string[];
}

const StoryCard: React.FC<StoryCardProps> = ({ title, startDate, lastUpdated, status, icon, collaborators }) => {
    return (
        <div className="border border-2 border-gray-800 rounded-lg p-4 text-white shadow-lg">
            <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{icon}</span>
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-gray-400">Start: {startDate}</p>
            <p className="text-sm text-gray-400">Last updated: {lastUpdated}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm bg-blue-500 px-2 py-1 rounded">{status}</span>
                <div className="flex">
                    {collaborators.map((user, index) => (
                        <div key={index} className="w-6 h-6 bg-gray-500 rounded-full -ml-2 first:ml-0" title={user}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StoryCard