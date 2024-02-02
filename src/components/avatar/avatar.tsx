import { placeholder } from '@/utils/image-placeholder';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface AvatarProps {
  src: string | StaticImport;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full shadow-[rgba(0,0,0,0.1)_0px_10px_50px]">
      <Image
        className="object-contain"
        src={props.src}
        fill
        alt="avatar"
        priority
        placeholder={placeholder}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
