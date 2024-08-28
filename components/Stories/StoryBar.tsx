import React from 'react';
import { SearchIcon } from 'lucide-react';

const StoryBar = () => {
    return (
        <div className="relative w-1/3 max-w-3xl">
            <div className="relative w-full">
                <input 
                    type="text" 
                    placeholder="Search for an entry..." 
                    className="input w-full pl-10 pr-4 h-10 rounded-full border border-gray-700 bg-transparent placeholder-gray-500 text-gray-200 transition-all duration-200 focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>  
    )
}

export default StoryBar;