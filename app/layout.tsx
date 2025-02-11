import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";
import ScrollWrapper from "@/components/scroll-wrapper";

export const metadata: Metadata = {
  title: "Gorelo",
  description:
    "We're an all-in-one platform for MSP/IT providers to run their business -- ticketing, billing, documentation, remote management of computers and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ScrollWrapper>{children}</ScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
