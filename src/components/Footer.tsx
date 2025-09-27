import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Image
              src={"/images/logo/logo2.png"}
              alt="Codolve Logo"
              width={32}
              height={32}
              className="text-cyan-400}"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Codolve
            </span>
            <span className="text-gray-400">| Code Smart, Solve Big</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>© {new Date().getFullYear()} Codolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
