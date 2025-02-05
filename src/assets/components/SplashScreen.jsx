// SplashScreen.js
import React, { useEffect, useState } from 'react';
import {AppWindow} from "lucide-react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change to your desired time
    
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        }
        clearInterval(progressInterval);
        return oldProgress;
      });
    }, 30); // Adjust progress update speed

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
        <div className="flex flex-col items-center text-center ">
            <AppWindow 
            strokeWidth={2}
            size={80}
            color='#2196F3'
            className="mb-4"/>
            <p className="text-2xl font-bold text-gray-900">Website Builder</p>
          <div className="w-full h-2 bg-gray-200 rounded-lg mt-4">
            <div
              className="h-full bg-blue-500 rounded-lg transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
