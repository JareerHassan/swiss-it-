import type { Metadata } from 'next';
import './[locale]/globals.css';

export const metadata: Metadata = {
  title: 'Highland Group ',
  description: 'Highland Group is a Swiss-based digital solutions provider specializing in website development, hotel direct booking solutions, AI automation, mobile app development, web development and digital marketing. We help businesses grow with smart digital systems built for real results.',
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
