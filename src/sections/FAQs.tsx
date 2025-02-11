"use client";
import React from "react";
import PlusIcon from "@/assets/plus.svg"; 
import MinusIcon from "@/assets/minus.svg";
import clsx from "clsx";



const items =[
    {
        question: "What is the purpose of the corrosion prediction website?",
        answer: "The website helps users estimate the corrosion rate of metals and predict the lifespan of equipment based on environmental and operational conditions."
      },
      {
        question: "How does the website calculate the corrosion rate?",
        answer: "The website uses algorithms based on scientific formulas and historical data, which take into account factors like metal type, exposure to elements, and operating conditions to estimate corrosion rate."
      },
      {
        question: "What types of metals can be analyzed for corrosion predictions?",
        answer: "The website supports predictions for various metals, including steel, aluminum, copper, and other commonly used industrial materials."
      },
      {
        question: "Can I upload my own environmental data for corrosion analysis?",
        answer: "Yes, users can input or upload specific environmental data, such as humidity, temperature, and exposure to chemicals, to generate more accurate corrosion predictions."
      },
      {
        question: "How accurate are the corrosion rate predictions?",
        answer: "The accuracy of predictions depends on the quality of the data provided. The website uses well-established models, but real-world variations can affect actual outcomes."
      }
];

const AccordinalItem = ({question, answer} :{question : string; answer: string;}) =>{

  const[isOpen , setIsOpen] = React.useState(false);
  return (
    <div className="py-7 border-b border-black/100" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon/> : <PlusIcon />}
      </div>
      <div className={clsx("mt-4",{hidden : !isOpen, "" : isOpen === true,})}>{answer}</div>
    </div>
  )
}
export const FAQs =()=>{
    return (
        <div className=" text-black bg-[#D1D0CE] py[72px]">
            <div className="container ">
                <h2 className=" text-center text-5xl font-sans sm:text-6xl text-black tracking-tighter">Frequently asked questions</h2>
                <div className="mt-12 ">{/*max-w-[648px] mx-auto */}
                    {items.map(({question ,answer }) => (
                      <AccordinalItem question={question} answer={answer} key={question}/>
                    ))}
                </div>
            </div>
        </div>
    )
};