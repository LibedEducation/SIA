"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleSignInRedirect = () => {
    router.push('/sign-in');
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Sia</div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-left">
            <a
              href="#how-it-works"
              className="block py-4 md:py-0 border-b md:border-none border-gray-700 text-lg hover:text-gray-400 transition duration-200"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="block py-4 md:py-0 border-b md:border-none border-gray-700 text-lg hover:text-gray-400 transition duration-200"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block py-4 md:py-0 border-b md:border-none border-gray-700 text-lg hover:text-gray-400 transition duration-200"
            >
              Testimonials
            </a>
            <SignedOut>
              <a
                onClick={handleSignInRedirect}
                className="m-2 md:m-0 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Get Started
              </a>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
