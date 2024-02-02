import Container from '@/components/container/container';
import { MyClientAnimationWrapper } from '@/components/hoc/client-animation-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import {
  fadeInFromLeftVariant,
  fadeInFromRightVariant,
} from '../../utils/animations';

export default function BriefService() {
  return (
    <Container
      bgColor="bg-white"
      className="items-center justify-center px-[24px] py-[40px] md:px-[200px] md:py-[80px]"
    >
      <div className="flex flex-1 flex-col space-y-[24px] md:space-y-[80px]">
        <div className="flex flex-1 flex-col items-center justify-between md:flex-row">
          <MyClientAnimationWrapper
            variants={fadeInFromLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="relative h-[160px] w-[328px] md:h-[320px] md:w-[489px]">
              <Image
                alt="brief services"
                src="/brief_services.webp"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </MyClientAnimationWrapper>
          <MyClientAnimationWrapper
            variants={fadeInFromRightVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="flex w-full flex-col justify-center space-y-[38px] md:w-[500px]">
              <div className="text-center md:text-left">
                <h3 className="font-poppins_bolder text-[24px] md:text-[30px]">
                  The Services I Provide 🎯
                </h3>
                <p className="font-poppins text-textSecondary text-[14px] md:text-[16px]">
                  Wondering what are all the things I Do ??? Click below to see
                  my list of services
                </p>
              </div>
              <Link href="/services" className="w-full md:w-[350px]">
                <button
                  type="button"
                  className="btn font-poppins_medium bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[8px_8px_24px_0_rgba(0, 95, 227, 0.20)] flex w-full items-center justify-center rounded-[16px] px-[28px] py-[12px] text-white transition transition duration-150 duration-150 ease-in-out ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  The Services I Provide
                  <svg
                    className="icon-shake ml-[12px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="30"
                    viewBox="0 0 33 30"
                    fill="none"
                  >
                    <path
                      d="M17.5 4.9834H17.23C17.133 3.7294 16.321 2.9834 15 2.9834H10C8.679 2.9834 7.86702 3.7294 7.77002 4.9834H7.5C5.082 4.9834 3.75 6.3154 3.75 8.7334V18.7334C3.75 21.1514 5.082 22.4834 7.5 22.4834H17.5C19.918 22.4834 21.25 21.1514 21.25 18.7334V8.7334C21.25 6.3154 19.918 4.9834 17.5 4.9834ZM9.25 5.2334C9.25 4.6444 9.411 4.4834 10 4.4834H15C15.589 4.4834 15.75 4.6444 15.75 5.2334V6.2334C15.75 6.8224 15.589 6.9834 15 6.9834H10C9.411 6.9834 9.25 6.8224 9.25 6.2334V5.2334ZM19.75 18.7334C19.75 20.3104 19.077 20.9834 17.5 20.9834H7.5C5.923 20.9834 5.25 20.3104 5.25 18.7334V8.7334C5.25 7.1564 5.923 6.4834 7.5 6.4834H7.77002C7.86702 7.7374 8.679 8.4834 10 8.4834H15C16.321 8.4834 17.133 7.7374 17.23 6.4834H17.5C19.077 6.4834 19.75 7.1564 19.75 8.7334V18.7334Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </MyClientAnimationWrapper>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between md:flex-row">
          <MyClientAnimationWrapper
            variants={fadeInFromLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="order-2 flex w-full flex-col justify-center space-y-[38px] md:order-1 md:w-[500px]">
              <div className="text-center md:text-left">
                <h3 className="font-poppins_bolder text-[24px] md:text-[30px]">
                  How I Get Things Done? 🤔
                </h3>
                <p className="font-poppins text-textSecondary text-[14px] md:text-[16px]">
                  If you wonder what is my{' '}
                  <span className="!text-textPrimary !font-[600]">
                    Design process
                  </span>{' '}
                  and what you can expect from me as a{' '}
                  <span className="!text-textPrimary !font-[600]">
                    Standard Deliverable
                  </span>
                  , Click below👇
                </p>
              </div>
              <Link href="/design-process" className="w-full md:w-[350px]">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="btn font-poppins_medium bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[8px_8px_24px_0_rgba(0, 95, 227, 0.20)] flex w-full items-center justify-center rounded-[16px] px-[28px] py-[12px] text-white transition transition duration-150 duration-150 ease-in-out ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  See How The Magic Works
                  <svg
                    className="icon-shake ml-[12px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                  >
                    <path
                      d="M21.0733 9.3484L22.9584 13.1502C23.1 13.4362 23.3736 13.6343 23.6912 13.681L28.0418 14.3108C28.8393 14.4263 29.1583 15.4053 28.5794 15.9663L25.4333 19.0187C25.2037 19.2415 25.0978 19.5632 25.1528 19.8781L25.8721 24.0554C26.0178 24.9024 25.1267 25.5487 24.3636 25.1499L20.5892 23.1754C20.306 23.0269 19.9678 23.0269 19.6859 23.1754L15.9142 25.1485C15.1497 25.5486 14.2573 24.901 14.4044 24.0526L15.1237 19.8795C15.1787 19.5646 15.0728 19.2429 14.8432 19.0201L11.6971 15.9676C11.1196 15.4066 11.4372 14.4276 12.2347 14.3121L16.5853 13.6824C16.9015 13.637 17.1751 13.439 17.3181 13.1516L19.2032 9.34974C19.5882 8.57699 20.6911 8.57702 21.0733 9.3484ZM10.6562 23.8945C10.6562 23.3252 10.1943 22.8632 9.625 22.8632H4.125C3.55575 22.8632 3.09375 23.3252 3.09375 23.8945C3.09375 24.4637 3.55575 24.9257 4.125 24.9257H9.625C10.1943 24.9257 10.6562 24.4637 10.6562 23.8945ZM6.875 18.0507H4.125C3.55575 18.0507 3.09375 17.5887 3.09375 17.0195C3.09375 16.4502 3.55575 15.9882 4.125 15.9882H6.875C7.44425 15.9882 7.90625 16.4502 7.90625 17.0195C7.90625 17.5887 7.44425 18.0507 6.875 18.0507ZM9.625 11.1757H4.125C3.55575 11.1757 3.09375 10.7137 3.09375 10.1445C3.09375 9.57524 3.55575 9.11324 4.125 9.11324H9.625C10.1943 9.11324 10.6562 9.57524 10.6562 10.1445C10.6562 10.7137 10.1943 11.1757 9.625 11.1757Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </MyClientAnimationWrapper>
          <MyClientAnimationWrapper
            variants={fadeInFromRightVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="relative order-1 h-[164px] w-[328px] md:order-2 md:h-[430px] md:w-[562px]">
              <Image
                alt="things done"
                src="/things_done.webp"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </MyClientAnimationWrapper>
        </div>
      </div>
    </Container>
  );
}
