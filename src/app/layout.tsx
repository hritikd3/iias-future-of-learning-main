import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { BrochurePopup } from "@/components/BrochurePopup";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Indore Institute of Advance Studies | Master AI, Gen AI & Full-Stack",
  description: "The premier academy in Indore for AI, Generative AI, Agentic AI, Full-Stack Development, and Cyber Security. Empowering the next generation of tech leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="2ee4ff3e-6049-46a8-8697-cf4fa322924b"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17555496573"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17555496573');
          `}
        </Script>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster position="top-center" richColors />
        <VisualEditsMessenger />
        <EnquiryPopup />
        <BrochurePopup />
      </body>
    </html>
  );
}
