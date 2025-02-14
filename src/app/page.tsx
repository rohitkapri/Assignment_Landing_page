'use client'

import Hero from "@/sections/Hero";
import BannerOne from "@/sections/BannerOne";
import Category from "@/sections/Category";
import About from "@/sections/About";
import Contact from "@/sections/ContactForm";
import FeatureCarousel from "@/sections/FeatureCarousel";
import TestimonialSlider from "@/sections/Testimonial";
import Client from "@/sections/Client";
import Feature from "@/sections/Feature";
import BannerTwo from "@/sections/BannerTwo";
import Download from "@/sections/Download";
import Gallery from "@/sections/Gallery";
import LearnMore from "@/sections/LearnMore";
import ThreeTabs from "@/sections/ThreeTabs";

import Purchase from "@/sections/Purchase";
import Faq from "@/sections/Faq";
import LastSecond from "@/sections/LastSecond";



export default function Home() {
  return (
  <>
  <Hero/>
  <div className="relative py-10" >
  <Category className = 'z-20' />
  <About className = 'z-20'/>
  <img src="/assets/images/backgroundone.svg" alt="backgroundone" className="absolute z-10 top-[6%] -left-[0%]" />
  </div> 
  <BannerOne/>
  <Client/>
  <Feature/>
  <BannerTwo/>
  <Contact/>
  <Download/>
  
  <Gallery/>
  <LearnMore/>

  <FeatureCarousel/>
  <ThreeTabs/>
  <Purchase/>
  <TestimonialSlider/>
  <Faq/>
  <LastSecond/>
 
  
  </>
  );
}
