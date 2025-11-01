import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/layout/ProgressBar';
import AOSInit from '@/components/layout/AOSInit';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homie - Find Your Perfect Hostel Stress-Free',
  description: 'Homie is your trusted hostel finder app connecting students with verified accommodations in Bamenda. Safe, transparent, and easy to use.',
  keywords: 'hostel finder, student accommodation, Bamenda hostels, verified listings, student housing',
  authors: [{ name: 'Traitz Tech' }],
  openGraph: {
    title: 'Homie - Find Your Perfect Hostel Stress-Free',
    description: 'Connect with verified hostels and landlords in Bamenda. Your perfect accommodation awaits.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homie - Find Your Perfect Hostel Stress-Free',
    description: 'Connect with verified hostels and landlords in Bamenda.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ProgressBar />
        <AOSInit />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
