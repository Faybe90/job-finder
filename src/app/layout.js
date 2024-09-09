
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Search from "@/components/search";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "Jobs",
  description: "Site that offers job services in Algeria",
  applicationName: 'JobSite',
  keywords: ['jobs', 'algeria', 'service', 'employment', 'career', 'job search'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Nav />
        <Search />
        {children}
        <Footer />

      </body>
      <GoogleAnalytics gaId="G-TLG68X6W23" />
    </html>
  );
}