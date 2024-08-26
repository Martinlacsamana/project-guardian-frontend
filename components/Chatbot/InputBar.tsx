"use client"
import React, { useState } from "react"
import { CircleArrowUp } from "lucide-react"



const InputBar = () => {
    
    const [input, setInput] = useState("")
    const isDisabled = (input === ''); // Set this based on your logic
    

    return (
        <div className="relative w-full rounded-[26px] p-1.5 transition-colors bg-[#444654] bg-opacity-30">
            <textarea 
                className="w-full h-12 resize-none border-0 bg-transparent px-4 py-3 rounded-[26px] pr-10 flex items-center opacity-90"
                placeholder="Write a Message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDisabled ? 'text-gray-400' : 'text-current'}`} disabled={isDisabled}>
                <CircleArrowUp size={32} />
            </button>
        </div>
    )
}

export default InputBar