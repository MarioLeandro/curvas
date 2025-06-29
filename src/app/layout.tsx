import { Ubuntu, Inter } from 'next/font/google';
import './globals.css';
import { AllProviders } from '@/global/providers';
import Footer from '@/global/components/footer';

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '600', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${inter.variable} antialiased`}>
        <div className="flex flex-col w-full min-h-screen font-(family-name:--font-ubuntu)">
          <AllProviders>{children}</AllProviders>
          <Footer />
        </div>
      </body>
    </html>
  );
}
