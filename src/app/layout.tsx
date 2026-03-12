import type { Metadata } from 'next';
import './[locale]/globals.css';

export const metadata: Metadata = {
  title: 'Switzerland',
  description: 'Discover Switzerland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
