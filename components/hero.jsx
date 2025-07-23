"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-28 px-4 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Gradient overlay - top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent z-0 h-1/3" />
      
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/30 to-purple-50/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated floating elements */}
              <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-blue-400/30 animate-float" />
              <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400/30 animate-float animation-delay-2000" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Smarter Financial
                </span>{" "}
                <span className="relative">
                  Management
                  <svg className="absolute -bottom-4 left-0 w-full h-3 text-blue-400" viewBox="0 0 200 20">
                    <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-2xl relative">
                Finora combines AI-powered insights with intuitive tools to help you track, analyze, and optimize your finances like never before.
              </p>
              
              <div className="mt-10">
                <Link href="/dashboard">
                  <Button 
                    size="lg" 
                    className="px-10 text-lg h-14 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                  >
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/10 z-0" />
              <Image
                src="/banner.jpg"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="w-full h-auto relative z-10"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-20" />
              
              {/* Floating UI elements overlay */}
              <div className="absolute top-4 right-4 z-30 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating animated circles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;