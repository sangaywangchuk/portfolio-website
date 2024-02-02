import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-[24px]">
      <div className="relative h-[300px] w-[480px] md:h-[600px] md:w-[800px]">
        <Image
          src="/404_not_found.webp"
          alt="404 page"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Link href="/">
        <button type="button" className="btn-primary">
          Return Home
        </button>
      </Link>
    </section>
  );
}
