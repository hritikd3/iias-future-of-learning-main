import { Brain, Layers, Shield, Zap, Cpu, Globe, Database, Code2, Briefcase, Terminal, Laptop, Rocket, BookOpen, BarChart, Bug, Megaphone, Clapperboard, TrendingUp, FileSpreadsheet, Activity } from "lucide-react"

export const courses = [
  // --- Core Job-Oriented Programs ---
  {
    slug: "data-science-ai",
    title: "Data Science & Artificial Intelligence",
    shortTitle: "Data Science & AI",
    description: "Master Python, SQL, ML, Deep Learning, and GenAI to become a Data Scientist.",
    longDescription: "A comprehensive program covering the entire data science lifecycle from data collection to deployment. Master Python, SQL, Machine Learning, Deep Learning, and Generative AI with hands-on projects.",
    icon: "Brain",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    tags: ["Python", "SQL", "Machine Learning", "GenAI", "AWS"],
    enrollLink: "https://forms.gle/kHCorJ79BidEsLk48",
    duration: "6 Months",
    mode: "Hybrid",
    level: "Advanced",
    price: "₹39,999",
    originalPrice: "₹49,999",
    highlights: [
      "Mastery of Python & SQL for Data Science",
      "Deep Learning & Neural Networks foundation",
      "Generative AI & LLM applications",
      "AWS Cloud for AI deployment",
      "GitHub portfolio building",
      "100% Placement Assistance"
    ],
    curriculum: [
      { module: "Core Python & SQL", topics: ["Python Syntax", "SQL Queries"] },
      { module: "Data Manupulation & Analysis", topics: ["Pandas", "NumPy"] },
      { module: "Machine Learning & Model", topics: ["NLP", "Regression", "Classification", "Scikit-Learn"] },
      { module: "Data Visualization", topics: ["Matplotlib", "Seaborn", "Tableau"] },
      { module: "Generative AI Ai Assistants", topics: ["ChatGPT", "Gemini", "AI Agents"] },
      { module: "Workflow Automation", topics: ["Jupyter Notebook", "Google Colab", "NotebookLM"] },
    ],
    instructor: { name: "Dr. Ananya Rao", role: "AI Research Lead", image: "https://i.pravatar.cc/300?u=ananya" },
    tools: ["Python", "SQL", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Tableau", "Jupyter", "Google Colab", "NotebookLM"],
    projects: [
      { title: "Predictive Analytics Model", description: "Build a model to predict housing prices or customer churn." },
      { title: "GenAI Chatbot", description: "Create a custom chatbot using RAG and open-source LLMs." },
      { title: "Computer Vision System", description: "Develop an image recognition system using CNNs." }
    ],
    outcomes: [
      "Become a Data Scientist or AI Engineer",
      "Build production-ready ML models",
      "Master Generative AI technologies",
      "Secure high-paying roles in tech"
    ],
    faqs: [
      { question: "Is this suitable for non-tech backgrounds?", answer: "Absolutely! We start from the absolute basics of programming and math. Nearly 40% of our successful alumni come from non-technical backgrounds like commerce and arts." },
      { question: "Do you cover Generative AI and LLMs?", answer: "Yes, a significant part of the curriculum is dedicated to Generative AI, Prompt Engineering, and building AI agents using RAG architecture." },
      { question: "What computer configuration do I need?", answer: "A laptop with at least 8GB RAM and an i5 processor (or equivalent) is recommended. Most of our heavy computing will be done on cloud platforms like Google Colab." },
      { question: "Can I get a job as a Fresher?", answer: "Yes, our 'Python for Data Science' module and intensive project work are designed precisely to help freshers build a portfolio that attracts recruiters." }
    ],
    brochureLink: "https://drive.google.com/file/d/1sRr_Yj72-cyo-1acMvZ9I8wjf_hVIuaU/view?usp=drive_link",
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development (MERN)",
    shortTitle: "Full-Stack Dev",
    description: "Build scalable web applications using MongoDB, Express, React, and Node.js.",
    longDescription: "Become a full-stack developer by mastering the MERN stack. Learn to build responsive frontends, robust backends, and deploy applications to the cloud using Docker and AWS.",
    icon: "Layers",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    tags: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    duration: "6 Months",
    mode: "Hybrid",
    level: "Intermediate",
    price: "₹27,999",
    originalPrice: "₹42,999",
    highlights: [
      "Complete MERN Stack mastery",
      "Real-time application development",
      "DevOps basics: Docker & AWS",
      "System Design fundamentals",
      "Agile & Git workflows",
      "Portfolio-ready projects"
    ],
    curriculum: [
      { module: "Frontend Engineering", topics: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Redux"] },
      { module: "Backend Development", topics: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
      { module: "Database Management", topics: ["MongoDB Schema Design", "Aggregation", "Indexing"] },
      { module: "DevOps & Deployment", topics: ["Docker Containerization", "AWS EC2/S3", "CI/CD Pipelines"] },
    ],
    instructor: { name: "Rahul Verma", role: "Senior Full Stack Dev", image: "https://i.pravatar.cc/300?u=rahul" },
    tools: ["React", "Node.js", "MongoDB", "Redux", "Docker", "AWS", "Git", "Postman"],
    projects: [
      { title: "E-Commerce Platform", description: "Full-featured shopping site with payments and admin panel." },
      { title: "Real-time Collaboration Tool", description: "Project management app with live updates." },
      { title: "Social Media Dashboard", description: "Analytics dashboard with interactive charts." }
    ],
    outcomes: [
      "Identify as a Full Stack Developer",
      "Build end-to-end web solutions",
      "Understand cloud deployment",
      "Crack development interviews"
    ],
    faqs: [
      { question: "Do I need to know HTML/CSS before starting?", answer: "No, we start from the very basics of web structure. However, being familiar with the internet and basic logic is helpful." },
      { question: "Will I learn both Frontend and Backend?", answer: "Yes, you will master the MERN stack (MongoDB, Express, React, Node.js), enabling you to build complete, production-ready applications independently." },
      { question: "Do you teach deployment?", answer: "Yes, we cover deploying apps to AWS and Vercel, and we even introduce Docker for containerization, which is a highly sought-after skill." },
      { question: "How many projects will I build?", answer: "You will build 4+ major projects, including a full-scale E-commerce platform and a real-time social application, which will form your professional portfolio." }
    ],
    brochureLink: ""
  },
  {
    slug: "cyber-security-ethical-hacking",
    title: "Cyber Security & Ethical Hacking",
    shortTitle: "Cyber Security",
    description: "Learn Offensive and Defensive Security, Network Safety, and SOC Operations.",
    longDescription: "Protect critical systems and networks. Master ethical hacking techniques, penetration testing, and security operations center (SOC) protocols to become a cyber defender.",
    icon: "Shield",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    tags: ["Ethical Hacking", "Linux", "Metasploit", "SOC", "Network Security"],
    duration: "6 Months",
    mode: "Hybrid",
    level: "Intermediate",
    price: "₹35,999",
    originalPrice: "₹45,000",
    highlights: [
      "Hands-on with Kali Linux & Metasploit",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "SOC Analyst training",
      "Network & Web Application Security",
      "Real-world CTF challenges",
      "Prepares for CEH/CompTIA certifications"
    ],
    curriculum: [
      { module: "Networking & Linux", topics: ["TCP/IP", "OSI Model", "Linux Commands", "Bash Scripting"] },
      { module: "Ethical Hacking Core", topics: ["Reconnaissance", "Scanning", "Enumeration", "System Hacking"] },
      { module: "Web App Security", topics: ["OWASP Top 10", "SQL Injection", "XSS", "Burp Suite"] },
      { module: "SOC Operations", topics: ["SIEM Tools", "Log Analysis", "Incident Response", "Threat Hunting"] },
    ],
    instructor: { name: "Vikram Singh", role: "Cyber Security Lead", image: "https://i.pravatar.cc/300?u=vikram" },
    tools: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "Burp Suite", "Splunk", "Snort"],
    projects: [
      { title: "Corporate Network Pentest", description: "Simulated penetration test of a secure network infrastructure." },
      { title: "Web Vulnerability Scanner", description: "Python-based tool to detect common web flaws." },
      { title: "SIEM Dashboard Setup", description: "Configure Splunk for real-time threat monitoring." }
    ],
    outcomes: [
      "Become an Ethical Hacker or SOC Analyst",
      "Readiness for industry certifications",
      "Ability to secure complex networks",
      "Practical experience with security tools"
    ],
    faqs: [
      { question: "Is coding required?", answer: "Basic scripting (Python/Bash) is taught and useful." },
      { question: "What certifications can I take?", answer: "This prepares you for CEH, Security+, and customized internal certs." },
      { question: "What certifications can I pursue after this course?", answer: "This program aligns with certifications like CompTIA Security+, CEH (Certified Ethical Hacker), and industry-specific vendor certifications." },
      { question: "Is prior coding experience necessary?", answer: "Basic scripting knowledge (Python/Bash) is beneficial, but we cover the essentials needed for security tasks." },
      { question: "What kind of jobs can I get?", answer: "You can pursue roles like Security Analyst, Penetration Tester, SOC Analyst, or Cyber Security Consultant." }
    ],
    brochureLink: ""
  },
  {
    slug: "cloud-computing-devops",
    title: "Cloud Computing & DevOps",
    shortTitle: "Cloud & DevOps",
    description: "Master AWS, Docker, Kubernetes, Jenkins, and Terraform for scalable infrastructure.",
    longDescription: "Bridge the gap between development and operations. Learn to architect cloud solutions on AWS and automate deployment pipelines using modern DevOps tools.",
    icon: "Cpu",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    duration: "6 Months",
    mode: "Hybrid",
    level: "Advanced",
    price: "₹35,999",
    originalPrice: "₹48,000",
    highlights: [
      "AWS Solutions Architect curriculum",
      "Containerization with Docker & Kubernetes",
      "Infrastructure as Code (IaC) with Terraform",
      "CI/CD automation with Jenkins",
      "Monitoring & Logging stacks",
      "Production-grade deployment strategies"
    ],
    curriculum: [
      { module: "Cloud Fundamentals (AWS)", topics: ["EC2", "S3", "VPC", "IAM", "Route53"] },
      { module: "Containerization", topics: ["Docker Files", "Images", "Compose", "Networking"] },
      { module: "Orchestration", topics: ["Kubernetes Architecture", "Pods", "Deployments", "Services"] },
      { module: "IaC & Automation", topics: ["Terraform Scripts", "Ansible Configuration", "Jenkins Pipelines"] },
    ],
    instructor: { name: "Sandeep Gupta", role: "Cloud Architect", image: "https://i.pravatar.cc/300?u=sandeep" },
    tools: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Git", "Prometheus"],
    projects: [
      { title: "Scalable Microservices App", description: "Deploy a microservices app on K8s with auto-scaling." },
      { title: "Automated CI/CD Pipeline", description: "End-to-end pipeline from Git commit to production deploy." },
      { title: "Serverless Architecture", description: "Build an event-driven app using AWS Lambda and API Gateway." }
    ],
    outcomes: [
      "Qualify for Cloud/DevOps Engineer roles",
      "Design high-availability systems",
      "Automate infrastructure management",
      "Master cloud security best practices"
    ],
    faqs: [
      { question: "Is Linux needed?", answer: "Yes, Linux proficiency is a core part of the course." },
      { question: "Do we use real AWS accounts?", answer: "Yes, you will work on live AWS environments." },
      { question: "Is prior coding experience required?", answer: "Basic scripting (Bash/Python) is helpful, but the focus is on infrastructure and automation, not application development." },
      { question: "What cloud platforms are covered?", answer: "We primarily focus on AWS, which is the industry leader, but the concepts are transferable to Azure and GCP." },
      { question: "Will I learn about serverless computing?", answer: "Yes, we cover serverless architectures using AWS Lambda and API Gateway as part of modern cloud deployment strategies." }
    ],
    brochureLink: ""
  },
  {
    slug: "data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    shortTitle: "Data Analytics",
    description: "Transform data into insights using Excel, SQL, Power BI, and Tableau.",
    longDescription: "Become a data storyteller. Learn to extract, clean, analyze, and visualize data to drive business decisions. Master the most in-demand analytics tools.",
    icon: "BarChart",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    tags: ["Power BI", "SQL", "Excel", "Tableau", "Python"],
    duration: "5 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹32,999",
    originalPrice: "₹40,000",
    highlights: [
      "Advanced Excel for Business Analytics",
      "SQL for Data Extraction & Manipulation",
      "Interactive Dashboards in Power BI & Tableau",
      "Exploratory Data Analysis with Python",
      "Real-world Case Studies",
      "Placement Support"
    ],
    curriculum: [
      { module: "Excel Mastery", topics: ["Advanced Formulas", "Pivot Tables", "VBA Basics", "Data Cleaning"] },
      { module: "SQL for Analytics", topics: ["Joins", "Subqueries", "Window Functions", "Normalization", "DML", "DCL", "DQL", "Delimiters", "Case"] },
      { module: "Business Intelligence", topics: ["Power BI DAX", "Tableau Viz", "Data Modeling", "Reporting", "Interactive Dashboards", "Insights Generation", "Story Telling"] },
      { module: "Python for Analysts", topics: ["Pandas Basics", "Data Preprocessing", "Matplotlib Viz", "NumPy", "Pandas", "Seaborn"] },
      { module: "Basic Statistics", topics: ["Probability", "Basic Statistics", "Mean", "Median", "Mode", "Standard Deviation", "Variance", "Correlation", "Regression", "Regression Analysis"] },
      { module: "Capsule Projects", topics: ["EDA", "Dashboarding", "Reporting", "SQL Project"] },
    ],
    instructor: { name: "Priya Malik", role: "Senior Data Analyst", image: "https://i.pravatar.cc/300?u=priya" },
    tools: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Jupyter"],
    projects: [
      { title: "Sales Performance Dashboard", description: "Interactive Power BI dashboard for retail sales analysis." },
      { title: "Customer Churn Analysis", description: "Identify factors influencing customer retention using SQL & Python." },
      { title: "Marketing Campaign Report", description: "Comprehensive Tableau report on ad campaign performance." }
    ],
    outcomes: [
      "Job-ready for Data Analyst roles",
      "Create professional BI dashboards",
      "Solve complex business problems with data",
      "Strong command over SQL & Excel"
    ],
    faqs: [
      { question: "Is this better than a standard Data Science course?", answer: "This course is specifically focused on business application. It's ideal for those who want to use data to drive business decisions without necessarily becoming a research scientist." },
      { question: "What tools are most important in this course?", answer: "Advanced Excel and SQL are the workhorses of business analytics. We master these first before moving to visualization tools like Tableau and Power BI." },
      { question: "Do I need SQL for Power BI?", answer: "While not strictly required for small datasets, SQL is essential for connected enterprise data. We teach you enough SQL to be a powerful BI developer." },
      { question: "What is DAX?", answer: "DAX (Data Analysis Expressions) is the formula language of Power BI. Mastering it allows you to create complex calculations and insightful reports." },
      { question: "Will I work on live data?", answer: "Yes, you will work on simulated real-world datasets from retail, finance, and healthcare to build your dashboards." }
    ],
    brochureLink: ""
  },
  // {
  //   slug: "software-testing-automation",
  //   title: "Software Testing & Automation",
  //   shortTitle: "Software Testing",
  //   description: "Master Manual and Automation Testing with Selenium, Java, and API Testing.",
  //   longDescription: "ensure software quality and reliability. Learn manual testing methodologies and master automation using Selenium WebDriver, Java, and API testing frameworks.",
  //   icon: "Bug",
  //   color: "from-pink-500/20 to-rose-500/20",
  //   borderColor: "border-pink-500/30",
  //   tags: ["Selenium", "Java", "Manual Testing", "JIRA", "API Testing"],
  //   duration: "4 Months",
  //   mode: "Hybrid",
  //   level: "Beginner",
  //   price: "₹28,000",
  //   originalPrice: "₹35,000",
  //   highlights: [
  //     "Manual Testing Concepts & Agile/Scrum",
  //     "Automation with Selenium WebDriver & Java",
  //     "API Testing with Postman & RestAssured",
  //     "Defect Tracking with JIRA",
  //     "TestNG & Cucumber Frameworks",
  //     "Live Project Testing"
  //   ],
  //   curriculum: [
  //     { module: "Manual Testing", topics: ["SDLC/STLC", "Test Cases", "Defect Lifecycle", "Agile Methodology"] },
  //     { module: "Core Java for Testers", topics: ["OOPs", "Collections", "Exception Handling", "File I/O"] },
  //     { module: "Automation Testing", topics: ["Selenium WebDriver", "Locators", "Waits", "Page Object Model"] },
  //     { module: "API & Frameworks", topics: ["RestAssured", "Postman", "TestNG", "Maven", "Jenkins Basics"] },
  //   ],
  //   instructor: { name: "Amit Sharma", role: "QA Lead", image: "https://i.pravatar.cc/300?u=amit" },
  //   tools: ["Selenium", "Java", "JIRA", "Postman", "Eclipse", "TestNG", "Git"],
  //   projects: [
  //     { title: "E-commerce Website Testing", description: "End-to-end automation of a shopping cart flow." },
  //     { title: "API Test Suite", description: "Automated verification of REST endpoints using RestAssured." },
  //     { title: "Bug Reporting Workflow", description: "Simulated defect lifecycle management in JIRA." }
  //   ],
  //   outcomes: [
  //     "Become a QA Engineer or Automation Tester",
  //     "Design robust test automation frameworks",
  //     "Expertise in API and Web Testing",
  //     "Understanding of CI/CD integration"
  //   ],
  //   faqs: [
  //     { question: "Is programming needed?", answer: "Yes, we teach Java from scratch for automation." },
  //     { question: "What about manual testing?", answer: "We cover manual testing thoroughly before moving to automation." }
  //   ],
  //   brochureLink: ""
  // },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortTitle: "UI/UX Design",
    description: "Design user-centric digital products using Figma, Wireframing, and Design Thinking.",
    longDescription: "Create intuitive and beautiful digital experiences. Master the entire design process from user research and wireframing to high-fidelity prototyping using Figma.",
    icon: "Globe",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    tags: ["Figma", "Prototyping", "User Research", "Wireframing"],
    duration: "4 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹27,999",
    originalPrice: "₹34,999",
    highlights: [
      "Mastery of Figma & Adobe XD",
      "Design Thinking & User Research",
      "Wireframing & Prototyping",
      "Mobile App & Web Design",
      "Design Systems & Handoff",
      "Behance/Dribbble Portfolio"
    ],
    curriculum: [
      { module: "Design Systems", topics: ["Typography", "Color Theory", "Grid Systems", "Components"] },
      { module: "UX Research", topics: ["User Personas", "Journey Mapping", "Competitor Analysis", "Heuristic Evaluation"] },
      { module: "UI Design", topics: ["Figma Tools", "Auto Layout", "Responsive Design", "Iconography"] },
      { module: "Prototyping", topics: ["Interactive Flows", "Micro-interactions", "Usability Testing"] },
    ],
    instructor: { name: "Sakshi Reddy", role: "Product Designer", image: "https://i.pravatar.cc/300?u=sakshi" },
    tools: ["Figma", "Miro", "InVision", "Adobe XD", "Zeplin"],
    projects: [
      { title: "FinTech App Redesign", description: "Modernize the UI/UX of a banking application." },
      { title: "E-Commerce Website", description: "Design a responsive online store with a complete user journey." },
      { title: "Travel Booking Platform", description: "Create an intuitive booking experience for travelers." }
    ],
    outcomes: [
      "Launch a career as UI/UX or Product Designer",
      "Build a professional design portfolio",
      "Master industry-standard design tools",
      "Understand user psychology"
    ],
    faqs: [
      { question: "Do I need to draw?", answer: "No, digital design is about logic and empathy, not sketching." },
      { question: "Is this coding related?", answer: "No coding required, though HTML/CSS knowledge helps." },
      { question: "What software will I learn?", answer: "The primary tool is Figma, an industry-standard for UI/UX design, along with concepts applicable to other tools like Adobe XD." },
      { question: "How important is a portfolio?", answer: "Extremely important! We guide you to build a strong portfolio with real-world projects to showcase your skills to potential employers." },
      { question: "Can I work as a freelancer after this course?", answer: "Yes, the skills learned are highly in demand for freelance UI/UX and product design projects." }
    ],
    brochureLink: ""
  },
  {
    slug: "digital-marketing",
    title: "Digital & Performance Marketing",
    shortTitle: "Digital Marketing",
    description: "Master SEO, Google Ads, Meta Ads, and AI-powered marketing strategies.",
    longDescription: "Become a complete digital marketer. Learn to drive growth through SEO, paid advertising on Google and Social Media, and leverage AI tools for content and strategy.",
    icon: "Megaphone",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics", "AI Marketing"],
    duration: "4 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹25,999",
    originalPrice: "₹32,999",
    highlights: [
      "SEO & Content Marketing",
      "Google Ads (Search, Display, Youtube)",
      "Social Media Marketing (Meta, LinkedIn)",
      "Web Analytics & Reporting",
      "AI Tools for Marketing",
      "Live Ad Campaigns"
    ],
    curriculum: [
      { module: "Organic Growth (SEO)", topics: ["Keyword Research", "On-page/Off-page SEO", "Technical SEO"] },
      { module: "Performance Marketing", topics: ["Google Ads Setup", "Meta Ad Manager", "Campaign Optimization"] },
      { module: "Content & Social", topics: ["Content Strategy", "Social Media Calendar", "Influencer Marketing"] },
      { module: "Analytics & AI", topics: ["Google Analytics 4", "AI Copywriting", "Data-driven Strategy"] },
    ],
    instructor: { name: "Rohan Das", role: "Marketing Director", image: "https://i.pravatar.cc/300?u=rohan" },
    tools: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "Canva", "ChatGPT"],
    projects: [
      { title: "Live SEO Audit", description: "Analyze and optimize a real website for search performance." },
      { title: "Paid Ad Campaign", description: "Run a live Google/Meta ad campaign with a budget." },
      { title: "Social Media Strategy", description: "Create a 30-day content calendar and growth plan." }
    ],
    outcomes: [
      "Become a Digital Marketing Specialist",
      "Run profitable ad campaigns",
      "Grow organic traffic for businesses",
      "Freelancing opportunities"
    ],
    faqs: [
      { question: "Is budget included for ads?", answer: "We provide demo budgets for practice campaigns." },
      { question: "Is this updated for 2025?", answer: "Yes, we cover the latest algorithms and AI trends." },
      { question: "What is the focus of this course?", answer: "We focus on how to use AI tools like ChatGPT, Midjourney, and specialized marketing AI to automate content creation, SEO, and ad campaigns." },
      { question: "Is this for technical people only?", answer: "Not at all. This course is designed for marketing professionals, business owners, and creators who want to leverage AI without necessarily learning how to code." },
      { question: "Will I learn about AI Ethics?", answer: "Yes, we cover the ethical use of AI in marketing, including copyright issues, transparency, and data privacy." }
    ],
    brochureLink: ""
  },
  {
    slug: "generative-ai-advanced",
    title: "Generative AI & Prompt Engineering",
    shortTitle: "Adv. GenAI",
    description: "Advanced program on LLMs, AI Agents, and Business Automation.",
    longDescription: "Position yourself at the forefront of the AI revolution. Deep dive into Large Language Models, advanced prompt engineering, building AI agents, and automating business workflows.",
    icon: "Brain",
    color: "from-violet-500/20 to-fuchsia-500/20",
    borderColor: "border-violet-500/30",
    tags: ["LLMs", "Prompt Engineering", "AI Agents", "Automation", "ChatGPT API"],
    duration: "4 Months",
    mode: "Hybrid",
    level: "Advanced",
    price: "₹34,999",
    originalPrice: "₹45,000",
    highlights: [
      "Advanced Prompt Engineering techniques",
      "Building Applications with LLM APIs",
      "AI Agents & Autonomous Systems",
      "Business Process Automation",
      "Fine-tuning & RAG architectures",
      "Capstone AI Product"
    ],
    curriculum: [
      { module: "Prompt Engineering", topics: ["Zero-shot/Few-shot", "Chain of Thought", "Prompt Optimization"] },
      { module: "LLM Development", topics: ["OpenAI API", "LangChain", "Vector Databases", "Embeddings"] },
      { module: "AI Agents", topics: ["AutoGPT concepts", "Multi-agent orchestration", "Tool use"] },
      { module: "Deployment & Ethics", topics: ["Deploying AI Apps", "AI Safety", "Ethical Guidelines"] },
    ],
    instructor: { name: "Dr. Ananya Rao", role: "AI Research Lead", image: "https://i.pravatar.cc/300?u=ananya" },
    tools: ["OpenAI API", "LangChain", "Pinecone", "Zapier", "Flowise", "HuggingFace"],
    projects: [
      { title: "Automated Content Engine", description: "End-to-end system to generate and publish content." },
      { title: "Corporate Knowledge Bot", description: "RAG-based bot trained on internal documents." },
      { title: "Personal AI Assistant", description: "Custom agent capable of performing web tasks." }
    ],
    outcomes: [
      "Become an AI Engineer or Prompt Engineer",
      "Build high-value AI solutions",
      "Automate complex workflows",
      "Consulting opportunities in AI"
    ],
    faqs: [
      { question: "Do I need coding?", answer: "Yes, Python proficiency is required for the development modules." },
      { question: "Is this different from the DS course?", answer: "Yes, this focuses exclusively on GenAI application, not general ML." }
    ],
    brochureLink: ""
  },
  // --- Short Term Skilling Courses ---
  {
    slug: "python-programming-mastery",
    title: "Python Programming Mastery",
    shortTitle: "Python Mastery",
    description: "Become Job-Ready with Python in Just 8 Weeks. Ideal for beginners.",
    longDescription: "A fast-track course to master Python programming. From basic syntax to object-oriented programming and libraries, build a strong coding foundation.",
    icon: "Terminal",
    color: "from-blue-400/20 to-cyan-400/20",
    borderColor: "border-blue-400/30",
    tags: ["Python", "Coding", "Automation", "Data Structures"],
    duration: "2 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹11,999",
    originalPrice: "₹14,999",
    highlights: [
      "Complete Python Syntax & Logic",
      "Data Structures & Algorithms Basics",
      "Object-Oriented Programming (OOP)",
      "File Handling & Databases",
      "Real-world Mini Projects",
      "GitHub Resume Building"
    ],
    curriculum: [
      { module: "Python Foundations", topics: ["Variables", "Loops", "Conditionals", "Functions"] },
      { module: "Data Structures", topics: ["Lists", "Dictionaries", "Sets", "Tuples"] },
      { module: "Advanced Concepts", topics: ["OOPs", "Exception Handling", "Modules"] },
      { module: "Libraries Intro", topics: ["NumPy Basics", "Pandas Basics", "Matplotlib"] },
    ],
    instructor: { name: "Vikas Kumar", role: "Python Developer", image: "https://i.pravatar.cc/300?u=vikas" },
    tools: ["Python", "VS Code", "Jupyter", "Git"],
    projects: [
      { title: "Student Management System", description: "CLI-based app to manage student records." },
      { title: "Expense Tracker", description: "Tool to track and analyze personal expenses." },
      { title: "Data Cleaning Script", description: "Automated script to clean raw CSV data." }
    ],
    outcomes: [
      "Master core Python programming",
      "Build logic for problem solving",
      "Automate repetitive tasks",
      "Foundation for Data Science/Web Dev"
    ],
    faqs: [
      { question: "I am from non-IT. Can I join?", answer: "Yes! This course is designed specially for beginners." },
      { question: "Is it live or recorded?", answer: "It is a live instructor-led program." }
    ],
    brochureLink: ""
  },
  {
    slug: "advanced-excel-mis",
    title: "Advanced Excel & MIS Executive",
    shortTitle: "Excel & MIS",
    description: "Corporate-Ready Excel Skills in 60 Days. Pivot Tables, Dashboards & Automation.",
    longDescription: "Master the most widely used business tool. Learn Advanced Excel formulas, data management, dashboard creation, and MIS reporting for corporate roles.",
    icon: "FileSpreadsheet",
    color: "from-green-600/20 to-emerald-600/20",
    borderColor: "border-green-600/30",
    tags: ["Excel", "MIS", "Reporting", "Dashboards"],
    duration: "2 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹11,999",
    originalPrice: "₹14,999",
    highlights: [
      "Advanced Formulas (XLOOKUP, IF)",
      "Pivot Tables & Slicers",
      "Data Validation & Cleaning",
      "Professional Dashboard Design",
      "Automated MIS Reporting",
      "Corporate Case Studies"
    ],
    curriculum: [
      { module: "Excel Foundations", topics: ["Formatting", "Formulas", "VLOOKUP/HLOOKUP/XLOOKUP", "Conditional Formatting", "Date & Time Functions"] },
      { module: "Data Management", topics: ["Power Query Advanced", "Data Cleaning", "Validation", "ETL Process", "Power Pivot"] },
      { module: "Reporting & Dashboards", topics: ["Pivot Charts", "KPI Dashboards", "Interactive Reports", "Data Connection"] },
      { module: "MIS Automation", topics: ["Macros", "Monthly Reports", "Budgeting"] },
    ],
    instructor: { name: "Sneha Gupta", role: "MIS Expert", image: "https://i.pravatar.cc/300?u=sneha" },
    tools: ["Microsoft Excel", "Google Sheets"],
    projects: [
      { title: "Sales Dashboard", description: "Interactive dashboard tracking regional sales performance." },
      { title: "HR Employee Tracker", description: "Automated sheet for attendance and leave management." },
      { title: "Financial Budget Planner", description: "Dynamic budgeting tool with variance analysis." }
    ],
    outcomes: [
      "Job-ready for MIS Executive roles",
      "Create complex corporate reports",
      "Analyze business data efficiently",
      "Automate daily spreadsheet tasks"
    ],
    faqs: [
      { question: "Is prior Excel knowledge needed?", answer: "No, we start from the very basics." }
    ],
    brochureLink: ""
  },
  {
    slug: "power-bi-sql-analytics",
    title: "Power BI + SQL Analytics",
    shortTitle: "Analytics Starter",
    description: "Data Analytics Career Starter Program. SQL mastery and Power BI Dashboards.",
    longDescription: "Kickstart your analytics career. Learn to query databases with SQL and build stunning visual reports using Power BI in this focused program.",
    icon: "BarChart",
    color: "from-yellow-400/20 to-orange-400/20",
    borderColor: "border-yellow-400/30",
    tags: ["Power BI", "SQL", "Visualization", "Reporting"],
    duration: "3 Months",
    mode: "Hybrid",
    level: "Beginner",
    price: "₹17,999",
    originalPrice: "₹22,999",
    highlights: [
      "SQL Querying from scratch",
      "Data Modeling in Power BI",
      "DAX Fundamentals",
      "Interactive Report Design",
      "Business KPI Analysis",
      "Capstone Project"
    ],
    curriculum: [
      { module: "SQL Mastery", topics: ["SELECT", "Joins", "Windows", "DDL", "DML", "DCL", "DQL", "Delimiters", "Case"] },
      { module: "Power BI", topics: ["Graph", "Pattern", "Power Query", "Data Modeling", "DAX", "Interactive Dashboards", "Insights Generation"] },
      { module: "Business Analytics", topics: ["Sales Analysis", "Customer Insights", "Storytelling"] },
    ],
    instructor: { name: "Rajiv Menon", role: "BI Developer", image: "https://i.pravatar.cc/300?u=rajiv" },
    tools: ["MySQL", "Power BI Desktop"],
    projects: [
      { title: "E-Commerce Analyst Dashboard", description: "Full view of orders, customers, and revenue." },
      { title: "Sales Forecast Report", description: "Trend analysis and forecasting visualization." },
      { title: "SQL Data Extraction", description: "Complex query script to prepare data for analysis." }
    ],
    outcomes: [
      "Land Data Analyst Intern/Junior roles",
      "Proficient in SQL and Power BI",
      "Ability to visualize business data",
      "Understanding of data models"
    ],
    faqs: [
      { question: "Is this enough for a job?", answer: "Yes, covering SQL and Power BI opens many entry-level analyst roles." }
    ],
    brochureLink: ""
  },
  {
    slug: "video-editing-content-creation",
    title: "Video Editing & Content Creation",
    shortTitle: "Video Editing",
    description: "Become a Professional Video Editor & Reel Creator. Premiere Pro & After Effects.",
    longDescription: "Turn your creativity into a career. Learn professional video editing, motion graphics, and content strategies for social media growth. Perfect for aspiring creators.",
    icon: "Clapperboard",
    color: "from-fuchsia-500/20 to-pink-500/20",
    borderColor: "border-fuchsia-500/30",
    tags: ["Premiere Pro", "After Effects", "Reels", "YouTube"],
    duration: "3 Months",
    mode: "Offline/Hybrid",
    level: "Beginner",
    price: "₹17,999",
    originalPrice: "₹22,999",
    highlights: [
      "Adobe Premiere Pro Mastery",
      "After Effects Basics",
      "Color Grading & Sound Design",
      "Reel & Short-form Content Strategy",
      "YouTube Growth & SEO",
      "Freelancing & Client Management"
    ],
    curriculum: [
      { module: "Editing Fundamentals", topics: ["Cuts", "Transitions", "Timeline", "Audio Sync"] },
      { module: "Advanced Editing", topics: ["Color Correction", "Keyframing", "Masking"] },
      { module: "Motion Graphics", topics: ["Lower Thirds", "Intro/Outro", "Text Animation"] },
      { module: "Content Strategy", topics: ["Viral Hooks", "Thumbnail Design", "Platform Algorithms"] },
    ],
    instructor: { name: "Kartik Aryan", role: "Creative Director", image: "https://i.pravatar.cc/300?u=kartik" },
    tools: ["Adobe Premiere Pro", "After Effects", "Canva", "Audacity"],
    projects: [
      { title: "Reel Portfolio", description: "Set of 5 high-retention Instagram Reels." },
      { title: "Brand Commercial", description: "30-second promotional video for a product." },
      { title: "YouTube Vlog", description: "Complete vlog editing with storytelling elements." }
    ],
    outcomes: [
      "Become a Freelance Video Editor",
      "Start your own YouTube channel",
      "Work with specialized content agencies",
      "Create viral social media content"
    ],
    faqs: [
      { question: "Do I need a high-end PC for video editing?", answer: "A laptop with at least 8GB RAM and a dedicated graphics card is recommended for a smooth experience with Premiere Pro and After Effects. We can guide you on the best configuration for your budget." },
      { question: "Will I learn mobile video editing too?", answer: "While our core focus is on professional tools like Premiere Pro, we also cover mobile editing techniques using CapCut and VN Editor, which are essential for quick social media content." },
      { question: "Is this course suitable for aspiring YouTubers?", answer: "Perfectly! We cover everything from storytelling and editing to YouTube SEO and channel growth strategies." },
      { question: "Can I earn while learning?", answer: "Yes, many of our students start taking small freelance editing projects (like reels or short clips) after just one month of the program." }
    ],
    brochureLink: ""
  },
  // {
  //   slug: "stock-market-trading",
  //   title: "Stock Market & Algorithmic Trading",
  //   shortTitle: "Stock Trading",
  //   description: "Learn Trading with Risk Management. Technical Analysis & Algo Trading.",
  //   longDescription: "Understand the financial markets. Learn technical analysis, chart patterns, risk management, and getting started with algorithmic trading strategies.",
  //   icon: "TrendingUp",
  //   color: "from-emerald-400/20 to-teal-400/20",
  //   borderColor: "border-emerald-400/30",
  //   tags: ["Trading", "Technical Analysis", "Algo Trading", "Finance"],
  //   duration: "3 Months",
  //   mode: "Offline/Hybrid",
  //   level: "Beginner",
  //   price: "₹21,999",
  //   originalPrice: "₹27,999",
  //   highlights: [
  //     "Market Structure & Basics",
  //     "Technical Analysis (RSI, MACD)",
  //     "Candlestick Patterns & Price Action",
  //     "Risk Management Psychology",
  //     "Intro to Algorithmic Trading",
  //     "Live Market Sessions"
  //   ],
  //   curriculum: [
  //     { module: "Market Foundations", topics: ["Equity", "Derivatives", "Indices", "Brokers"] },
  //     { module: "Technical Analysis", topics: ["Support/Resistance", "Indicators", "Trendlines"] },
  //     { module: "Trading Strategy", topics: ["Intraday vs Swing", "Breakouts", "Position Sizing"] },
  //     { module: "Algo Introduction", topics: ["Backtesting", "Automation Basics", "Trading Bots"] },
  //   ],
  //   instructor: { name: "Harsh Dalal", role: "Technical Analyst", image: "https://i.pravatar.cc/300?u=harsh" },
  //   tools: ["TradingView", "Excel", "Sensibull", "Streak"],
  //   projects: [
  //     { title: "Strategy Backtesting Report", description: "Analyze performance of a strategy over 6 months." },
  //     { title: "Trading Journal", description: "Document and analyze 20 live trades." },
  //     { title: "Algo Blueprint", description: "Design a logic flow for an automated trade setup." }
  //   ],
  //   outcomes: [
  //     "Trade confidently in stock markets",
  //     "Manage financial risk effectively",
  //     "Understand algorithmic trading potential",
  //     "Build a secondary income stream"
  //   ],
  //   faqs: [
  //     { question: "Is capital required?", answer: "Yes, for live trading, but we practice with virtual money first." }
  //   ],
  //   brochureLink: "7nVkDhQkA4LPDqJ3KichQfe0f5RB?u"
  // },
  {
    slug: "ai-marketing-mastery",
    title: "AI Marketing & GenAI Mastery",
    shortTitle: "AI Marketing",
    description: "India's First Job-Oriented AI-Powered Marketing Program. 6 Months with Internship.",
    longDescription: "The future of marketing is AI. Master performance marketing, SEO, and content creation augmented by Generative AI tools. Includes a guaranteed internship.",
    icon: "Rocket",
    color: "from-rose-500/20 to-orange-500/20",
    borderColor: "border-rose-500/30",
    tags: ["AI Marketing", "Growth Hacking", "Automation", "Performance Marketing"],
    duration: "6 Months",
    mode: "Classroom/Hybrid",
    level: "Intermediate",
    price: "₹36,999",
    originalPrice: "₹42,000",
    highlights: [
      "Integrated 1 Month Internship",
      "Google & Meta Ads Mastery",
      "AI Content Generation (Text/Image/Video)",
      "Marketing Automation & CRM",
      "Agency Setup Blueprint",
      "Live Budget Campaigns"
    ],
    curriculum: [
      { module: "Marketing Foundation", topics: ["Funnels", "Consumer Psych", "Branding"] },
      { module: "Performance Marketing", topics: ["Google Ads", "Facebook Ads", "Retargeting", "ROAS"] },
      { module: "Generative AI for Marketing", topics: ["ChatGPT Strategies", "Midjourney Design", "Video AI"] },
      { module: "Automation & Growth", topics: ["Email Automation", "CRM Setup", "Funnel Building"] },
      { module: "Agency & Freelancing", topics: ["Client Acquisition", "Pricing", "Proposals"] },
    ],
    instructor: { name: "Simran Kaur", role: "Growth Marketer", image: "https://i.pravatar.cc/300?u=simran" },
    tools: ["Google Ads", "Meta Business Suite", "Zapier", "ChatGPT", "Midjourney", "Canva", "HubSpot"],
    projects: [
      { title: "Live Ad Campaign", description: "Manage a real budget to generate leads." },
      { title: "AI Content Engine", description: "Launch a blog/social channel powered by AI content." },
      { title: "Automated Sales Funnel", description: "Build a landing page + email sequence system." }
    ],
    outcomes: [
      "Become an AI Marketing Specialist",
      "Start a Marketing Agency",
      "High-paying Freelance career",
      "Master modern growth strategies"
    ],
    faqs: [
      { question: "What is the career growth in AI Marketing?", answer: "AI is revolutionizing marketing. Professionals who know how to use AI tools for performance marketing and content strategy are seeing significantly higher salaries and faster promotions." },
      { question: "Is the internship project-based?", answer: "Yes, you will work on live client projects under the supervision of our marketing experts, giving you real-world agency experience." },
      { question: "Do I need to be good at math for performance marketing?", answer: "You need comfortable basic math for calculating ROI, ROAS, and budget distributions, but most of the complex analysis is handled by the tools we teach you." },
      { question: "Will I learn how to build my own agency?", answer: "Yes, we have a specific module dedicated to client acquisition, pricing strategies, and setting up your own marketing consultancy." }
    ],
    brochureLink: ""
  },
  // --- School Level Programs (11th-12th) ---
  {
    slug: "data-science-foundation-high-school",
    title: "Data Science Foundation For 8th - 12th Class",
    shortTitle: "DS Foundation",
    description: "For 8th-12th Students. Build a strong base in Python, Analytics, and AI.",
    longDescription: "Start your tech journey early. Learn Python, Data Analysis, and the basics of Machine Learning. Perfect for students targeting engineering or tech careers.",
    icon: "Activity",
    color: "from-blue-600/20 to-indigo-600/20",
    borderColor: "border-blue-600/30",
    tags: ["Python", "School", "Analytics", "Logic Building"],
    duration: "4 Months",
    mode: "Offline/Hybrid",
    level: "School Level",
    price: "₹19,999",
    originalPrice: "₹27,999",
    highlights: [
      "Python Programming from Basic to Advanced",
      "Excel & Data Analysis Skills",
      "Introduction to Statistics",
      "Machine Learning Fundamentals",
      "GitHub Profile Building",
      "Career Guidance for College"
    ],
    curriculum: [
      { module: "Python Programming", topics: ["Logic", "Loops", "Functions", "Data Types"] },
      { module: "Data Analysis", topics: ["Excel Advanced", "Pandas Basics", "Charts"] },
      { module: "Statistics & Viz", topics: ["Mean/Median/Mode", "Graphs", "Matplotlib"] },
      { module: "Intro to AI/ML", topics: ["What is AI?", "Linear Regression", "Simple Models"] },
    ],
    instructor: { name: "Anjali Verma", role: "CS Faculty", image: "https://i.pravatar.cc/300?u=anjali" },
    tools: ["Python", "Excel", "Jupyter Notebook", "Google Colab"],
    projects: [
      { title: "Student Marks Analyzer", description: "Analyze class performance using Python." },
      { title: "Business Dashboard", description: "Visual report using Excel & Matplotlib." },
      { title: "Simple Prediction Model", description: "Predict outcomes based on simple datasets." }
    ],
    outcomes: [
      "Strong coding foundation before college",
      "Understanding of Data Science field",
      "Profile building for foreign applications",
      "Logical thinking enhancement"
    ],
    faqs: [
      { question: "How does this course help with school exams?", answer: "Python and basic data concepts are part of the 8th and 12th grade CS/IP syllabus. This course strengthens those foundations, helping you score better in your boards." },
      { question: "Is it too much pressure along with school?", answer: "We understand student schedules. Our batches are typically on weekends or late afternoons, and the focus is on fun, project-based learning rather than rote memorization." },
      { question: "Can I join if I don't have Computer Science in school?", answer: "Yes! This is a perfect way to learn technical skills that your school might not be offering, giving you a competitive edge for future college applications." }
    ],
    brochureLink: "https://drive.google.com/file/d/1AKKr4jycccdSWRryBG_Qm5VjCmMQatPe/view?usp=sharing"
  },
  {
    slug: "ai-ml-starter-high-school",
    title: "AI & Machine Learning For 8th - 12th Class",
    shortTitle: "AI Starter",
    description: "Advanced Python & AI/ML project-based learning for 8th-12th graders.",
    longDescription: "Go beyond the high school syllabus. Learn Object Oriented Programming, deep dive into Python libraries, and build your first AI Chatbot and ML models.",
    icon: "Brain",
    color: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-purple-600/30",
    tags: ["AI", "Machine Learning", "Python", "Chatbots"],
    duration: "4 Months",
    mode: "Offline/Hybrid",
    level: "School Level",
    price: "₹19,999",
    originalPrice: "₹32,000",
    highlights: [
      "Advanced Python (OOPs)",
      "Data Visualization with Seaborn",
      "Core ML Algorithms (Regression, Trees)",
      "AI Chatbot Development",
      "Model Evaluation",
      "Capstone AI Project"
    ],
    curriculum: [
      { module: "Advanced Python", topics: ["OOPs Concepts", "Modules", "Error Handling"] },
      { module: "Visualization Mastery", topics: ["Seaborn", "Complex Plots", "Data Storytelling"] },
      { module: "ML Algorithms", topics: ["Regression", "Classification", "Decision Trees"] },
      { module: "AI Projects", topics: ["Chatbot Logic", "Deployment", "Model Testing"] },
    ],
    instructor: { name: "Ravi Kumar", role: "AI Educator", image: "https://i.pravatar.cc/300?u=ravi" },
    tools: ["Python", "Scikit-Learn", "Seaborn", "Git"],
    projects: [
      { title: "AI Chatbot", description: "Rule-based chatbot for customer queries." },
      { title: "House Price Predictor", description: "ML model to estimate real estate prices." },
      { title: "GitHub Profile", description: "Showcase code and projects professionally." }
    ],
    outcomes: [
      "Build a portfolio of AI projects",
      "Master Python beyond high school level",
      "Gain early entry into AI field",
      "Critical problem solving skills"
    ],
    faqs: [
      { question: "What is the difference between Foundation and Starter?", answer: "The Starter course is more advanced, focusing on Object Oriented Programming, building AI chatbots, and using specialized ML libraries for real-world projects." },
      { question: "Will I build real AI models?", answer: "Yes, you will build and test your own prediction models and a conversational AI chatbot during the capstone project phase." },
      { question: "Do I get a certificate of completion?", answer: "Yes, you receive a certificate from IIAS which is a great addition to your portfolio for college admissions and internships." }
    ],
    brochureLink: "https://drive.google.com/file/d/1VF4zfe8lwLcNofPrhYF2jIj0uil9DwmZ/view?usp=sharing"
  }
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
  BookOpen: <BookOpen className="w-8 h-8" />,
  BarChart: <BarChart className="w-8 h-8" />,
  Bug: <Bug className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
  Clapperboard: <Clapperboard className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  FileSpreadsheet: <FileSpreadsheet className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Terminal: <Terminal className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Laptop: <Laptop className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
}
