"use client";

import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  BarChart
} from "lucide-react";

const skills = {
  design: [
    { name: "Figma", level: 95, icon: "🎨" },
    { name: "Adobe XD", level: 85, icon: "🎯" },
    { name: "Sketch", level: 80, icon: "✏️" },
    { name: "Principle", level: 75, icon: "🎬" },
    { name: "InVision", level: 70, icon: "👁️" }
  ],
  development: [
    { name: "HTML/CSS", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "TypeScript", level: 75, icon: "📝" },
    { name: "Tailwind CSS", level: 85, icon: "🎨" }
  ],
  data: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Pandas", level: 85, icon: "🐼" },
    { name: "NumPy", level: 80, icon: "🔢" },
    { name: "Tableau", level: 85, icon: "📊" },
    { name: "SQL", level: 75, icon: "🗄️" }
  ]
};

const experience = [
  {
    title: "UI/UX Designer & Data Analyst",
    company: "Freelance",
    period: "2023 - Present",
    description: "Providing comprehensive design and data analysis services to clients across various industries.",
    achievements: [
      "Designed user interfaces for 15+ mobile and web applications",
      "Conducted user research and usability testing for 10+ projects",
      "Built interactive dashboards for data visualization and analysis",
      "Improved user engagement by an average of 40% across projects"
    ]
  },
  {
    title: "Design Intern",
    company: "Tech Startup",
    period: "2022 - 2023",
    description: "Gained hands-on experience in user-centered design and product development.",
    achievements: [
      "Assisted in redesigning the company's main product interface",
      "Conducted user interviews and created user personas",
      "Collaborated with development team to implement design solutions",
      "Created design systems and style guides"
    ]
  }
];

const education = [
  {
    degree: "Self-taught UI/UX Design",
    institution: "Online Learning Platforms",
    period: "2023 - 2024",
    description: "Completed comprehensive courses in UI/UX design, user research, and design thinking."
  },
  {
    degree: "Data Science Fundamentals",
    institution: "Online Learning Platforms",
    period: "2024 - 2025",
    description: "Studied data analysis, visualization, and machine learning fundamentals."
  }
];

const certifications = [
  {
    name: "Google UX Design Certificate",
    issuer: "Google",
    date: "2025",
    image: "🏆",
    link: "https://coursera.org"
  },
  {
    name: "Data Analyst Professional Certificate",
    issuer: "IBM",
    date: "2025",
    image: "📊",
    link: "https://coursera.org"
  },
  {
    name: "Figma Certified Professional",
    issuer: "Figma",
    date: "2025",
    image: "🎨",
    link: "https://figma.com"
  },
  {
    name: "Python for Data Science",
    issuer: "DataCamp",
    date: "2025",
    image: "🐍",
    link: "https://datacamp.com"
  }
];

const handleDownload = () => {
  // Trigger download
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Shahid_Resume.pdf";
  link.click();
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my skills, experience, and qualifications 
              as a UI/UX designer and data analyst.
            </p>
            
            <div className="mt-8">
              <Button size="lg" className="gap-2" onClick={handleDownload}>                
                <Download className="h-5 w-5" />                
                Download PDF Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">shiekhshahidkhan@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 6267300764</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Indore, MP</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">Fresher</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Design Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Design Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.design.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Development Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.development.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Data Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Data Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.data.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My educational background and continuous learning journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my skills and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cert.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">Issued: {cert.date}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}