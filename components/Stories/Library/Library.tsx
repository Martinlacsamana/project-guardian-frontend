import React, {useState} from 'react'
import { Entry } from '@/types/Entry'
import StoryCard from './StoryCard'


interface Props {
    entries: Entry[]
}

const SeeEntries = ({ entries }: Props) => {


    return (
        
        // left-align this div
        <div>
            <h1>Dive Into Your Past.</h1>
            <h3>Read Your Entries</h3>

            <div>
                {   
                    entries.map( entry => 
                        <StoryCard entry={entry}/>
                    )
                }
            </div>
        
        </div>
    )


}

export default SeeEntries