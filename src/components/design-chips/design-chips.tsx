'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesignChips = () => {
  const currentRoute = usePathname();
  return (
    <div className="flex">
      <Link
        href="/design-process"
        className={`${
          currentRoute === '/design-process'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[160px] md:w-[250px]`}
      >
        List of Deliverables
      </Link>
      <Link
        href="/design-process/work-process"
        className={`${
          currentRoute === '/design-process/work-process'
            ? 'chip-active-primary'
            : 'chip-inactive'
        } w-[160px] md:w-[250px]`}
      >
        Work Process
      </Link>
    </div>
  );
};

export default DesignChips;
