import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/NavBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-700 to-red-500 text-white font-inter">
      <Navbar />
      <Head>
        <title>Sia - Your Personalized Learning Journey</title>
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-opacity-90">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold leading-tight mb-4 mt-4">
            Unleash Your Learning Potential
          </h1>
          <p className="text-xl mb-6">
            Your personalized AI-powered teacher is just a step away.
          </p>
          <button className="bg-white text-purple-800 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>


      {/* Interactive How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12 text-white">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
            {[
              {
                title: 'Upload Document',
                description: 'Start by uploading your study material.',
                icon: '/icons/upload.svg',
              },
              {
                title: 'Customize Teacher',
                description: 'Adjust the AI to match your learning style.',
                icon: '/icons/customize.svg',
              },
              {
                title: 'Set Goals',
                description: 'Define your milestones and timeline.',
                icon: '/icons/goals.svg',
              },
              {
                title: 'Learn & Achieve',
                description: 'Follow the roadmap and track your progress.',
                icon: '/icons/learn.svg',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-purple-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 p-8"
              >
                <Image src={step.icon} alt={step.title} width={80} height={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Background Image */}
      <section id="features" className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url("/images/features-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-semibold mb-12">Amazing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                title: 'AI-Powered Learning',
                description: 'Experience personalized, adaptive learning.',
              },
              {
                title: 'Flexible Scheduling',
                description: 'Learn at your pace, on your schedule.',
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your growth with real-time insights.',
              },
              {
                title: 'Community Support',
                description: 'Engage with peers and mentors.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-purple-600 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Visuals */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-semibold mb-12">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
            {[
              {
                quote: '“The personalized teacher has revolutionized my study habits!”',
                name: 'Emily, 21',
                image: '/users/emily.jpg',
              },
              {
                quote: '“Sia helped me stay on track with a perfect roadmap!”',
                name: 'John, 27',
                image: '/users/john.jpg',
              },
              {
                quote: '“I love learning at my own pace, thanks to Sia.”',
                name: 'Sophia, 34',
                image: '/users/sophia.jpg',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-purple-700 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="mx-auto mb-4 rounded-full" />
                <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-center">
        <h2 className="text-5xl font-bold mb-6">Join Sia Today</h2>
        <p className="text-xl mb-8">Create your personalized learning journey now and start achieving your goals!</p>
        <button className="bg-white text-purple-800 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Footer with Dark Theme */}
      <footer className="bg-black py-10 text-center text-gray-500">
        <div className="container mx-auto">
          <p>&copy; 2024 Sia. Your Learning Journey Starts Here.</p>
          <div className="mt-4">
            <a href="#" className="mx-4 hover:text-white">About Us</a>
            <a href="#" className="mx-4 hover:text-white">Support</a>
            <a href="#" className="mx-4 hover:text-white">Contact</a>
          </div>
          <div className="mt-6">
            <a href="#" className="mx-2 hover:text-white">Twitter</a>
            <a href="#" className="mx-2 hover:text-white">Facebook</a>
            <a href="#" className="mx-2 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
