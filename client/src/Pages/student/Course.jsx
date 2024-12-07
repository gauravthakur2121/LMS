import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

import React from "react";

const Course = () => {
  return (
    <Card classname="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.jTHguDK-axDvhWYehTxg6AHaEJ&pid=Api&P=0&h=180"
          alt="course"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className='mt-2 px-5 py-4 space-y-3'>
        <h1 className="font-bold hover:underline text-lg truncate">
          Nextjs Complete Course in Hindi 2024
        </h1>
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className='h-8 w-8'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-medium text-sm">Gaurav MernStack</h1>
        </div>
        <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            Advance
        </Badge>
        </div>
        <div className="text-lg font-bold">
            <span>₹499</span>
        </div>
        
      </CardContent>
    </Card>
  );
};

export default Course;