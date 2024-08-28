import React, { useState, useEffect } from "react"
import { CircleArrowUp } from "lucide-react"

const LandingBar = () => {
    const [input, setInput] = useState("")
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const isDisabled = input === ""

    const placeholders = [
        "Write a Message",
        "How are you feeling today?",
        "What's on your mind?",
        "Share your thoughts...",
        "Reflect on your day..."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (input === "") {
                setIsVisible(false) // Start fade out
                setTimeout(() => {
                    setPlaceholderIndex((prevIndex) => 
                        (prevIndex + 1) % placeholders.length
                    )
                    setIsVisible(true) // Start fade in
                }, 300) // Wait for fade out before changing text
            }
        }, 1500)

        return () => clearInterval(interval)
    }, [input])

    return (
        <div className="relative w-2/5 rounded-[26px] p-1 transition-colors bg-[#444654] bg-opacity-30">
            <textarea 
                className="w-full h-12 resize-none border-0 bg-transparent px-5 py-3 rounded-[26px] pr-10 flex items-center opacity-90 relative z-10"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {input === "" && (
                <div className={`absolute left-6 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${isVisible ? 'opacity-50' : 'opacity-0'} pointer-events-none`}>
                    {placeholders[placeholderIndex]}
                </div>
            )}
            <button className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDisabled ? 'text-gray-400' : 'text-current'} z-20`} disabled={isDisabled}>
                <CircleArrowUp size={32} />
            </button>
        </div>
    )
}

export default LandingBar