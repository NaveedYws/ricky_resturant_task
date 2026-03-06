import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Ricky’s Restaurant | Authentic Dining Experience",
        template: "%s | Ricky’s Restaurants",
    },
    description:
        "Enjoy delicious meals, fresh ingredients, and a warm atmosphere at Ricky’s Restaurant. Discover a perfect place for family dining and great food.",
    keywords: [
        "Ricky’s Restaurant",
        "restaurant",
        "family dining",
        "fresh food",
        "best restaurant",
        "dining experience"
    ],
    authors: [{ name: "Ricky’s Restaurant Team" }],
    creator: "Ricky’s Restaurant",
    openGraph: {
        title: "Ricky’s Restaurant | Authentic Dining Experience",
        description:
            "Enjoy delicious meals, fresh ingredients, and a warm atmosphere at Ricky’s Restaurant.",
        url: "https://rickyrestaurants.com",
        siteName: "Ricky’s Restaurant",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ricky’s Restaurant | Authentic Dining Experience",
        description:
            "Enjoy delicious meals, fresh ingredients, and a warm atmosphere at Ricky’s Restaurant.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: "#AF833F",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <body className="antialiased">
                <Providers>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
