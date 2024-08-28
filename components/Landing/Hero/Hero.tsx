"use client"
import React, {useState} from "react";
import { CircleArrowUp } from "lucide-react";
import LandingBar from "./LandingBar";

const Hero = () => {

    const [input, setInput] = useState("")

    const isDisabled = input === ""


    return (
        <section className="w-[95%] mx-auto px-4 py-12 bg-[#1C1C1C] h-[580px] shadow-lg rounded-lg">
        
        
            <div className="flex flex-col items-center justify-center h-full px-6 md:px-12 gap-12">
                {/* TEXT */}
                <h2 className="text-center text-5xl font-light tracking-tight text-white">What do you want to journal?</h2>

                
                {/* LANDING BAR */}
                <LandingBar/>


                
            </div>



    </section>
    );
}

export default Hero;