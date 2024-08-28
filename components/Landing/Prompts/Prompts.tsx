"use client"
import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";

const Prompts = () => {
  return (
    <section className=" mb-8"> 
      
     
      
      <Carousel moveLeft={true}/>
      <Header/>
      <div className="">
        <Carousel moveLeft={false}/>
      </div>
    </section>
  );
};

export default Prompts;