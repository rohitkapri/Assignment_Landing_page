import { useState } from "react";

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import {motion} from 'motion/react';


const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer for this question goes here.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer for this question goes here.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer for this question goes here.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer for this question goes here.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <motion.section
    initial={{ scaleY: 0, opacity: 0 }}
    whileInView={{ scaleY: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ transformOrigin: "center" }} 
     className="md:pt-[42px] pt-[25px] md:pb-[100px] pb-[30px] md:px-20 px-5 flex flex-col md:gap-[110px] gap-16">
      <div><h1>FREQUENTLY ASKED QUESTIONS (FAQs)</h1></div>
    <div className=" w-full ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-t border-b border-gray-300 last:border-none"
        >
          <button
            className="flex justify-between w-full py-6 text-left text-lg font-semibold transition-none hover:bg-transparent hover:scale-100 bg-transparent text-black"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <Icon icon={'mdi:minus'}  className={`transition-transform duration-300 ${openIndex === index ? 'translate-y-1/2' : ''}`}/>
            ) : (
              
              <Icon icon={'ic:twotone-plus'}/>
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 pb-4 px-6">{faq.answer}</p>
          </div>
        </div>
        
      ))}
    </div>
    </motion.section>
    </>
  );
}
