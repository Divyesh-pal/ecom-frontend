import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Stylish Desi — Premium Indian Ethnic Wear",
    template: "%s | Stylish Desi",
  },
  description:
    "Discover premium Indian ethnic wear for women and kids. Handcrafted sarees, lehengas, kurtis, and more — where heritage meets modern luxury.",
  keywords: [
    "Indian ethnic wear",
    "sarees",
    "lehengas",
    "kurtis",
    "salwar suits",
    "women ethnic wear",
    "kids ethnic wear",
    "Indian fashion",
    "stylish desi",
  ],
  openGraph: {
    title: "Stylish Desi — Premium Indian Ethnic Wear",
    description:
      "Handcrafted sarees, lehengas, kurtis, and more — where heritage meets modern luxury.",
    url: "https://stylishdesi.store",
    siteName: "Stylish Desi",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylish Desi — Premium Indian Ethnic Wear",
    description: "Where heritage meets modern luxury.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: "Manrope, sans-serif",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#650007", secondary: "#ffffff" },
            },
          }}
        />
      </body>
    </html>
  );
}
