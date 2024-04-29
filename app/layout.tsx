import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

import ReactQueryClientProvider from '@/app/_components/provider/ReactQueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jindevst portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html
        lang="ko"
        className="w-screen h-screen m-0 bg-[#171D25] overflow-x-hidden overflow-y-auto"
      >
        <body className="w-full h-full bg-steam-background">{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
