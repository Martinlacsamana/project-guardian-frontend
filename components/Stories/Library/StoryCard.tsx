import React from "react"
import { Entry } from "@/types/Entry"
import  {useRouter } from "next/router"


interface Props {
    entry: Entry
}

const StoryCard = ({entry}: Props) => {
    const router = useRouter()
    
    // handle navigation to open that story
    const handleClick = () => {
        router.push(`/library/${entry._id}`)

    }

    // To shorten the text just as text bait
    const shortendedText = (text: string) => {
        return text.slice(0, 20)
    }

    return (

        <div className="flex " onClick={handleClick}>
            {/* L.H.S of the StoryCard */}
            <img alt="Journal Cover" src=""/>


            {/* R.H.S of the StoryCard */}
            <div className="flex flex-col text-left space-y-3 ">
                <h1>{entry.title}</h1>
                <p>{shortendedText(entry.text)}</p>
                <p>{entry.location}</p>
            </div>
        </div>

    )

}


export default StoryCard