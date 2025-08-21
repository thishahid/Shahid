"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Eye, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard Redesign",
    category: "ui-ux",
    description: "Redesigned an e-commerce analytics dashboard to improve user experience and data visualization.",
    problem: "The existing dashboard was cluttered and difficult to navigate, leading to poor user engagement.",
    solution: "Conducted user research, created wireframes, and developed a clean, intuitive interface with better data hierarchy.",
    result: "40% increase in user engagement and 60% reduction in time to find key metrics.",
    image: "📊",
    tools: ["Figma", "Adobe XD", "Principle"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
      prototype: "https://figma.com"
    },
    date: "March 2024"
  },
  {
    id: 2,
    title: "Sales Data Analysis Dashboard",
    category: "data",
    description: "Built a comprehensive sales analytics dashboard using Python and modern visualization libraries.",
    problem: "Sales team lacked real-time insights into performance metrics and trends.",
    solution: "Created an interactive dashboard with automated data processing and visualization.",
    result: "Enabled data-driven decision making, resulting in 25% increase in sales efficiency.",
    image: "📈",
    tools: ["Python", "Pandas", "Streamlit", "Plotly"],
    links: {
      github: "https://github.com",
      live: "https://streamlit.app"
    },
    date: "February 2024"
  },
  {
    id: 3,
    title: "Mobile Banking App UI",
    category: "ui-ux",
    description: "Designed a modern mobile banking interface focusing on accessibility and user trust.",
    problem: "Users found existing banking apps complex and intimidating.",
    solution: "Created a clean, accessible design with simplified navigation and clear visual hierarchy.",
    result: "User testing showed 85% improvement in task completion rates.",
    image: "📱",
    tools: ["Figma", "Framer", "UserTesting"],
    links: {
      github: "https://github.com",
      prototype: "https://www.figma.com/design/aS28RwNZOOlOoozBB7lSwX/Banking-App?node-id=0-1&t=SCPnfHVwzcuZvxNE-1"
    },
    date: "January 2024"
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    category: "data",
    description: "Performed customer segmentation analysis using machine learning to identify key customer groups.",
    problem: "Marketing team needed better understanding of customer behavior and preferences.",
    solution: "Applied clustering algorithms and created visualizations to identify distinct customer segments.",
    result: "Marketing campaigns became 30% more targeted and effective.",
    image: "🎯",
    tools: ["React", "TypeScript", "Vite", "Rechart"],
    links: {
      github: "https://github.com/thishahid/CustomerSegmentationAnalysis.git",
      live: "https://customer-segmentation-analysis.vercel.app"
    },
    date: "August 2025"
  },
  {
    id: 5,
    title: "Task Management App",
    category: "ui-ux",
    description: "Designed a collaborative task management application for remote teams.",
    problem: "Teams struggled with coordinating tasks and maintaining productivity while working remotely.",
    solution: "Created an intuitive interface with real-time collaboration features and customizable workflows.",
    result: "Teams reported 45% improvement in project coordination and task completion.",
    image: "✅",
    tools: ["Figma", "Sketch", "InVision"],
    links: {
      github: "https://github.com/thishahid/KanbanTaskManager",
      live: "https://kanban-task-manager-sepia.vercel.app",
      prototype: "https://figma.com"
    },
    date: "November 2023"
  },
  {
    id: 6,
    title: "Social Media Sentiment Analysis",
    category: "data",
    description: "Built a sentiment analysis tool to track brand mentions across social media platforms.",
    problem: "Company needed real-time insights into public sentiment about their brand.",
    solution: "Developed a pipeline for data collection, processing, and sentiment analysis with visualization.",
    result: "Enabled proactive reputation management and improved customer response time by 50%.",
    image: "💬",
    tools: ["Python", "NLTK", "Pandas", "Dash"],
    links: {
      github: "https://github.com",
      live: "https://dash.app"
    },
    date: "October 2023"
  }
];

const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "ui-ux", name: "UI/UX Design", count: projects.filter(p => p.category === "ui-ux").length },
  { id: "data", name: "Data Analysis", count: projects.filter(p => p.category === "data").length }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my UI/UX design and data analysis projects, 
              each solving real-world problems with creative solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={project.category === "ui-ux" ? "default" : "secondary"}>
                      {project.category === "ui-ux" ? "UI/UX" : "Data"}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  
                  <Tabs defaultValue="problem" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="problem">Problem</TabsTrigger>
                      <TabsTrigger value="solution">Solution</TabsTrigger>
                      <TabsTrigger value="result">Result</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="problem" className="mt-4">
                      <p className="text-muted-foreground">{project.problem}</p>
                    </TabsContent>
                    
                    <TabsContent value="solution" className="mt-4">
                      <p className="text-muted-foreground">{project.solution}</p>
                    </TabsContent>
                    
                    <TabsContent value="result" className="mt-4">
                      <p className="text-muted-foreground">{project.result}</p>
                    </TabsContent>
                  </Tabs>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.links.prototype && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.prototype} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Prototype
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Let's Talk</a>
          </Button>
        </div>
      </section>
    </div>
  );
}