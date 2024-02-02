'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ShowCaseChips = () => {
  const currentRoute = usePathname();
  return (
    <div className="flex flex-1">
      <Link
        href="/show-case"
        className={`${
          currentRoute === '/show-case'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        React JS / React Native
      </Link>
      <Link
        href="/show-case/logo-design"
        className={`${
          currentRoute === '/show-case/logo-design'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        Next JS
      </Link>
      <Link
        href="/show-case/case-studies"
        className={`${
          currentRoute === '/show-case/case-studies'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[114px] md:w-[200px]`}
      >
        Angular
      </Link>
    </div>
  );
};

export default ShowCaseChips;
