'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function ShowCaseHoc({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string | null;
}) {
  const searchParams = useSearchParams();
  // const pathName = usePathname();
  const searchParam = searchParams.get('id');

  return searchParam === path && children;
}
