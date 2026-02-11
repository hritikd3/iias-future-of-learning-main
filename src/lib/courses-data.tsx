import { Brain, Layers, Shield, Zap, Cpu, Globe, Database, Code2, Briefcase, Terminal, Laptop, Rocket } from "lucide-react"

export const courses = [
  {
    slug: "ai-gen-ai-agentic-ai",
    title: "AI • Gen AI • Agentic AI",
    shortTitle: "AI & Gen AI",
    description: "Master the cutting edge of artificial intelligence. From Large Language Models to autonomous agents.",
    longDescription: "Dive deep into the world of Artificial Intelligence, from foundational machine learning concepts to the latest in Generative AI and Agentic systems. Learn to build intelligent applications that can reason, create, and act autonomously.",
    icon: "Brain",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    tags: ["LLMs", "Neural Networks", "Agents", "Transformers"],
    duration: "6 Months",
    mode: "Hybrid",
    level: "Intermediate to Advanced",
    price: "₹75,000",
    highlights: [
      "Hands-on projects with GPT-4, Claude, and open-source LLMs",
      "Build production-ready AI agents using LangChain & LangGraph",
      "Fine-tuning and RAG implementation",
      "Prompt engineering mastery",
      "Deploy AI solutions on cloud platforms",
      "Industry capstone project"
    ],
    curriculum: [
      { module: "Foundation of AI & ML", topics: ["Python for AI", "Linear Algebra", "Statistics", "ML Fundamentals"] },
      { module: "Deep Learning", topics: ["Neural Networks", "CNNs", "RNNs", "Transformers Architecture"] },
      { module: "Generative AI", topics: ["LLMs", "GPT Architecture", "Prompt Engineering", "Fine-tuning"] },
      { module: "Agentic AI", topics: ["LangChain", "LangGraph", "Multi-agent Systems", "Tool Use"] },
      { module: "Production & Deployment", topics: ["MLOps", "Vector Databases", "RAG Systems", "Cloud Deployment"] },
    ],
    instructor: {
      name: "Priya Sharma", role: "Head of AI Programs",
      image: "https://i.pravatar.cc/300?u=priya2"
    },
    tools: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "HuggingFace", "Pinecone", "Docker"],
    projects: [
      { title: "Custom LLM Chatbot", description: "Build a domain-specific chatbot using RAG and fine-tuned models." },
      { title: "Autonomous Research Agent", description: "Create an agent that can browse the web and summarize research papers." },
      { title: "Generative Art Platform", description: "Develop a web app that generates images from text prompts using Stable Diffusion." }
    ],
    outcomes: [
      "Mastery of Generative AI architectures",
      "Ability to build and deploy AI agents",
      "Proficiency in Prompt Engineering",
      "Portfolio of production-ready AI apps"
    ],
    faqs: [
      { question: "Do I need prior Python knowledge?", answer: "Yes, basic Python programming knowledge is recommended for this course." },
      { question: "Is this course suitable for beginners in AI?", answer: "Absolutely! We start from the fundamentals and move to advanced topics." },
      { question: "Will I get hands-on experience?", answer: "Yes, the course is 70% practical with 10+ industry projects." }
    ]
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    description: "Build scalable modern web applications using the latest technologies and industry best practices.",
    longDescription: "Become a complete web developer with expertise in both frontend and backend technologies. Master React, Node.js, databases, and deployment strategies used by top tech companies.",
    icon: "Layers",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    tags: ["React", "Node.js", "Next.js", "MongoDB"],
    duration: "6 Months",
    mode: "Hybrid",
    level: "Beginner to Intermediate",
    price: "₹60,000",
    highlights: [
      "Build 10+ real-world projects",
      "Master React, Next.js, and modern frontend",
      "Backend development with Node.js & Express",
      "Database design with SQL and NoSQL",
      "Authentication, APIs, and deployment",
      "Portfolio-ready capstone project"
    ],
    curriculum: [
      { module: "Frontend Fundamentals", topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"] },
      { module: "React Ecosystem", topics: ["React Hooks", "State Management", "Next.js", "TypeScript"] },
      { module: "Backend Development", topics: ["Node.js", "Express", "REST APIs", "GraphQL"] },
      { module: "Databases", topics: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis"] },
      { module: "DevOps & Deployment", topics: ["Git", "Docker", "CI/CD", "AWS/Vercel"] },
    ],
    instructor: {
      name: "Vikram Singh",
      role: "Lead Instructor - Full Stack"
      //  image: "https://i.pravatar.cc/300?u=vikram"
    },
    tools: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS", "Git"],
    projects: [
      { title: "E-commerce Platform", description: "Full-featured shopping site with cart, payments, and admin dashboard." },
      { title: "Social Media App", description: "Real-time feed, notifications, and chat functionality using WebSockets." },
      { title: "Task Management SaaS", description: "Project management tool with drag-and-drop kanban boards." }
    ],
    outcomes: [
      "Build scalable full-stack applications",
      "Master modern React ecosystem",
      "Design robust backend APIs",
      "Deploy to cloud platforms"
    ],
    faqs: [
      { question: "Which stack will be covered?", answer: "We primarily focus on the MERN stack (MongoDB, Express, React, Node.js) with Next.js." },
      { question: "Do you provide placement support?", answer: "Yes, we have a dedicated placement cell to help you land your dream job." },
      { question: "Can I do this course part-time?", answer: "detailed schedule options are available, including weekend batches." }
    ]
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    shortTitle: "Cyber Security",
    description: "Protect digital assets and master the art of ethical hacking and secure systems design.",
    longDescription: "Learn to defend against cyber threats and become an ethical hacker. Master penetration testing, network security, and security operations used by security professionals worldwide.",
    icon: "Shield",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    tags: ["Ethical Hacking", "Networks", "Pentesting", "SIEM"],
    duration: "5 Months",
    mode: "Hybrid",
    level: "Intermediate",
    price: "₹65,000",
    highlights: [
      "Hands-on ethical hacking labs",
      "Network security and penetration testing",
      "Security Operations Center (SOC) training",
      "Incident response and forensics",
      "Prepare for CEH, CompTIA Security+",
      "Bug bounty program participation"
    ],
    curriculum: [
      { module: "Security Fundamentals", topics: ["CIA Triad", "Cryptography", "Network Basics", "Security Protocols"] },
      { module: "Ethical Hacking", topics: ["Reconnaissance", "Scanning", "Exploitation", "Post-exploitation"] },
      { module: "Web Security", topics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"] },
      { module: "Network Security", topics: ["Firewalls", "IDS/IPS", "VPNs", "Wireless Security"] },
      { module: "SOC & Incident Response", topics: ["SIEM Tools", "Threat Hunting", "Forensics", "Compliance"] },
    ],
    instructor: { name: "Arjun Mehta", role: "Cyber Security Expert", image: "https://i.pravatar.cc/300?u=arjun" },
    tools: ["Wireshark", "Metasploit", "Nmap", "Burp Suite", "Linux", "Python", "Splunk", "Kali"],
    projects: [
      { title: "Network Penetration Test", description: "Simulate a real-world attack on a corporate network and generate a report." },
      { title: "Web App Vulnerability Scanner", description: "Build a custom scanner to detect SQLi and XSS vulnerabilities." },
      { title: "Secure Chat Application", description: "Develop an E2E encrypted messaging app." }
    ],
    outcomes: [
      "Conduct professional penetration tests",
      "Secure network infrastructures",
      "Analyze and respond to cyber incidents",
      "Understand ethical hacking methodologies"
    ],
    faqs: [
      { question: "Do I need to know coding?", answer: "Basic scripting knowledge (Python/Bash) is helpful but not mandatory." },
      { question: "Is certification included?", answer: "Yes, you will receive an industry-recognized certificate upon completion." }
    ]
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    shortTitle: "Data Science",
    description: "Turn raw data into actionable insights using advanced statistical methods and machine learning.",
    longDescription: "Master the complete data science pipeline from data collection to insights visualization. Learn Python, statistics, machine learning, and business analytics used by data professionals.",
    icon: "Zap",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    tags: ["Python", "Pandas", "ML", "Visualization"],
    duration: "5 Months",
    mode: "Hybrid",
    level: "Beginner to Intermediate",
    price: "₹55,000",
    highlights: [
      "Python programming for data analysis",
      "Statistical analysis and hypothesis testing",
      "Machine learning with scikit-learn",
      "Data visualization with Matplotlib & Tableau",
      "Real-world case studies",
      "Analytics portfolio development"
    ],
    curriculum: [
      { module: "Python for Data Science", topics: ["NumPy", "Pandas", "Data Wrangling", "EDA"] },
      { module: "Statistics & Probability", topics: ["Descriptive Stats", "Inferential Stats", "Hypothesis Testing"] },
      { module: "Machine Learning", topics: ["Regression", "Classification", "Clustering", "Feature Engineering"] },
      { module: "Data Visualization", topics: ["Matplotlib", "Seaborn", "Plotly", "Tableau"] },
      { module: "Business Analytics", topics: ["KPIs", "Dashboards", "Reporting", "Decision Making"] },
    ],
    instructor: { name: "Neha Gupta", role: "Data Science Lead", image: "https://i.pravatar.cc/300?u=neha" },
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Tableau", "SQL", "Jupyter"],
    projects: [
      { title: "Customer Churn Prediction", description: "Predict which customers are likely to leave using classification models." },
      { title: "Stock Price Forecasting", description: "Time-series analysis to predict future stock trends." },
      { title: "Recommendation Engine", description: "Build a movie recommendation system using collaborative filtering." }
    ],
    outcomes: [
      "Analyze complex datasets",
      "Build predictive machine learning models",
      "Create compelling data visualizations",
      "Derive actionable business insights"
    ],
    faqs: [
      { question: "What acts as a prerequisite?", answer: "Basic mathematics and logical thinking are sufficient to start." },
      { question: "What tools do we learn?", answer: "We cover Python, SQL, PowerBI, and various ML libraries." }
    ]
  },
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    shortTitle: "Cloud",
    description: "Architect and manage robust cloud infrastructures on AWS, Azure, and Google Cloud.",
    longDescription: "Become a cloud architect with expertise in designing, deploying, and managing cloud infrastructure. Master AWS, containerization, and infrastructure as code.",
    icon: "Cpu",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    duration: "4 Months",
    mode: "Online",
    level: "Intermediate",
    price: "₹50,000",
    highlights: [
      "AWS Solutions Architect preparation",
      "Docker and Kubernetes mastery",
      "Infrastructure as Code with Terraform",
      "CI/CD pipeline implementation",
      "Cloud security best practices",
      "Cost optimization strategies"
    ],
    curriculum: [
      { module: "Cloud Fundamentals", topics: ["Cloud Computing Models", "AWS Core Services", "Networking"] },
      { module: "Containerization", topics: ["Docker", "Container Orchestration", "Kubernetes"] },
      { module: "Infrastructure as Code", topics: ["Terraform", "CloudFormation", "Ansible"] },
      { module: "DevOps Practices", topics: ["CI/CD", "GitOps", "Monitoring", "Logging"] },
      { module: "Cloud Architecture", topics: ["High Availability", "Scalability", "Security", "Cost Management"] },
    ],
    instructor: { name: "Rohit Jain", role: "Cloud Architect", image: "https://i.pravatar.cc/300?u=rohit" },
    tools: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Linux"],
    projects: [
      { title: "Serverless Microservices", description: "Deploy a scalable microservices architecture on AWS Lambda." },
      { title: "Kubernetes Cluster Setup", description: "Set up and manage a production-ready K8s cluster." },
      { title: "CI/CD Pipeline", description: "Automate deployment workflows using Jenkins and GitHub Actions." }
    ],
    outcomes: [
      "Design scalable cloud architectures",
      "Manage containerized applications",
      "Implement Infrastructure as Code",
      "Automate deployment pipelines"
    ],
    faqs: [
      { question: "Do I need to know Linux?", answer: "Yes, Linux proficiency is crucial for cloud engineering, and we cover it in the course." },
      { question: "is AWS or Azure covered?", answer: "We focus on AWS but also cover multi-cloud concepts applicable to Azure/GCP." }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "Modern UI/UX Design",
    shortTitle: "UI/UX",
    description: "Design stunning digital experiences that combine aesthetics with seamless functionality.",
    longDescription: "Learn to create beautiful, user-centered designs. Master Figma, design systems, prototyping, and user research to build products people love.",
    icon: "Globe",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    tags: ["Figma", "Design Systems", "Prototyping", "Research"],
    duration: "4 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹45,000",
    highlights: [
      "Figma mastery from basics to advanced",
      "User research and persona development",
      "Information architecture",
      "Interactive prototyping",
      "Design system creation",
      "Portfolio with 5+ case studies"
    ],
    curriculum: [
      { module: "Design Fundamentals", topics: ["Design Principles", "Typography", "Color Theory", "Layout"] },
      { module: "UX Research", topics: ["User Interviews", "Personas", "Journey Mapping", "Usability Testing"] },
      { module: "UI Design", topics: ["Figma Tools", "Components", "Auto Layout", "Responsive Design"] },
      { module: "Prototyping", topics: ["Interactive Prototypes", "Animations", "Micro-interactions"] },
      { module: "Design Systems", topics: ["Component Libraries", "Style Guides", "Documentation", "Handoff"] },
    ],
    instructor: { name: "Sakshi Reddy", role: "Senior UX Designer", image: "https://i.pravatar.cc/300?u=sakshi" },
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Zeplin", "Principle", "Photoshop"],
    projects: [
      { title: "Fintech App Redesign", description: "Complete visual overhaul of a banking application focused on UX." },
      { title: "E-commerce Design System", description: "Create a scalable design system for a retail platform." },
      { title: "Travel Booking Flow", description: "Optimize the user journey for flight and hotel bookings." }
    ],
    outcomes: [
      "Create user-centered designs",
      "Build interactive prototypes",
      "Conduct user research and testing",
      "Maintain consistent design systems"
    ],
    faqs: [
      { question: "Do I need to be good at drawing?", answer: "No, UI/UX is about problem-solving and logic, not just artistic ability." },
      { question: "What software will I need?", answer: "We mainly use Figma, which is free to start." }
    ]
  },
]

export const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
}
