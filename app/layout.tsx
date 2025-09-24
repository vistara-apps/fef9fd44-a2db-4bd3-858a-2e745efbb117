import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TradeSync Social - Collaborate, Learn, Trade Smarter',
  description: 'A Base MiniApp for traders to mirror and discuss trades, access curated learning, and engage in simulated competitions.',
  keywords: ['trading', 'crypto', 'base', 'social trading', 'defi'],
  authors: [{ name: 'TradeSync Social' }],
  openGraph: {
    title: 'TradeSync Social',
    description: 'Collaborate, learn, and trade smarter together.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
