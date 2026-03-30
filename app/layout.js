import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



// --- ENTERPRISE SEO METADATA ---
export const metadata = {
  title: {
    default: "AK Tours & Travels | Best Taxi & Tour Packages in Tamil Nadu",
    template: "%s | AK Tours & Travels"
  },
    icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  description: "Affordable & reliable taxi services across all Tamil Nadu districts. One-way drops, outstation trips, and 1-9 day tour packages. Book your ride now!",
  keywords: [
    "Taxi service in Tamil Nadu", 
    "One way drop taxi Tamil Nadu", 
    "Tamil Nadu tour packages", 
    "Best taxi in Coimbatore", 
    "Outstation taxi Tamil Nadu",
    "Navagraha temple tour packages"
  ],
  authors: [{ name: "AK Tours and Travels" }],
  creator: "Wepzite",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aktoursandtravels.in", // Replace with your actual domain
    siteName: "AK Tours & Travels",
    title: "AK Tours & Travels | Premium Taxi & Tours in Tamil Nadu",
    description: "Reliable 24/7 taxi service covering Chennai, Madurai, Coimbatore, Coimbatore, and all TN districts.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AK Tours Travels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Tours & Travels",
    description: "Your trusted travel partner in South India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Local Business Schema - Crucial for Google Maps/Local Rank */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "AK Tours & Travels",
              "image": "https://aktravels.in/logo.png",
              "@id": "https://aktravels.in",
              "url": "https://aktravels.in",
              "telephone": "+916380829253",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Coimbatore",
                "addressLocality": "Coimbatore",
                "addressRegion": "TN",
                "postalCode": "641021",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.0104,
                "longitude": 77.4768
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/aktours", // Add your links
                "https://www.instagram.com/aktours"
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ContactButton/>
      </body>
    </html>
  );
}