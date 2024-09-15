// components/Dashboard.tsx
"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
// import { Calendar } from "react-calendar";
import { enUS } from "date-fns/locale";
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import { supabase } from "../lib/supabaseClient";


export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Personal Learning App</h1>
        <div className="flex items-center">
          <Image
            src={user?.imageUrl || "/default-avatar.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
            width={40}
            height={40}
          />
          <div>
            <p className="text-sm">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow p-6">
        {/* Right Section - Calendar and Today's Activity */}
        <aside className="w-1/4 bg-white p-4 shadow-md rounded-lg">
          {/* Calendar */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Calendar</h2>
            {/*<Calendar/>*/}
          </div>
          
          {/* Today's Activity */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Today&apos;s Activity</h2>
            <ul className="text-sm list-disc list-inside">
              <li>Completed JavaScript lesson</li>
              <li>Python course: 50% progress</li>
              {/* Dynamically generate these based on activity */}
            </ul>
          </div>
        </aside>

        {/* Main Section */}
        <main className="flex-grow ml-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Square box with plus symbol */}
            <div className="bg-white shadow-md rounded-lg flex items-center justify-center h-40 hover:shadow-lg cursor-pointer">
              <span className="text-4xl text-gray-400">+</span>
            </div>

            {/* Python progress box */}
            <div className="bg-white shadow-md rounded-lg p-4 relative h-40 hover:shadow-lg cursor-pointer">
              <h2 className="text-lg font-semibold">Python</h2>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gray-300 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">50% complete</p>
              </div>
            </div>
          </div>

          {/* Additional sections for other learning modules */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Learning Modules</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Add more square boxes or learning progress sections as needed */}
              <div className="bg-white shadow-md rounded-lg p-4 h-40 flex items-center justify-center">
                <p className="text-gray-600">JavaScript</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 h-40 flex items-center justify-center">
                <p className="text-gray-600">React</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 h-40 flex items-center justify-center">
                <p className="text-gray-600">Data Structures</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
