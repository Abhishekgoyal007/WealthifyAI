import Herosection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <Herosection/>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index)=>{
              return(
                <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((featuresData, index)=>(
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {featuresData.icon}
                  <h3 className="text-xl font-semibold">{featuresData.title}</h3>
                  <p className="text-gray-600">{featuresData.description}</p>
                </CardContent>
              </Card>            
            ))}
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((howItWorksData, index)=>(
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {howItWorksData.icon}
                </div>
                  <h3 className="text-xl font-semibold mb-4">{howItWorksData.title}</h3>
                  <p className="text-gray-600">{howItWorksData.description}</p>
              </div>            
            ))}
          </div>
        </div>
      </section>

      {/* testinomial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonialsData, index)=>(
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonialsData.image}
                      alt={testimonialsData.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonialsData.name}</div>
                      <div className="text-sm text-gray-600">{testimonialsData.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonialsData.quote}</p>
                </CardContent>
              </Card>            
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center mb-4">
          <h2 className="text-3xl text-white font-bold text-center mb-12">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto ">
            Join thousands of users who are already managing their finances
            smarter with WealthifyAI
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trail
          </Button>
          </Link>
          
        </div>
      </section>
    </div>
  )
}
