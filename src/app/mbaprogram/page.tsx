"use client";

import { MbaNavbar } from "@/components/mba/MbaNavbar";
import { MbaHero } from "@/components/mba/MbaHero";
import { MbaBenefits } from "@/components/mba/MbaBenefits";
import { MbaTrustSignals } from "@/components/mba/MbaTrustSignals";
import { MbaSpecializations } from "@/components/mba/MbaSpecializations";
import { MbaEnquiryForm } from "@/components/mba/MbaEnquiryForm";
import { MbaStats } from "@/components/mba/MbaStats";
import { Footer } from "@/components/Footer";
import { MbaAlumni } from "@/components/mba/MbaAlumni";

export default function MbaProgramPage() {
    return (
        <main className="mba-theme min-h-screen">
            <MbaNavbar />

            <article>
                <MbaHero />

                <MbaTrustSignals />

                <MbaBenefits />

                <MbaAlumni />

                <MbaStats />

                <MbaSpecializations />

                <MbaEnquiryForm />
            </article>

            <Footer />

            {/* Scroll to Top Utility for the route */}
            <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .mba-theme ::selection {
          background-color: #2563eb;
          color: white;
        }
      `}</style>
        </main>
    );
}
