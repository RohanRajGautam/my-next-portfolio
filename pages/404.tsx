'use client';

import Link from 'next/link';
import '../styles/globals.css';
import { motion } from 'framer-motion';
import AnimationContainer from '@/components/utils/AnimationContainer';
import SectionContainer from '@/components/utils/SectionContainer';

const PageNotFound = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center min-h-[75vh] w-full text-center relative pt-10">
        
        {/* Cosmos Background Decor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: (Math.random() * 2 + 1) + 'px',
                height: (Math.random() * 2 + 1) + 'px',
              }}
            />
          ))}
        </div>

        <AnimationContainer customClassName="flex flex-col items-center z-10 w-full">
          
          {/* Animated Astronaut SVG */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="mb-10 w-48 h-48 md:w-64 md:h-64 text-gray-400 opacity-90 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Helmet Glow */}
              <circle cx="100" cy="80" r="45" fill="url(#helmetGlow)" />
              {/* Helmet */}
              <rect x="65" y="45" width="70" height="60" rx="30" stroke="currentColor" strokeWidth="3" />
              <rect x="75" y="55" width="50" height="30" rx="15" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" />
              {/* Body */}
              <path d="M70 105C70 105 55 110 50 140C45 170 60 180 60 180H140C140 180 155 170 150 140C145 110 130 105 130 105" stroke="currentColor" strokeWidth="3" />
              {/* Backpack */}
              <rect x="65" y="105" width="70" height="40" rx="5" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
              {/* Arms */}
              <path d="M60 120L35 145" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M140 120L165 145" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              {/* Legs */}
              <path d="M80 180L75 195" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M120 180L125 195" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              {/* Control Panel */}
              <rect x="85" y="125" width="30" height="20" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
              <circle cx="92" cy="135" r="2" fill="#ef4444" className="animate-pulse" />
              <circle cx="100" cy="135" r="2" fill="#22c55e" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="108" cy="135" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1s' }} />
              
              <defs>
                <radialGradient id="helmetGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(100 80) rotate(90) scale(45)">
                  <stop stopColor="white" stopOpacity="0.15" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
            404
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-6 tracking-[0.2em] uppercase">
            Lost in the Void
          </h2>
          
          <p className="text-gray-400 max-w-md mb-12 text-lg leading-relaxed px-6">
            Houston, we have a problem. The page you&apos;re looking for has drifted far beyond our reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/"
              className="px-8 py-4 font-bold text-black bg-white rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
            >
              Back to Earth
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-4 font-bold text-white border-2 border-gray-800 rounded-full transition-all duration-300 hover:border-gray-600 hover:bg-gray-900 active:scale-95"
            >
              Go Back
            </button>
          </div>
          
        </AnimationContainer>

      </div>
    </SectionContainer>
  )
}

export default PageNotFound;