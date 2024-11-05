import React from 'react';
import { Eye } from 'lucide-react';

interface StoryCardProps {
    title: string;
    icon: string;
    createdAt: string;
    summary: string;
    sentiment: number; // 0-100
}

const StoryCard: React.FC<StoryCardProps> = ({ title, icon, createdAt, summary, sentiment }) => {
    // Function to determine color based on sentiment
    const getSentimentColor = (sentiment: number) => {
        if (sentiment >= 75) return 'bg-green-500';
        if (sentiment >= 50) return 'bg-yellow-500';
        if (sentiment >= 25) return 'bg-orange-500';
        return 'bg-red-500';
    };

    return (
        <div className="border border-3 border-gray-800 bg-opacity-90 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative group">
            {/* Overlay */}
            <div className="absolute inset-0 cursor-pointer bg-gray-800 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg space-x-1">
                <Eye/>
                <span className="text-white text-lg font-semibold">View </span>
                
            </div>
            
            <div className="flex-grow">
                <div className="flex items-center mb-1">
                    <span className="text-2xl mr-2">{icon}</span>
                    <h2 className="text-lg font-semibold text-white">{title}</h2>
                </div>
                <p className="text-xs text-gray-400 mb-2">{createdAt}</p>
                <p className="text-sm text-gray-300">{summary}</p>
            </div>
            <div className="flex items-center mt-4">
                <div className="text-sm text-gray-400 mr-2">Sentiment:</div>
                <div className={`w-16 h-2 rounded-full ${getSentimentColor(sentiment)}`}></div>
                <div className="text-sm text-gray-400 ml-2">{sentiment}%</div>
            </div>
        </div>
    );
};

export default StoryCard;