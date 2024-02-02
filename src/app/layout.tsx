import React from 'react';
import type { Metadata } from 'next';
import './assets/stylesheets/global.scss';
import {
  poppins_thin,
  poppins_bold,
  poppins_medium,
  poppins_regular,
  poppins_bolder,
} from './assets/fonts/fonts';
import StyledComponentsRegistry from '@/lib/registry';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Best Freelance Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins_thin.variable} ${poppins_regular.variable} ${poppins_medium.variable} ${poppins_bold.variable} ${poppins_bolder.variable}`}
    >
      <body className="scroll-smooth">
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
