"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "./loading";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Simple loading state for route changes
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    };

    // Listen to browser navigation events
    window.addEventListener('popstate', handleStart);
    
    // Set up a timeout to simulate loading completion
    const timeoutId = setTimeout(() => {
      handleComplete();
    }, 300);

    return () => {
      window.removeEventListener('popstate', handleStart);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}