"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // For handling images in Next.js
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Overview } from "@/components/Graph";
import { CreditCard, DollarSign, Package, Percent } from "lucide-react";

export default function Home() {

  const score = 95;

  const [graphRevenue, setGraphRevenue] = useState([
    { name: "02/24", total: 68 },
    { name: "02/25", total: 76 },
    { name: "02/26", total: 0 }
  ]);

  return (
    <div className="container mx-auto px-20 pt-10 items-center pb-20">

      <div className="items-center text-center">
      <h2 className="text-6xl font-bold tracking-tight pb-1.5">Analysis</h2>
        <p className="text-lg text-muted-foreground">Details & Score</p>
      </div>
         <Separator className="h-[3px] mt-4" />

      <div className="flex flex-col md:flex-row items-center py-8 px-6">

        <div className="w-2/3">
          
          <Card className="flex">
            <div className="w-3/4">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                {/* <CardDescription>Fill in your details</CardDescription> */}
              </CardHeader>
              <CardContent>
                  <div className="grid gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <p>The individual participated in an online interview, showcasing their skills and experiences effectively through a digital platform. They engaged with the interviewers, answering questions and presenting themselves professionally in a virtual environment.</p>
                    </div>
                  </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
              </div>
              <div className="-1/4 flex items-center justify-center">

              <div className="relative w-40 h-40 flex items-center justify-center bg-white rounded-full">
                  <div className="absolute w-40 h-40 bg-transparent rounded-full" style={{ backgroundImage: "conic-gradient(orange 0%, orange 76%, white 76%, white 100%)" }}></div>
                  <div className="absolute w-32 h-32 bg-white rounded-full"></div> {/* Inner Circle in White */}
                  <span className="text-3xl z-10 relative">76</span> {/* Score Text */}
              </div>
            </div>
          </Card>

        </div>
        

        <div className="w-1/3 flex flex-col items-center justify-center">
          <Image src="/emir.png" alt="Interviewee Name" width={250} height={250} className="rounded-lg" />
          <div className="py-4">
        </div>

        </div>
      </div>
      
      <Separator className="h-[1px] mt-4 mb-4" />

      <div className="flex pt-8">
      <div className="w-2/3 items-center justify-center ">
        <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Interview Questions</CardTitle>
          <CardDescription>
            3 Questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            
              <div  className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>1</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-md font-bold leading-none mb-2">How old where you when you first shat your pants?</p>
                  <p className="text-sm -foreground">
                  The individual participated in an online interview, showcasing their skills
                  </p>
                </div>
                <div className="ml-auto font-medium">8/10</div>
              </div>

              <div  className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>2</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-md font-bold leading-none mb-2">How old where you when you first shat your pants?</p>
                  <p className="text-sm -foreground">
                  The individual participated in an online interview, showcasing their skills
                  </p>
                </div>
                <div className="ml-auto font-medium">8/10</div>
              </div>

              <div  className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>3</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-md font-bold leading-none mb-2">How old where you when you first shat your pants?</p>
                  <p className="text-sm -foreground">
                  The individual participated in an online interview, showcasing their skills
                  </p>
                </div>
                <div className="ml-auto font-medium">8/10</div>
              </div>
          </div>
        </CardContent>
      </Card>
      </div>
        <div className="w-1/3 flex items-center justify-center">
        <Overview data={graphRevenue} />
        </div>
      </div>


      <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 pt-8 pb-10">

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Sentiment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">😊</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">⚓</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Gesture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">👍</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Posture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">🧍</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Class</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">🎩</span>
              </div>
            </Card>
    </div>
      



    </div>
  );
}
