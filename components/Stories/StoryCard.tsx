import React from 'react';

interface StoryCardProps {
    title: string;
    icon: string;
    createdAt: string; // New prop for creation date
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
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">{icon}</span>
                <h2 className="text-lg font-semibold text-white opacity-90">{title}</h2>
            </div>
            <p className="text-xs text-gray-400 mb-2">{createdAt}</p>
            <p className="text-sm text-gray-300 mb-4">{summary}</p>
            <div className="flex items-center">
                <div className="text-sm text-gray-400 mr-2">Sentiment:</div>
                <div className={`w-16 h-2 rounded-full ${getSentimentColor(sentiment)}`}></div>
                <div className="text-sm text-gray-400 ml-2">{sentiment}%</div>
            </div>
        </div>
    );
};

export default StoryCard;