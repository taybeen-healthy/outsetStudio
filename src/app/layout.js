import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0c0d0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://outsetstudio.com"),
  title: {
    default: "Outset Studio | Architectural & Experience Design",
    template: "%s | Outset Studio",
  },
  description:
    "We transform empty spaces into business-driving experiences. Strategy, architectural design, execution, digital presence, and commercial growth.",
  keywords: [
    "architectural design",
    "experience design",
    "commercial spaces",
    "retail outlets",
    "interior architecture",
    "Outset Studio",
  ],
  authors: [{ name: "Outset Studio" }],
  creator: "Outset Studio",
  publisher: "Outset Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Outset Studio | Architectural & Experience Design",
    description:
      "We transform empty spaces into business-driving experiences. Strategy, design, execution, digital presence, and growth.",
    url: "https://outsetstudio.com",
    siteName: "Outset Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outset Studio | Architectural & Experience Design",
    description:
      "We transform empty spaces into business-driving experiences. Strategy, design, execution, digital presence, and growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0c0d0e] text-white selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
