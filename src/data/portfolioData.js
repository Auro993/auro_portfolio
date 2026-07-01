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
      featured: true
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
      featured: true
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
      featured: true
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
  
  // Certificates - Updated with correct paths
  certificates: [
    {
      id: 1,
      name: "Infotact Internship Certificate",
      issuer: "Web Developement Internship ",
      image: "/assets/Infotact_certificate.jpeg"
    },
    {
      id: 2,
      name: "React Certificate",
      issuer: "React ",
      image: "/assets/React_Certificate.jpeg"
    },
    {
      id: 3,
      name: "Advanced SQL Certificate",
      issuer: "Advanced SQL",
      image: "/assets/AdvancedSQL.jpeg"
    },
    {
      id: 4,
      name: "Code Alpha Certificate",
      issuer: "Full Stack Development Internship",
      image: "/assets/Code Alpha.jpeg"
    },
    {
      id: 5,
      name: "Code for Success Certificate",
      issuer: "Full Stack Dvelopment Program",
      image: "/assets/Code for Success.jpeg"
    },
    {
      id: 6,
      name: "ECWoc Certificate",
      issuer: "ECWoc - Elite Coders Winter of Code",
      image: "/assets/ECWoc_Certificate.jpeg"
    }
  ],
  
  // Extra Info
  extras: {
    hackathons: "2nd Place at Smart India Hackathon 2025",
    internships: "Infotact Internship",
    openSource: "Active Open Source Contributor"
  }
};