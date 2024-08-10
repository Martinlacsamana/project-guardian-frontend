import React from "react"; // Importing React

const Hero = () => {
    return (
        <section className="px-4 py-12 pb-36 bg-gradient-to-b from-white to-blue-200 shadow-lg">
            {/* Container for the hero section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-end px-12"> {/* Changed items-center to items-end */}
                {/* Left side content */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                    {/* Main heading */}
                    <h1 className="text-xl md:text-4xl font-semibold mb-4 text-gray-800">
                        Your Life's a Story.<br /> Journal with Meaning.
                    </h1>
                    {/* Description paragraph */}
                    <p className="text-md mb-6 text-gray-700">
                        Capture your thoughts, memories, and experiences in a meaningful way. Create a legacy for your children that will last beyond your lifetime, training an AI to preserve your stories.
                    </p>
                    {/* Input and button for signing up */}
                    <div className="flex flex-col w-full sm:flex-row">
                        <input 
                            type="email" 
                            placeholder="johndoe@gmail.com" 
                            className="input input-sm w-3/4 input-bordered bg-white border border-orange-600 text-xs rounded-r-none  max-w-sm" 
                        />
                        <button className="btn btn-sm w-1/4 bg-orange-600 text-white border-none rounded-l-none font-normal text-xs hover:bg-orange-700">
                            Journal Now
                        </button>
                    </div>
                </div>
                {/* Right side image */}
                <div className="md:w-1/2">
                    <div className="bg-gray-300 p-4 rounded-lg shadow-md h-96 w-full">
                        {/* Placeholder for the image */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero; 