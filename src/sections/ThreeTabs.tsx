import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { motion } from "motion/react";

export default function ThreeTabs() {
  return (
    <>
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.1 }}
    exit={{ opacity: 0, y: 50 }}
     className="mb-20 md:px-20 px-5 lg:py-40 md:py-20 py-10 bg-transparent">

      
    <Tabs defaultValue="research" className="w-full flex md:flex-row flex-col gap-20">

      {/* Tab Buttons */}
      <div className="md:w-1/2 w-full flex flex-col gap-6 items-center ">
      <div className="w-full flex items-start"><h1 >Lorem ipsum dolor sit amet</h1></div>

      <div className="w-full rounded-[6px]">
      <TabsList className="grid w-full grid-cols-3 bg-[white] rounded-[6px] ">
        <TabsTrigger value="research" className="bg-transparent text-black data-[state=active]:bg-[#c1d8f0] data-[state=active]:text-black
  data-[state=inactive]:bg-white data-[state=inactive]:text-black transition-none hover:scale-100 rounded-none font-semibold text-xl">Research</TabsTrigger>
        <TabsTrigger value="plan" className="bg-transparent text-black data-[state=active]:bg-[#c1d8f0] data-[state=active]:text-black 
  data-[state=inactive]:bg-white data-[state=inactive]:text-black transition-none hover:scale-100 rounded-none font-semibold text-xl">Plan</TabsTrigger>
        <TabsTrigger value="design" className="bg-transparent text-black data-[state=active]:bg-[#c1d8f0] data-[state=active]:text-black 
  data-[state=inactive]:bg-white data-[state=inactive]:text-black transition-none hover:scale-100 rounded-none font-semibold text-xl">Design</TabsTrigger>
      </TabsList>
      </div>

      <div>
        <p>
        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>
      </div>
      <div className="flex w-full items-start">
        <a href="#" className="text-[#1959AC] text-[16px] flex gap-4 items-center text-center"><span>Check Tools</span><Icon icon={"ep:right"} width={16} className="self-center mt-1"/></a>
      </div>
      </div>

      {/* Tab Content */}
      <div className="md:w-1/2 w-full flex h-full max-h-[406px]">
      <TabsContent value="research" className="h-full w-full">
        <img src="/assets/images/Left.png" alt="left" className="w-full h-full object-cover"/>
      </TabsContent>
      <TabsContent value="plan">
      <img src="/assets/images/heroimage.svg" alt="left" className="w-full h-full object-cover"/>
      </TabsContent>
      <TabsContent value="design">
      <img src="/assets/images/purchase.svg" alt="left" className="w-full h-full object-cover"/>
      </TabsContent>
      </div>
    </Tabs>
    </motion.section>
    </>
  );
}
