import React from 'react'

interface Props {
    text: string
}

const AIMessageCard = ({text}: Props) => {

    return (
        <div className="w-full flex justify-start">
            <div className="w-2/3 bg-blue-700 bg-opacity-40 px-5 py-2.5 rounded-3xl">
                <p className="text-md opacity-80">{text}</p>
            </div>
            
        </div>

    )
}

export default AIMessageCard