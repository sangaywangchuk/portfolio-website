import Link from 'next/link';
import Image from 'next/image';
import { ProjectShowCaseModel } from '@/lib/models';
import { fetchProjectShowCaseItems } from '@/lib/apis';
import { MyClientAnimationWrapper } from '../hoc/client-animation-wrapper';
interface UxDesignProps {
  limitLength?: number;
}
const UxDesign = async ({ limitLength }: UxDesignProps) => {
  const showCaseData: ProjectShowCaseModel[] = await fetchProjectShowCaseItems(
    'ux_design',
  );

  return (
    <div className="space-y-[28px] md:space-y-[60px]">
      {showCaseData
        .filter((_, index) => (limitLength ? index <= limitLength : true))
        .map((item, index) => (
          <div key={item?.scId}>
            {item.scCompanyName !== 'Drukings' ? (
              <MyClientAnimationWrapper
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  ease: 'easeIn',
                  opacity: {
                    duration: 1,
                  },
                  x: {
                    type: 'spring',
                    stiffness: 60,
                  },
                  duration: 1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="relative flex h-[542px] w-[345px] items-center justify-center overflow-hidden rounded-[16px] shadow-[0px_60px_120px_-20px_#EBEFFD] sm:w-[592px] md:h-[660px] md:w-[1240px] md:rounded-[40px]">
                  <Image
                    src={item.scBgImage}
                    fill
                    priority
                    alt="bg image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="z-1 absolute px-[24px] py-[40px] md:px-[100px] md:py-[80px]">
                    <div className="flex flex-col items-center justify-center space-x-0 md:flex-row md:space-x-[60px]">
                      <div className="relative h-[200px] w-[200px] md:h-[500px] md:w-[500px]">
                        <Image
                          alt="company logo"
                          src={item.scCompanyLogo}
                          fill
                          priority
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <MyClientAnimationWrapper
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.2,
                          ease: 'easeIn',
                          opacity: {
                            duration: 1,
                          },
                          x: {
                            type: 'spring',
                            stiffness: 60,
                          },
                          duration: 1,
                        }}
                      >
                        <div className="mt-[16px] flex min-h-[260px] flex-col justify-between md:mt-0 md:min-h-[312px]">
                          <div className="space-y-[16px]">
                            <div>
                              <p className="font-poppins_bolder text-[12px] uppercase text-[#D81F26] md:text-[16px]">
                                {item.scCompanyName}
                              </p>
                              <p className="font-poppins_bolder text-secondary-500 text-[16px] uppercase md:text-[40px]">
                                {item.scType}
                              </p>
                            </div>
                            <p className="font-poppins text-textPrimary text-[14px] md:text-[16px]">
                              {item.scDescription}
                            </p>
                          </div>
                          <Link
                            href={'/show-case-detail/' + item.scId}
                            className="flex items-center justify-center space-x-[12px] md:justify-start"
                          >
                            <p className="font-poppins_medium text-textPrimary text-[16px] md:text-[24px]">
                              View Details
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="14"
                              viewBox="0 0 8 14"
                              fill="none"
                            >
                              <path
                                d="M1 1L7 7L1 13"
                                stroke="#252F40"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </MyClientAnimationWrapper>
                    </div>
                  </div>
                </div>
              </MyClientAnimationWrapper>
            ) : (
              <MyClientAnimationWrapper
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  ease: 'easeIn',
                  opacity: {
                    duration: 1,
                  },
                  x: {
                    type: 'spring',
                    stiffness: 60,
                  },
                  duration: 1,
                }}
              >
                <div className="relative flex h-[542px] w-[345px] items-center justify-center overflow-hidden rounded-[16px] shadow-[0px_60px_120px_-20px_#EBEFFD] sm:w-[592px] md:h-[660px] md:w-[1240px] md:rounded-[40px]">
                  <Image
                    src={item.scBgImage}
                    fill
                    priority
                    alt="bg image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <MyClientAnimationWrapper
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.2,
                      ease: 'easeIn',
                      opacity: {
                        duration: 1,
                      },
                      x: {
                        type: 'spring',
                        stiffness: 60,
                      },
                      duration: 1,
                    }}
                  >
                    <div className="z-1 absolute px-[24px] py-[40px] md:px-[100px] md:py-[80px]">
                      <div className="flex flex-col items-center  justify-center space-x-0 md:flex-row md:space-x-[60px]">
                        <div className="order-2 mt-[16px] flex min-h-[260px] flex-col justify-between md:order-1 md:mt-0 md:min-h-[312px]">
                          <div className="space-y-[16px]">
                            <div>
                              <p className="font-poppins_bolder text-[12px] uppercase text-white md:text-[16px]">
                                {item.scCompanyName}
                              </p>
                              <p className="font-poppins_bolder text-[16px] uppercase text-[#F9E42A] md:text-[40px]">
                                {item.scType}
                              </p>
                            </div>
                            <p className="font-poppins text-[14px] text-white md:text-[16px]">
                              {item.scDescription}
                            </p>
                          </div>
                          <Link
                            href={'/show-case-detail/' + item.scId}
                            className="flex items-center justify-center space-x-[12px] md:justify-start"
                          >
                            <p className="font-poppins_medium text-[16px] text-white md:text-[24px]">
                              View Details
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="14"
                              viewBox="0 0 8 14"
                              fill="none"
                            >
                              <path
                                d="M1 1L7 7L1 13"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div className="relative order-1 h-[200px] w-[200px] md:order-2 md:h-[500px] md:w-[500px]">
                          <Image
                            alt="company logo"
                            src={item.scCompanyLogo}
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    </div>
                  </MyClientAnimationWrapper>
                </div>
              </MyClientAnimationWrapper>
            )}
          </div>
        ))}
    </div>
  );
};

export default UxDesign;
