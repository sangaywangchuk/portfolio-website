import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[960px] flex-1 items-center justify-center md:min-h-screen">
      <Image
        src="/contact_bg.webp"
        fill
        priority
        alt="bg image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {children}
    </div>
  );
}
