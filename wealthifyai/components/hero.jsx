"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Herosection = () => {

    const imageRef = useRef();
 
    useEffect(()=>{
        const imageElement = imageRef.current;

        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[])

    return (
        <div className='pb-20 px-8 flex flex-col items-center text-center mt-50 w-full'>
          <div className="w-full max-w-screen-xl px-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight gradient-title w-full text-center">
              <span className="block font-bold">Manage Your Finances</span>
              <span className="block font-bold">with AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 mt-5 max-w-4xl mx-auto">
              An AI-powered financial management platform that helps you track,
              analyze, and optimize your spending with real-time insights.
            </p>
      
            <div className="mt-6 flex justify-center gap-6">
              <Link href="/dashboard">
                <Button size="lg" className="px-10">Get Started</Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="px-10">Watch Demo</Button>
              </Link> 
            </div>
      
            <div className="mt-10 hero-image-wrapper w-full">
              <div ref={imageRef} className="hero-image w-full">
                <Image
                  src="/banner.jpeg"
                  alt="Hero image"
                  className="rounded-lg shadow-2xl border mx-auto w-full"
                  width={1600}
                  height={900}  
                  priority    
                />
              </div>
            </div>
          </div>
        </div>
    );
      
}

export default Herosection