import Container from '@/components/container/container';
import Image from 'next/image';

export default function WorkStation() {
  return (
    <Container
      bgColor="bg-textPrimary"
      className="justify-center px-[24px] py-[32px] md:px-[200px] md:py-[80px]"
    >
      <div className="flex flex-col space-y-[18px] md:space-y-[28px]">
        <div className="flex flex-col items-center">
          <p className="sm-title">Work Station</p>
          <h3 className="font-poppins_bolder text-center text-[16px] uppercase text-white md:text-[34px]">
            Where I Do My works
          </h3>
        </div>
        <div className="relative h-[347px] w-[360px] md:h-[471px] md:w-[866px]">
          <Image
            alt="work-station"
            src="/desktop_setup.png"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Container>
  );
}
