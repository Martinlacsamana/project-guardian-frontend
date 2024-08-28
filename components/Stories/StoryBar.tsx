import React from 'react';
import { SearchIcon } from 'lucide-react';

const StoryBar = () => {
    return (
        <div className="relative w-1/3 max-w-3xl ">
            <div className="relative w-full">
                <input 
                    type="text" 
                    placeholder="Search a user..." 
                    className="input w-full pl-10 pr-4 h-10 rounded-full bg-gray-800 text-white placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>  
    )
}

export default StoryBar;