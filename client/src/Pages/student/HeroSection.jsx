import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-white text-4xl mb-4">
          Find the Best Courses for you
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover , Learn and Upskills with our Wide range o Courses
        </p>
        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-lg max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            placeholder= "Search Courses"
            className="flex-grow border-none px-6 py-3 focus-visible:ring-0 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          ></Input>
          <Button className="bg-blue-600 dark:bg-blue-700 px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 text-white">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
