import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LocaleHtmlLang from '@/components/LocaleHtmlLang';

import './globals.css';

export default async function LocaleLayout({ children, params }: any) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Do not render <html> or <body> here – Next.js root layout already provides them.
  // Setting lang on the document is done client-side via LocaleHtmlLang.
  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}