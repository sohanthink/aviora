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
  title: "Transforming nursing care operations with ease.",
  description:
    "All-in-one nursing software to streamline operations, ensure compliance, and improve patient care. Schedule staff, manage clients, and submit forms securely. HIPAA-compliant & trusted by healthcare professionals. ",
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
