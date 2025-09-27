"use client";

import { useRef, useEffect } from "react";
import {
  Globe,
  Cloud,
  Palette,
  Server,
  Zap,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

// Define types
interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Project {
  name: string;
  category: string;
  description: string;
  tech: string;
  image: string;
  link?: string;
}

interface ProcessStep {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    desc: "React, Next.js, MERN",
  },
  {
    icon: <Cloud size={24} />,
    title: "SaaS Development",
    desc: "Cloud-based solutions",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    desc: "User-centered design",
  },
  {
    icon: <Server size={24} />,
    title: "API & Backend",
    desc: "Robust backend systems",
  },
  {
    icon: <Zap size={24} />,
    title: "Deployment",
    desc: "Fast and reliable hosting",
  },
];
const projects: Project[] = [
  {
    name: "Ruby Scaffolding",
    category: "Business Website",
    description:
      "A professional website built for Ruby Scaffolding to showcase their scaffolding rental and sales services. Designed with a clean UI for easy navigation and quick service inquiries.",
    tech: "React, Tailwind CSS, Node.js",
    link: "https://rubyscaffolding.com",
    image: "/images/projects/ruby-scaffolding.webp",
  },
  {
    name: "Vigneshwaran",
    category: "Portfolio Website",
    description:
      "A modern personal portfolio website for Vigneshwaran to highlight skills, projects, and professional achievements with a sleek and responsive design.",
    tech: "Next.js, Tailwind CSS",
    link: "https://vigneshwaran.co.in",
    image: "/images/projects/vigneshwaran-portfolio.webp",
  },
];

const processSteps: ProcessStep[] = [
  { title: "Plan", desc: "Requirement analysis & planning" },
  { title: "Design", desc: "UI/UX design & prototyping" },
  { title: "Develop", desc: "Agile development process" },
  { title: "Deploy", desc: "Testing & deployment" },
  { title: "Support", desc: "Maintenance & updates" },
];

const scrollToProjects = () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: "#projects", // ✅ use selector string, not element
    ease: "power2.inOut",
  });
};


export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Main GSAP animations
  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      // ========= HERO TIMELINE =========
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTl
        .fromTo(
          ".hero-title",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
        )
        .fromTo(
          ".hero-subtitle",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-button",
          { y: 20, opacity: 0 }, // smaller distance (20px instead of 40px)
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, // faster
          "-=0.5" // overlaps nicely
        );

      gsap.utils.toArray("section").forEach((section) => {
        const el = section as HTMLElement;
        const yValue = window.innerWidth < 768 ? 30 : 60;

        gsap.fromTo(
          el.querySelectorAll(".fade-in"),
          { y: yValue, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      // ========= SERVICE CARDS =========
      // Example for service cards
      const serviceCards =
        servicesRef.current?.querySelectorAll(".service-card");
      if (serviceCards) {
        gsap.fromTo(
          serviceCards,
          { y: 70, opacity: 0, rotateY: -10 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ========= PROCESS STEPS =========
      gsap.fromTo(
        ".process-step",
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: "#process",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ========= PROJECT CARDS =========
      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ========= FLOATING ELEMENTS =========
      gsap.to(".float", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ========= SMOOTH SCROLL NAV =========
      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        .forEach((anchor) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const href = anchor.getAttribute("href");
            if (href) {
              const target = document.querySelector(href);
              if (target) {
                gsap.to(window, {
                  duration: 1.3,
                  scrollTo: { y: target, offsetY: 80 },
                  ease: "expo.inOut",
                });
              }
            }
          });
        });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero relative min-h-screen z-10 py-20 px-6 md:px-12 flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-10 opacity-0">
            Code <span className="text-cyan-400">Smart</span>, Solve{" "}
            <span className="text-purple-400">Big</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto opacity-0">
            We build scalable, modern, and creative digital solutions for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="hero-button px-8 py-3 bg-white/10 backdrop-blur-md rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all opacity-100"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-400/25 rounded-full float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            About Codolve
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 mb-16 fade-in">
            <p className="text-xl text-center text-gray-300">
              Codolve is a web development studio that builds scalable, modern,
              and creative digital solutions. We specialize in websites, SaaS
              platforms, and problem-solving with smart coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Innovation", "Scalability", "Problem Solving"].map(
              (value, index) => (
                <div
                  key={index}
                  className="service-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                    <Zap size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value}</h3>
                  <p className="text-gray-300">
                    Cutting-edge solutions that drive your business forward
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        ref={projectsRef}
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 - MoneyNest */}
            <div className="project-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden">
              <div className="flex flex-col gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-cyan-200 rounded-xl flex items-center justify-center">
                    <Image
                      src={"/images/saas-logo/moneynest.png"}
                      alt="Money Nest Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">MoneyNest</h3>
                </div>
                <p className="text-gray-300">
                  A personal money management SaaS built for tracking income,
                  expenses, and financial goals with intuitive visualizations
                  and smart budgeting tools.
                </p>
                <a
                  href="https://moneynestapp.vercel.app/"
                  target="_blank"
                  className="flex items-center text-cyan-400 font-medium group"
                >
                  View Project{" "}
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <div className="rounded-xl overflow-hidden mt-4">
                  <Image
                    src={"/images/home/1.png"}
                    alt="MoneyNest Preview"
                    width={1920}
                    height={1080}
                    className="object-cover rounded-xl transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Project 2 - BlogGPT */}
            <div className="project-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden">
              <div className="flex flex-col gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-300 rounded-xl flex items-center justify-center">
                    <Image
                      src={"/images/saas-logo/bloggpt.png"}
                      alt="BlogGPT Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">BlogGPT</h3>
                </div>
                <p className="text-gray-300">
                  An AI-powered blogging platform that helps writers generate,
                  optimize, and publish engaging articles with smart SEO
                  insights.
                </p>
                <a
                  href="https://thebloggpt.com"
                  target="_blank"
                  className="flex items-center text-cyan-400 font-medium group"
                >
                  View Project{" "}
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <div className="rounded-xl overflow-hidden mt-4">
                  <Image
                    src={"/images/home/2.png"}
                    alt="BlogGPT Preview"
                    width={1920}
                    height={1080}
                    className="object-cover rounded-xl transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section
        id="clientprojects"
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Client Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="rounded-lg h-40 mb-4 overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Tech: {project.tech}
                </p>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-cyan-400 font-medium hover:underline"
                  >
                    View Live
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        ref={processRef}
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Our Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Animated timeline line */}
            {/* <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 -translate-x-1/2">
              <div className="h-0 w-full bg-cyan-400 timeline-progress"></div>
            </div> */}

            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6 md:mb-0 md:w-36 flex-1 mx-2`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-cyan-400">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="relative z-10 py-16 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">
            Get In Touch
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-3 font-medium hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>

            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-cyan-500/20 transition-all transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-blue-500/20 transition-all transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-sky-500/20 transition-all transform hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
