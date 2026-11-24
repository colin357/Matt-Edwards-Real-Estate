import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import MobileContactBar from "@/components/MobileContactBar";
import JsonLd from "@/components/JsonLd";
import { siteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: "Miami Beach & South of Fifth Luxury Real Estate | Matt Edwards",
    description:
      "South of Fifth resident and Miami Beach luxury real estate agent with ONE Sotheby's International Realty. Buy or sell oceanfront condos and waterfront homes.",
    path: "/",
  }),
  applicationName: "Matt Edwards Real Estate",
  authors: [{ name: site.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased pb-[calc(3rem+env(safe-area-inset-bottom))] md:pb-0">
        <JsonLd data={siteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileContactBar />
        <Analytics />
      </body>
    </html>
  );
}
