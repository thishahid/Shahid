"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

// 1. Import the new Hyperspeed component and its presets
import Hyperspeed from "@/components/ui/Hyperspeed";
import { hyperspeedPresets } from "@/components/ui/hyperspeed-presets";


const skills = [
  { name: "Figma", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Pandas", icon: "📊" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📝" },
  { name: "Tailwind CSS", icon: "🎯" },
  { name: "Tableau", icon: "📈" },
  { name: "NumPy", icon: "🔢" },
];

export default function Home() {
  useEffect(() => {
    // Animate skill cards when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.skill-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white"> {/* Set text to white for better contrast */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* 2. Replace the old background div with the Hyperspeed component */}
        <div className="absolute inset-0 animate-fadeInUp">
          <Hyperspeed effectOptions={hyperspeedPresets.two} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 animate-fadeInUp animate-stagger-1">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  UI/UX Designer & Data Analyst
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-400 bg-clip-text text-transparent animate-fadeInUp animate-stagger-2">
                Hi, I'm Shahid
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground animate-fadeInUp animate-stagger-3">
                Design. Analyze. Create.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fadeInUp animate-stagger-4">
                A self-taught UI/UX designer and data analyst passionate about creating beautiful, 
                user-centered designs and extracting meaningful insights from data. 
                Currently exploring the intersection of design and analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animate-stagger-5">
                <Button asChild size="lg" className="w-full sm:w-auto hover-lift">
                  <Link href="/projects">
                    View My Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover-lift">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fadeInUp animate-stagger-6">
                <Button variant="ghost" size="icon" asChild className="hover-scale">
                  <a href="https://github.com/thishahid" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover-scale">
                  <a href="https://www.linkedin.com/in/shahid-khan-2400b9292" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover-scale">
                  <a href="mailto:shiekhshahidkhan+website@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex justify-center animate-fadeInRight">
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Shahid - UI/UX Designer & Data Analyst" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-400 rounded-full opacity-60 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-60 animate-rotate-slow"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with a variety of tools to bring ideas to life and uncover insights from data
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card flex flex-col items-center justify-center p-6 rounded-lg bg-background hover-lift cursor-pointer"
              >
                <div className="text-4xl mb-2 hover-rotate">{skill.icon}</div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">
                  Start a Conversation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="/resume">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}