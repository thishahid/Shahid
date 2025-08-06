"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How I Learned UI/UX & Analytics on My Own",
    excerpt: "My journey from complete beginner to professional designer and analyst, sharing the resources, strategies, and mindset that helped me succeed.",
    content: "Full article content would go here...",
    category: "Personal",
    tags: ["self-taught", "learning", "career"],
    author: "Shahid",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "🎓",
    slug: "how-i-learned-ui-ux-analytics"
  },
  {
    id: 2,
    title: "Top 5 Tools Every Beginner Designer Should Try",
    excerpt: "A comprehensive guide to the essential design tools that every aspiring UI/UX designer should have in their toolkit.",
    content: "Full article content would go here...",
    category: "UI/UX",
    tags: ["tools", "design", "beginners"],
    author: "Shahid",
    date: "February 28, 2024",
    readTime: "6 min read",
    image: "🛠️",
    slug: "top-5-design-tools"
  },
  {
    id: 3,
    title: "Python Dashboard Project Walkthrough",
    excerpt: "Step-by-step tutorial on building an interactive data dashboard using Python, Pandas, and Streamlit from scratch.",
    content: "Full article content would go here...",
    category: "Data",
    tags: ["python", "dashboard", "tutorial"],
    author: "Shahid",
    date: "February 10, 2024",
    readTime: "12 min read",
    image: "🐍",
    slug: "python-dashboard-walkthrough"
  },
  {
    id: 4,
    title: "The Art of User Research: Methods That Work",
    excerpt: "Exploring effective user research methodologies and how to implement them in your design process for better results.",
    content: "Full article content would go here...",
    category: "UI/UX",
    tags: ["research", "ux", "methods"],
    author: "Shahid",
    date: "January 25, 2024",
    readTime: "10 min read",
    image: "🔍",
    slug: "art-of-user-research"
  },
  {
    id: 5,
    title: "Data Visualization Best Practices",
    excerpt: "Learn how to create compelling data visualizations that tell stories and drive insights, with examples and practical tips.",
    content: "Full article content would go here...",
    category: "Data",
    tags: ["visualization", "data", "best-practices"],
    author: "Shahid",
    date: "January 12, 2024",
    readTime: "9 min read",
    image: "📊",
    slug: "data-visualization-best-practices"
  },
  {
    id: 6,
    title: "Building Your Design Portfolio: A Complete Guide",
    excerpt: "Everything you need to know about creating a standout design portfolio that showcases your skills and lands you jobs.",
    content: "Full article content would go here...",
    category: "Personal",
    tags: ["portfolio", "career", "design"],
    author: "Shahid",
    date: "December 20, 2023",
    readTime: "11 min read",
    image: "💼",
    slug: "building-design-portfolio"
  }
];

const categories = [
  { id: "all", name: "All Articles", count: blogPosts.length },
  { id: "ui-ux", name: "UI/UX", count: blogPosts.filter(p => p.category === "UI/UX").length },
  { id: "data", name: "Data", count: blogPosts.filter(p => p.category === "Data").length },
  { id: "personal", name: "Personal", count: blogPosts.filter(p => p.category === "Personal").length }
];

const popularTags = ["self-taught", "design", "python", "tutorial", "portfolio", "research"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                           (selectedCategory === "ui-ux" && post.category === "UI/UX") ||
                           (selectedCategory === "data" && post.category === "Data") ||
                           (selectedCategory === "personal" && post.category === "Personal");
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and stories about UI/UX design, data analysis, 
              and the journey of being a self-taught professional.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
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
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-3">Popular tags:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularTags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSearchTerm(tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to my newsletter for the latest articles, tutorials, and insights on design and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}