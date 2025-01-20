import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getMessages } from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fateme koushki",
  description: "frontend-Developer",
};

export default async function RootLayout({
  children,
  params
}:{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params;

  const locale = resolvedParams.locale;
   if (!routing.locales.includes(locale as "en" | "fa")) {
    notFound();
  }
  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  const message = await getMessages()
  return (
    <NextIntlClientProvider messages={message}>
    <html lang={locale} dir={dir} className="dark" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
    </NextIntlClientProvider>
  );
}
