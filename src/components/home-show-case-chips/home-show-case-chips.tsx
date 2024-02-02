'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const HomeShowCaseChips = () => {
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('id');
  return (
    <div className="flex flex-1">
      <Link
        href="/#show-case"
        className={`${
          searchParam === null && currentRoute === '/'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        React JS / React Native
      </Link>
      <Link
        href="?id=logo-design#show-case"
        className={`${
          searchParam === 'logo-design'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        Next JS
      </Link>
      <Link
        href="?id=case-studies#show-case"
        className={`${
          searchParam === 'case-studies'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        Angular
      </Link>
    </div>
  );
};

export default HomeShowCaseChips;
