import type { Metadata } from "next";

import "./globals.css";
import { toast, Toaster } from "sonner";
import AppLayout from "@/layouts/AppLayout";
import { APP_CONFIG, fontBase } from "@/config";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.APP_NAME,
    template: `%s - ${APP_CONFIG.APP_NAME}`,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    description: APP_CONFIG.APP_DESCRIPTION,
    images: [
      {
        url: "/open-graph.jpg",
        width: 1200,
        height: 630,
      },
      // optimized image for whatsapp
      {
        url: "/open-graph.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBase.className} ${fontBase.variable}`}>
        <AppLayout>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              className: "font-sans text-iron-950",
            }}
          />
        </AppLayout>
      </body>
    </html>
  );
}
