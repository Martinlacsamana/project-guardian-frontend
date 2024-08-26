import React from 'react'

interface Props {
    text: string
}

const UserMessageCard = ({text}: Props) => {

    return (
        <div className="w-full flex justify-end">
            <div className="w-2/3 bg-[#444654] bg-opacity-30 px-5 py-2.5 rounded-3xl">
                <p className="text-md opacity-80">{text}</p>

            </div>
            
        </div>

    )
}

export default UserMessageCard