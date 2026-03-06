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
        default: "Savoria Restaurant | Fine Dining Experience",
        template: "%s | Savoria Restaurant",
    },
    description:
        "Experience exquisite flavors crafted with passion and the freshest ingredients at Savoria Restaurant.",
    keywords: ["restaurant", "fine dining", "gourmet", "culinary", "Savoria"],
    authors: [{ name: "Savoria Team" }],
    creator: "Savoria Restaurant",
    openGraph: {
        title: "Savoria Restaurant | Fine Dining Experience",
        description:
            "Experience exquisite flavors crafted with passion and the freshest ingredients at Savoria Restaurant.",
        url: "https://savoria-restaurant.com",
        siteName: "Savoria",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Savoria Restaurant | Fine Dining Experience",
        description: "Experience exquisite flavors crafted with passion and the freshest ingredients at Savoria Restaurant.",
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
