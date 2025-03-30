import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className='pb-20 px-4 flex flex-col items-center text-center mt-50'>
        <div className="w-full max-w-screen-lg px-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight gradient-title w-full text-center">
                <span className="block">Manage Your Finances</span>
                <span className="block">with Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 mt-5 max-w-3xl mx-auto">
                An AI-powered financial management platform that helps you track,
                analyze, and optimize your spending with real-time insights.
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">Get Started</Button>
                </Link>
                <Link href="/">
                    <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
                </Link> 
            </div>

            <div className="mt-10">
                <Image
                    src="/banner.jpeg"
                    alt="Hero image"
                    className="rounded-lg shadow-2xl border mx-auto"
                    width={1280} 
                    height={720} 
                />
            </div>
        </div>
    </div>
  )
}

export default Herosection
