export const portfolioData = {
  // Personal Info
  name: "Aurosmita Sahoo",
  title: "Full Stack & AI Developer",
  college: "Centurion University of Technology and Management",
  location: "Bhubaneswar, Odisha, India",
  graduation: "2023 - 2027",
  cgpa: "9.0/10",
  
  // Professional
  specialization: "Full Stack Development (Spring Boot, MERN) & AI Development",
  keySkills: ["Spring Boot", "React", "Node.js", "TypeScript", "MySQL", "MongoDB", "Docker", "AI/ML"],
  
  // Social Links
  github: "https://github.com/Auro993",
  linkedin: "https://www.linkedin.com/in/aurosmitasahoo/",
  leetcode: "https://leetcode.com/aurosmitasahoo/",
  email: "aurosmitasahoo4@gmail.com",
  twitter: "",
  
  // Projects
  projects: [
    {
      id: 1,
      title: "JobGenie - AI Placement Mentor",
      description: "Full-stack AI platform with AI Mentor Chat, Resume Analyzer (ATS scoring + correction), Mock Interview, Personalized Roadmaps, Coding Practice, Resume Builder (5+ templates), GitHub Insights, LinkedIn Studio & Progress Dashboard.",
      tech: ["React", "TypeScript", "Spring Boot", "MySQL", "JWT", "Google Gemini API", "REST APIs"],
      github: "https://github.com/Auro993/jobgenie",
      demo: "https://jobgenie-app-vert.vercel.app",
      metrics: { value: "AI-Powered", label: "Placement Mentor" },
      status: "Live",
      category: "Full Stack",
      featured: true,
      image: "/assets/projects/jobgenie.jpg"
    },
    {
      id: 2,
      title: "DineFlow - Food Delivery Platform",
      description: "Full-stack food delivery platform with JWT role-based access (Customer/Restaurant), restaurant discovery, smart cart, Razorpay + COD payments, real-time order tracking (Socket.io), ratings, wishlist, live chat.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Razorpay", "JWT"],
      github: "https://github.com/Auro993/food-delivery-hospitality-platform",
      demo: "https://dineflow-app-vert.vercel.app",
      metrics: { value: "Real-Time", label: "Order Tracking" },
      status: "Live",
      category: "Full Stack",
      featured: true,
      image: "/assets/projects/dineflow.jpg"
    },
    {
      id: 3,
      title: "PrabandhX - Project Management System",
      description: "Full-stack project management platform with Role-based access (Admin/Manager/User), real-time task tracking, Gantt chart visualization, file management with drag-drop uploads & version history. Optimized APIs with ~200ms response time.",
      tech: ["Spring Boot", "React", "MySQL", "JWT", "REST APIs"],
      github: "https://github.com/Auro993/prabandhX",
      demo: "https://prabandhx-app-vert.vercel.app",
      metrics: { value: "~200ms", label: "API Response Time" },
      status: "Live",
      category: "Full Stack",
      featured: true,
      image: "/assets/projects/prabandhx.jpg"
    }
  ],
  
  // Education
  education: [
    {
      id: 1,
      title: "Bachelor Degree",
      duration: "2023 - Present",
      institution: "Centurion University Bhubaneswar, Odisha, India",
      cgpa: "CGPA: 9.0/10",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (12th)",
      duration: "2021 - 2023",
      institution: "Jhadeswar Higher Secondary School, Balesore, Odisha, India",
      cgpa: "Percentage: 83%",
    },
    {
      id: 3,
      title: "Secondary School Certificate (10th)",
      duration: "2011 - 2021",
      institution: "Dibyabhumi Kolha, Bhadrak, Odisha, India",
      cgpa: "Percentage: 90%",
    }
  ],
  
  // Certificates
  certificates: [
    {
      id: 1,
      name: "Spring Boot Microservices",
      issuer: "Udemy",
      image: "/assets/cert1.jpg"
    },
    {
      id: 2,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      image: "/assets/cert2.jpg"
    },
    {
      id: 3,
      name: "Data Structures & Algorithms",
      issuer: "NPTEL",
      image: "/assets/cert3.jpg"
    },
    {
      id: 4,
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      image: "/assets/cert4.jpg"
    }
  ],
  
  // Extra Info
  extras: {
    hackathons: "2nd Place at Smart India Hackathon 2025",
    internships: "",
    openSource: "Active Open Source Contributor"
  }
};