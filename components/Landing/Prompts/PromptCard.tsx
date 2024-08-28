import React from "react";
import { ArrowRight } from "lucide-react"; // Assuming you're using lucide-react for icons

interface Props {
  text: string;
}

const PromptCard =  ({ text }: Props ) => {
  return (
    <div className="bg-[#2A2A2A] h-[100px] w-[300px] rounded-lg mt-16 p-4 flex justify-between items-center cursor-pointer hover:bg-[#3A3A3A] transition-colors">
      <p className="text-white opacity-80 text-sm font-medium">{text}</p>
      <ArrowRight className="text-gray-400 w-4 h-4" />
    </div>
  );
};

export default PromptCard;