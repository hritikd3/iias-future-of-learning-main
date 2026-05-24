import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Online MBA from NMIMS | IIAS - Career Accelerator",
    description: "Pursue your Online MBA from NMIMS, India's leading management institute. NAAC A++ accredited, 100% online, and career-focused specializations. Enroll now through IIAS.",
    keywords: ["Online MBA", "NMIMS MBA", "Distance MBA", "IIAS", "Career Growth", "Business Analytics", "Marketing Management"],
};

export default function MbaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
