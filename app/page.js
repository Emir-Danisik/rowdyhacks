"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // For handling images in Next.js
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Overview } from "@/components/Graph";

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { db } from "./firebase";

export default function Home() {

  const score = 95;
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const [graphRevenue, setGraphRevenue] = useState([
    { name: "02/23", total: 55 },
    { name: "02/24", total: 68 },
    { name: "02/25", total: 76 }
  ]);

  // Fetching data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'conversations', 'details');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCompany(data.company);
        setJobTitle(data.jobTitle);
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-20 pt-10 items-center pb-20">

      <div className="items-center text-center">
      <h2 className="text-6xl font-bold tracking-tight pb-1.5">Your Interview Analysis</h2>
        <p className="text-2xl text-medium-foreground">{company} - {jobTitle}</p>
      </div>
         <Separator className="h-[3px] mt-4" />

      <div className="flex flex-col md:flex-row items-center py-8">

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
                      <p>You demonstrated a strong ability to convey your skills and experiences effectively within a digital context. Your engagement with the interviewer was noteworthy; The questions were answered with clarity and maintained a professional presence throughout the virtual interaction. </p>
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

      <div className="flex pt-8 pb-8">
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
                  <p className="text-md font-bold leading-none mb-2">Why do you want to work for {company}?</p>
                  <p className="text-sm -foreground">
                  Your response is effective because it not only demonstrates a deep understanding of and appreciation for the company&apos;s values and work environment but also aligns the candidate&apos;s personal and professional goals with the company's mission and culture. 
                  </p>
                </div>
                <div className="ml-auto font-medium text-green-500">9/10</div>
              </div>

              <div  className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>2</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-md font-bold leading-none mb-2">Imagine it is your first day here at the company. What do you want to work on? What features would you improve on?</p>
                  <p className="text-sm -foreground">
                  Your response effectively displays your readiness to contribute meaningful improvements to the company&apos;s products from the outset. 
                  </p>
                </div>
                <div className="ml-auto font-medium text-orange-500">6/10</div>
              </div>

              <div  className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>3</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-md font-bold leading-none mb-2">What are the most interesting projects you have worked on and how might they be relevant to {company} environment?</p>
                  <p className="text-sm -foreground">
                  The response is extremely vague, lacking any specific details about the projects, and the outcomes achieved. This makes it difficult for an interviewer to gauge your experience & abilities.
                  </p>
                </div>
                <div className="ml-auto font-medium text-red-500">4/10</div>
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
                  <div className="text-2xl font-bold text-green-500">8/10</div>
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
                  <div className="text-2xl font-bold text-orange-500">6/10</div>
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
                  <div className="text-2xl font-bold text-red-500 ">3/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">👎</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Posture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">9/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">🧍</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Tone</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">7/10</div>
                </CardContent>
              </div>
              <div className="w-1/3 flex items-center justify-center pr-2">
                <span className="text-8xl">🔔</span>
              </div>
            </Card>

            <Card className="flex flex-row">
              <div className="w-2/3">
                <CardHeader className="space-y-0 pb-4">
                  <CardTitle className="text-2xl font-medium text-left">Class</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">10/10</div>
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
