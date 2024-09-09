"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, UserButton, useUser, useAuth } from '@clerk/nextjs';
import { FaChartPie, FaUsers, FaCog, FaBars, FaSignOutAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const { signOut } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <SignedIn>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`bg-blue-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-between px-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              className="text-white md:hidden"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <nav>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800 hover:text-white"
            >
              <FaChartPie /> Dashboard
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800 hover:text-white"
            >
              <FaUsers /> Users
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800 hover:text-white"
            >
              <FaCog /> Settings
            </a>
            <button
              onClick={() => signOut()}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800 hover:text-white w-full text-left"
            >
              <FaSignOutAlt /> Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-700 md:hidden"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                <FaBars />
              </button>
              <h2 className="text-xl font-semibold">Welcome Back!</h2>
            </div>
            <div className="flex items-center space-x-4">
              {user && (
                <>
                  <span className="text-gray-700">{user.fullName || user.username}</span>
                  <UserButton />
                </>
              )}
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Statistics Cards */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold">Total Users</h3>
                <p className="text-gray-600 mt-2">1,234</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold">Active Users</h3>
                <p className="text-gray-600 mt-2">567</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold">New Signups</h3>
                <p className="text-gray-600 mt-2">89</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <ul>
                <li className="flex justify-between items-center py-2">
                  <p>User John added a new post.</p>
                  <span className="text-gray-600">2 hours ago</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <p>User Jane signed up.</p>
                  <span className="text-gray-600">4 hours ago</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <p>User Mike updated his profile.</p>
                  <span className="text-gray-600">6 hours ago</span>
                </li>
              </ul>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white shadow-md p-4 flex justify-between items-center">
            <p className="text-gray-600">© 2024 Your Company</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms of Service
              </a>
            </div>
          </footer>
        </div>
      </div>
    </SignedIn>
  );
};

export default Dashboard;
