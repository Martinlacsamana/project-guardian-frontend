"use client"
import React, { useEffect } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import PromptCard from "./PromptCard";

interface Props {
    moveLeft: boolean
}

const Carousel = ({moveLeft}: Props) => {
    const prompts = [
        "What was your favorite moment today?",
        "What's one thing you're grateful for right now?",
        "Describe a small act of kindness you witnessed",
        "What made you smile today?",
        "What's a tiny victory you had recently?",
        "How did you take care of yourself today?",
        "What's a simple pleasure you enjoyed?",
        "What's something new you learned today?",
        "Describe a brief moment of peace you experienced",
        "What's a little thing that brightened your mood?",
        "What's a minor accomplishment you're proud of?",
        "Share a quick thought that made you pause and reflect",
        "What's a tiny detail you appreciated today?",
        "Describe a brief conversation that stuck with you",
        "What's a small decision you made that you feel good about?",
        "What went well today, no matter how small?",
        "What's a challenge you faced and how did you handle it?",
        "Describe the best part of your morning routine",
        "What's a small goal you're working towards?",
        "What's something you're looking forward to tomorrow?"
      ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; // minus 8 is because of the gap we have between the cards

    if (moveLeft) {
        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 100, // Increased duration for slower movement
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });

    } else {
        controls = animate(xTranslation, [finalPosition, 0], {
            ease: "linear",
            duration: 200, // Increased duration for slower movement
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        });

    }
    

    // This is our cleanup when this component dismounts
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <main className="overflow-hidden relative h-48"> {/* Added height and relative positioning */}
      <motion.div
        className="absolute left-0 flex gap-4" // Reduced gap
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...prompts, ...prompts].map((prompt, index) => (
          <PromptCard key={index} text={prompt} />
        ))}
      </motion.div>
    </main>
  );
};

export default Carousel;