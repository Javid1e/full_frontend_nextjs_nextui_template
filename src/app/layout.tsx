import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { IranSans } from '@/config/fonts';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='rtl'>
      <body className={IranSans.className}>{children}</body>
    </html>
  );
}
