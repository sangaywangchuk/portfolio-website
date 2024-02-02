import Container from '@/components/container/container';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-1">{children}</div>;
}
