import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DEFAULT_NAVBAR_ITEMS } from "@/types/navbar";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/components/ui/layout/common/Footer";
import NavBar from "@/components/ui/common/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Layout" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={`${inter.variable} antialiased dark bg-dark-blue`}>
        <NextIntlClientProvider messages={messages}>
          <NavBar items={DEFAULT_NAVBAR_ITEMS} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
