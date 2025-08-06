"use client";

import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Coffee, BookOpen, Palette, BarChart } from "lucide-react";
import { useEffect } from "react";

const timeline = [
  {
    year: "2024",
    title: "UI/UX Designer & Data Analyst",
    company: "Freelance",
    description: "Started freelance career focusing on user-centered design and data visualization projects.",
    type: "work"
  },
  {
    year: "2023",
    title: "Self-taught Journey",
    company: "Personal Development",
    description: "Began intensive self-learning in UI/UX design and data analysis through online courses and personal projects.",
    type: "education"
  },
  {
    year: "2022",
    title: "Design Intern",
    company: "Tech Startup",
    description: "Gained hands-on experience in user research, prototyping, and design systems.",
    type: "work"
  },
  {
    year: "2021",
    title: "Computer Science Fundamentals",
    company: "Online Learning",
    description: "Started learning programming and computer science fundamentals.",
    type: "education"
  }
];

const skills = [
  { name: "UI/UX Design", icon: Palette, level: 90 },
  { name: "Data Analysis", icon: BarChart, level: 85 },
  { name: "User Research", icon: BookOpen, level: 80 },
  { name: "Prototyping", icon: Palette, level: 88 },
];

const hobbies = [
  { name: "Photography", icon: "📷" },
  { name: "Reading", icon: "📚" },
  { name: "Hiking", icon: "🥾" },
  { name: "Cooking", icon: "👨‍🍳" },
];

export default function About() {
  useEffect(() => {
    // Animate elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section > div > .card, section > div > .text-center, .timeline-item').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intern to self-taught professional, my journey is a testament to passion, 
              perseverance, and the power of continuous learning.
            </p>
          </div>
        </div>
      </section>
      
      {/* Personal Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm Shahid, a passionate self-taught UI/UX designer and data analyst based in San Francisco. 
                My journey began with curiosity about how things work and a desire to create meaningful 
                digital experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a simple internship evolved into a deep passion for understanding user needs 
                and translating complex data into actionable insights. I believe that great design and data 
                analysis go hand in hand - both require empathy, attention to detail, and creative problem-solving.
              </p>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  <span>Coffee enthusiast</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="p-6 hover-lift">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional growth and key milestones
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative timeline-item">
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-24 bg-border"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <Card className="flex-1 mb-8 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <Badge variant={item.type === "work" ? "default" : "secondary"}>
                          {item.type === "work" ? "Work" : "Education"}
                        </Badge>
                        <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-3">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-6">My Mission</h2>
            <blockquote className="text-2xl text-muted-foreground mb-8 italic">
              "To bridge the gap between design and data, creating experiences that are not only 
              beautiful but also meaningful and data-driven."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">User-Centered</h3>
                  <p className="text-muted-foreground">
                    Always putting the user first in every design decision
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="font-semibold mb-2">Data-Driven</h3>
                  <p className="text-muted-foreground">
                    Making informed decisions based on insights and analytics
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-muted-foreground">
                    Constantly exploring new technologies and methodologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fun Facts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Beyond Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When I'm not designing or analyzing data, you can find me...
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {hobbies.map((hobby, index) => (
              <Card key={hobby.name} className="p-6 text-center hover-lift">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{hobby.icon}</div>
                  <p className="font-medium">{hobby.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}