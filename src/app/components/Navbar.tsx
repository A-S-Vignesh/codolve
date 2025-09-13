"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 backdrop-blur-md border border-gray-100/30 rounded-2xl px-6 py-3 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/20"> */}
          {/* <Code2 size={24} className="text-gray-900" /> */}
          <Image
            src={"/images/logo/logo2.png"}
            alt="Codolve Logo"
            width={32}
            height={32}
            className="text-cyan-400}"
          />
          {/* </div> */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Codolve
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#process"
            className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
          >
            Process
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}

        {!isMenuOpen && (
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-cyan-400/10 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} className="text-gray-300" />
          </button>
        )}

        {isMenuOpen && (
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-cyan-400/10 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} className="text-gray-300" />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 backdrop-blur-md border border-gray-100/30 rounded-2xl z-40 md:hidden shadow-lg shadow-cyan-500/10">
            <div className="flex flex-col items-center space-y-6 py-6 text-xl">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#process"
                className="text-gray-300 hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-cyan-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
