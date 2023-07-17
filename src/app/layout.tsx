import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Created by Dibyajyoti Mishra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <nav className='fixed right-8 top-8 z-40'>
            <SignedIn>
              <UserButton
                afterSignOutUrl='/'
                afterMultiSessionSingleSignOutUrl='/'
                afterSwitchSessionUrl='/'
                appearance={{
                  variables: {
                    colorPrimary: "#000",
                  },
                }}
              />
            </SignedIn>
            <SignedOut></SignedOut>
          </nav>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
