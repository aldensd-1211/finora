"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-28 px-4 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent z-0 h-1/3" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/30 to-purple-50/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-2xl opacity-30" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent z-0" />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Smarter Financial
              </span>{" "}
              <span>Management</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Finora combines AI-powered insights with intuitive tools to help
              you track, analyze, and optimize your finances like never before.
            </p>

            <div className="mt-10">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-10 text-lg h-14 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Tilt Image */}
          <div className="lg:w-1/2">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={400}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white backdrop-blur-sm">
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
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
