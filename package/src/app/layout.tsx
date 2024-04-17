import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Journey Stickers - AI-Driven Sticker Personalization Design Project",
  description: "AI-Driven Sticker Personalization Design Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main className="flex min-h-screen flex-col items-center justify-between px-24 py-16">
            <div className="absolute top-5 right-24"><ThemeToggle /></div>
            <div className="flex flex-col w-full h-full justify-center items-center">
              <div className=" text-5xl font-bold">Journey Stickers</div>
              <div className="text-md mt-6 text-muted-foreground">AI-Driven Sticker Personalization Design</div>
              <Navigation />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
