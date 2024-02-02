'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const currentRoute = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return;
    () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navData = [
    {
      navText: 'About me',
      redirect: '/',
      paths: ['/'],
      width: 'w-[129px]',
    },
    {
      navText: 'Development process',
      paths: ['/design-process', '/design-process/work-process'],
      redirect: '/design-process',
      width: 'w-[185px]',
    },
    {
      navText: 'Services',
      paths: ['/services'],
      redirect: '/services',
      width: 'w-[129px]',
    },
    {
      navText: 'Show case',
      paths: [
        '/show-case',
        '/show-case/logo-design',
        '/show-case/case-studies',
      ],
      redirect: '/show-case',
      width: 'w-[129px]',
    },
    {
      navText: 'Contact Me',
      paths: ['/contact-us'],
      redirect: '/contact-us',
      width: 'w-[129px]',
    },
  ];

  return (
    <header
      className={`header ${
        isScrolled
          ? 'shadow-[rgba(17,12,46,0.12)_0px_48px_100px_0px]'
          : 'shadow-none'
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`${
            isScrolled
              ? `slide-out-exit-active`
              : `slide-in-enter-done flex h-[26px] md:h-[36px]`
          }`}
          data-transition-enter="slide-in-enter-active"
          data-transition-enter-done="slide-in-enter-done"
          data-transition-exit="slide-out-exit-active"
        />
        <div className="flex items-center justify-between px-[24px] py-[16px] md:px-[120px] md:py-[24px]">
          <Link href="/">
            <div className="relative h-[14px] w-[102px] md:h-[25px] md:w-[174px]">
              <Image
                src="/portfolio_logo.webp"
                alt="portfolio logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <nav className="hidden flex-col md:flex md:flex-row">
            {navData?.map((item, index) => (
              <Link
                key={index}
                href={item.redirect}
                className={`hover:font-poppins_medium hover:text-primary-500 text-center ${
                  item?.width
                } ${
                  item.paths.includes(currentRoute)
                    ? 'font-poppins_medium text-primary-500'
                    : 'text-textSecondary font-poppins_thin'
                }`}
              >
                {item.navText}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpenNav(!openNav)}
            className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 block rounded-full p-[8px] transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M0.5 1.25C0.5 0.836 0.836 0.5 1.25 0.5H19.25C19.664 0.5 20 0.836 20 1.25C20 1.664 19.664 2 19.25 2H1.25C0.836 2 0.5 1.664 0.5 1.25ZM19.25 6.5H1.25C0.836 6.5 0.5 6.836 0.5 7.25C0.5 7.664 0.836 8 1.25 8H19.25C19.664 8 20 7.664 20 7.25C20 6.836 19.664 6.5 19.25 6.5ZM19.25 12.5H1.25C0.836 12.5 0.5 12.836 0.5 13.25C0.5 13.664 0.836 14 1.25 14H19.25C19.664 14 20 13.664 20 13.25C20 12.836 19.664 12.5 19.25 12.5Z"
                fill="#252F40"
              />
            </svg>
          </button>
          {openNav && (
            <div
              className={`absolute left-0 top-0 w-full bg-white bg-white/[0.95] px-[24px] pb-[16px] backdrop-blur-[12px] ${
                isScrolled ? 'pt-[13px]' : 'pt-[36px]'
              } shadow-[rgba(17,12,46,0.12)_0px_48px_100px_0px]`}
            >
              <div className="flex items-center justify-between">
                <Link href="/">
                  <div className="relative h-[14px] w-[102px]">
                    <Image
                      src="/portfolio_logo.webp"
                      alt="portfolio logo"
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpenNav(!openNav)}
                  className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 block rounded-full p-[8px] transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 md:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <nav
                className={`mt-[20px] flex transform flex-col items-center justify-center transition-transform ease-in-out ${
                  openNav ? '-translate-y-0 delay-1000' : ''
                }`}
              >
                {navData?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.redirect}
                    onClick={() => setOpenNav(false)}
                    className={`hover:font-poppins_medium hover:text-primary-500 w-full py-[12px] text-center ${
                      currentRoute.replace('/', ' ') ===
                      item.redirect.replace('/', ' ')
                        ? 'font-poppins_medium text-primary-500'
                        : 'text-textSecondary font-poppins_thin'
                    }`}
                  >
                    {item.navText}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
