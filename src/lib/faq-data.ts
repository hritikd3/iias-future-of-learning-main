export interface FAQ {
    question: string;
    answer: string;
    category?: "General" | "Admissions" | "Placements" | "Technical" | "Payments";
}

export const globalFAQs: FAQ[] = [
    {
        category: "General",
        question: "Who can join the Indore Institute of Advance Studies (IIAS) courses?",
        answer: "Our courses are designed for a wide range of individuals: from fresh graduates looking to start their careers, to working professionals wanting to upskill or switch fields. We even have foundational batches for 11th and 12th-grade students interested in tech."
    },
    {
        category: "General",
        question: "What is the mode of learning at IIAS?",
        answer: "We offer a flexible hybrid learning model. students can attend live interactive sessions online or visit our Indore campus for offline classes. All sessions are recorded and made available on your student dashboard for lifetime access."
    },
    {
        category: "Placements",
        question: "Do you provide 100% placement assistance?",
        answer: "Yes, we provide 100% placement assistance through our dedicated placement cell. This includes resume building workshops, LinkedIn profile optimization, mock interviews, and direct referrals to our 50+ hiring partners."
    },
    {
        category: "Admissions",
        question: "Are there any prerequisites or prior knowledge required?",
        answer: "Most of our foundational courses start from scratch, so no prior coding experience is needed. However, for advanced courses like GenAI Mastery, a basic understanding of programming or data concepts is beneficial."
    },
    {
        category: "Payments",
        question: "Are there any EMI or flexible payment options available?",
        answer: "Absolutely! We offer flexible EMI options with 0% interest to make our courses accessible. You can pay in easy monthly installments through our financial partners."
    },
    {
        category: "Technical",
        question: "What kind of projects will I work on?",
        answer: "Our curriculum is 80% practical. You will work on real-world industry capstone projects, build a professional portfolio on GitHub, and solve complex problems that mirrors the environment of top tech companies."
    },
    {
        category: "Admissions",
        question: "Will I get a certificate after completing the course?",
        answer: "Yes, upon successful completion of the course and projects, you will receive an industry-recognized certificate from Indore Institute of Advance Studies, which you can showcase on your LinkedIn and resume."
    },
    {
        category: "General",
        question: "What is the batch size for each course?",
        answer: "We maintain small, intimate batch sizes of 15-20 students to ensure personalized attention, better interaction with mentors, and effective learning outcomes."
    },
    {
        category: "Technical",
        question: "Do you provide study material or resources?",
        answer: "Yes, students receive comprehensive study guides, cheat sheets, curated lists of reading materials, and access to a premium community of learners and experts."
    },
    {
        category: "General",
        question: "How do I clear my doubts during the course?",
        answer: "We have multiple doubt-clearing channels: during live classes, through dedicated WhatsApp groups, and scheduled 1-on-1 mentorship sessions for complex topics."
    },
    {
        category: "Placements",
        question: "Can I join the placement program after the course ends?",
        answer: "Our placement assistance continues until you land your first job. We provide ongoing support, interview calls, and guidance even after the curriculum is completed."
    },
    {
        category: "Admissions",
        question: "Is there a refund policy?",
        answer: "Yes, we have a transparent refund policy. If you feel the course is not for you, you can request a refund within the first 3 days of starting the batch. Please check our terms and conditions for details."
    }
];
