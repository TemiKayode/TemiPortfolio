import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">This page doesn't exist.</p>
        <a href="/" className="text-primary hover:underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
