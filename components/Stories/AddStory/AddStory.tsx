"use client"
import React, { useState } from "react";
import axios from "axios"; // Import Axios


// This will be a popup modal for now!
const AddStory = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleAddStory = async () => {
        try {
            const location = "New York"
            const image = "Testing Image"
            const user_id = "Martin"

            const response = await axios.post('https://right-cricket-illegally.ngrok-free.app/story', { title, text, location, image, user_id }); 
            console.log('Entry saved:', response.data);
            // Optionally reset the form or show a success message
            setTitle('');
            setText('');
        } catch (e: any) {
            console.error('Error saving entry:', e);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="w-1/2 flex flex-col items-center"> {/* Changed to flex-col for better layout */}
            <input 
                className="input mb-2" // Added margin for spacing
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                className="textarea mb-2" // Added margin for spacing
                placeholder="Your journal entry..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                className="btn btn-sm font-normal text-sm" 
                disabled={(title === '') || (text === '')} 
                onClick={handleAddStory}
            >
                Save Journal Entry
            </button>
        </div>
    );
};

export default AddStory;