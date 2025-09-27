"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP scroll function
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: targetId ? `#${targetId}` : 0, offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  // Links for both desktop and mobile
  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 rounded-2xl px-6 py-3 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src={"/images/logo/logo2.png"}
            alt="Codolve Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Codolve
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="font-medium text-gray-300 hover:text-cyan-300 transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {!isMenuOpen ? (
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-cyan-400/10 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} className="text-gray-300" />
          </button>
        ) : (
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-cyan-400/10 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} className="text-gray-300" />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-x-0 top-[64px] w-full md:hidden
             bg-white/10 backdrop-blur-xl border-t border-white/20
             shadow-lg shadow-cyan-500/10 z-40
             flex flex-col items-center space-y-6 py-6 text-xl"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-gray-200 hover:text-cyan-300 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
