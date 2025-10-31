import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700", "500"],
});

export const metadata = {
  title:
    "Bespoke Nursing Care Management System - Fully Customizable | Aviora Portal",
  description:
    "Fully bespoke nursing care management system with GPS location tracking, attendance system, care plans, mobile app (under development), and website+portal setup. Custom-built for your business with client management, employee scheduling, appointment booking with location tracking, form submission, and comprehensive admin dashboard. Merchant/admin mobile app coming soon. Starting from £1,499/year.",
  keywords: [
    "nursing care management system",
    "bespoke care management software",
    "attendance tracking system",
    "care plans software",
    "nursing mobile app",
    "healthcare management portal",
    "client management system",
    "employee scheduling software",
    "secure nursing software",
    "customizable care management",
    "nursing care platform",
    "home care management",
    "domiciliary care software",
    "clock in clock out system",
    "nursing attendance matrix",
    "care management website",
    "healthcare portal development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
