import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Koki Takahashi",
  description: "This is my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} dark:bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          defaultTheme="light"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
