import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = async () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src={"/logo.png"}
            alt="Finora Logo"
            width={180}
            height={50}
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/dashboard" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
              <Link 
                href="/transaction/create" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <PenBox size={16} />
                Transactions
              </Link>
            </div>
            
            <Link href="/transaction/create">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-9 px-3 md:px-4 hover:bg-blue-50/50"
              >
                <PenBox size={18} className="text-blue-600" />
                <span className="hidden sm:inline ml-1.5">New</span>
              </Button>
            </Link>
          </SignedIn>

          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-9 px-4 border-gray-300 hover:border-gray-400"
                >
                  Sign in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button 
                  size="sm" 
                  className="h-9 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                >
                  Get started
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 border-2 border-white shadow-sm",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;