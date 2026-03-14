export interface ChatOption {
    label: string;
    next?: string;
    link?: string;
    external?: boolean;
}

export interface ChatNode {
    message: string;
    options: ChatOption[];
}

export const chatbotData: Record<string, ChatNode> = {
    start: {
        message: "Hello! Welcome to Indore Institute of Advance Studies.\n\nHow may I help you today?",
        options: [
            { label: "Explore Courses", next: "courses_menu" },
            { label: "Admission & Payment", next: "admission_payment" },
            { label: "Mode of Study", next: "study_mode" },
            { label: "About IIAS", next: "about_iias" },
            { label: "FAQs", next: "faqs" },
            { label: "Contact Us", next: "contact_iias" },
        ],
    },
    courses_menu: {
        message: "We offer industry-led programs in cutting-edge technologies. Which field interests you most?",
        options: [
            { label: "AI & Data Science", next: "course_ds_ai" },
            { label: "GenAI & Prompt Eng.", next: "course_genai" },
            { label: "Full Stack Development", next: "course_fsd" },
            { label: "Cyber Security", next: "course_cyber" },
            { label: "More Courses...", link: "/courses" },
            { label: "Go Back", next: "start" },
        ],
    },
    course_ds_ai: {
        message: "Master Python, SQL, Machine Learning, and Deep Learning with our 6-month Data Science program. Includes 100% placement assistance and high-paying roles!",
        options: [
            { label: "View Details & Pricing", link: "/courses/data-science-ai" },
            { label: "Check Course Highlights", next: "ds_highlights" },
            { label: "Enroll Now", link: "https://forms.gle/kHCorJ79BidEsLk48", external: true },
            { label: "Go Back", next: "courses_menu" },
        ],
    },
    ds_highlights: {
        message: "Data Science Highlights:\n• AWS Cloud for AI deployment\n• Generative AI & LLM training\n• GitHub portfolio building\n• Industry-led projects\n• 100% Placement Support",
        options: [
            { label: "Enroll Online", link: "https://forms.gle/kHCorJ79BidEsLk48", external: true },
            { label: "Back to Courses", next: "courses_menu" },
        ],
    },
    course_genai: {
        message: "Get ahead in the AI revolution! Our Advanced GenAI course covers LLMs, Prompt Engineering, and building AI Agents.",
        options: [
            { label: "View Details & Price", link: "/courses/generative-ai-advanced" },
            { label: "Course Roadmap", next: "courses_menu" },
        ],
    },
    course_fsd: {
        message: "Become a Full Stack Developer (MERN Stack). Build real-world projects and master Docker/AWS for deployment. Kickstart your career in 6 months!",
        options: [
            { label: "View Details", link: "/courses/full-stack-web-development" },
            { label: "Check Highlights", next: "fsd_highlights" },
            { label: "Back to Courses", next: "courses_menu" },
        ],
    },
    fsd_highlights: {
        message: "FSD (MERN) Highlights:\n• Complete MERN stack mastery\n• DevOps: Docker & AWS basics\n• Real-world Portfolio projects\n• Interview prep & Portfolio building",
        options: [
            { label: "View Detailed Fee", link: "/courses/full-stack-web-development" },
            { label: "Go Back", next: "courses_menu" },
        ],
    },
    course_cyber: {
        message: "Master Offensive and Defensive Security. Prepare for CEH/CompTIA with our hands-on Ethical Hacking program.",
        options: [
            { label: "View Details & Price", link: "/courses/cyber-security-ethical-hacking" },
            { label: "Go Back", next: "courses_menu" },
        ],
    },
    admission_payment: {
        message: "Our admission process is simple! You can pay via UPI, Net Banking, or Credit/Debit cards. \n\nWe also offer 0% EMI options for most courses.",
        options: [
            { label: "Check Fee Structure", link: "/courses" },
            { label: "Scholarship Enquiries", next: "contact_admin" },
            { label: "Go Back", next: "start" },
        ],
    },
    study_mode: {
        message: "We provide flexible learning options to suit your schedule:\n\n• **Offline**: Hands-on classroom sessions in Indore.\n• **Hybrid**: Combine live online and offline sessions.\n• **Online**: 100% instructor-led live online classes.",
        options: [
            { label: "Speak to Counselor", next: "contact_admin" },
            { label: "Go Back", next: "start" },
        ],
    },
    about_iias: {
        message: "IIAS is Indore's premier tech academy. We focus on 'Future of Learning' with industry-led curriculum and 95%+ placement record.",
        options: [
            { label: "Our Partners", link: "/" },
            { label: "Visit Gallery", link: "/about" },
            { label: "Main Menu", next: "start" },
        ],
    },
    faqs: {
        message: "Common questions:\n• Placement assistance? Yes!\n• EMI available? Yes!\n• Batch size? 15-20 students.\n• Non-tech background? Allowed!",
        options: [
            { label: "More FAQs", link: "/contact" },
            { label: "Main Menu", next: "start" },
        ],
    },
    contact_iias: {
        message: "You can reach us at contact@indoreinstitute.in or call us at +91 9174171579.",
        options: [
            { label: "Visit Contact Page", link: "/contact" },
            { label: "Chat on WhatsApp", link: "https://wa.me/919136084736", external: true },
            { label: "Main Menu", next: "start" },
        ],
    },
    contact_admin: {
        message: "I'm sorry, I don't have that specific information yet. But our admin team is ready to help you directly on WhatsApp!",
        options: [
            { label: "Connect on WhatsApp", link: "https://wa.me/919136084736", external: true },
            { label: "Back to Home", next: "start" },
        ],
    },
};
