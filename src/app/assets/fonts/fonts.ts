import { Poppins } from 'next/font/google';

export const poppins_thin = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-thin',
});

export const poppins_regular = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-regular',
});

export const poppins_medium = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-medium',
});

export const poppins_bold = Poppins({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-bold',
});

export const poppins_bolder = Poppins({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-bolder',
});
