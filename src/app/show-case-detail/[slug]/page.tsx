import { fetchProjectShowCaseId } from '@/lib/apis';
import Image from 'next/image';
import Link from 'next/link';

export default async function ShowCaseDetail({
  params,
}: {
  params: { slug: string };
}) {
  const projectShowCase = await fetchProjectShowCaseId(params.slug);

  return (
    <div className="flex flex-1 flex-col space-y-[28px] md:space-y-[60px]">
      {projectShowCase?.scDetails?.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center justify-center space-y-[24px]"
        >
          <div className="flex flex-1 flex-col space-y-[6px] md:space-y-[16px]">
            <div
              className={`flex ${
                index !== 0
                  ? `w-full justify-center`
                  : `w-2/3 justify-between md:w-[60%]`
              } items-center`}
            >
              {index === 0 ? (
                <div className="flex flex-1">
                  <div className="hidden md:flex">
                    <Link href="/">
                      <button
                        type="button"
                        className="font-poppins_medium bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[8px_8px_24px_0_rgba(0, 95, 227, 0.20)] flex items-center rounded-[24px] px-[24px] py-[8px] uppercase text-white transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        <svg
                          className="mr-[16px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                        >
                          <path
                            d="M4.8125 11.0312L0.34375 6.28116C0.21875 6.12491 0.125 5.93741 0.125 5.74991C0.125 5.59366 0.21875 5.40616 0.34375 5.24991L4.8125 0.49991C5.09375 0.18741 5.5625 0.18741 5.875 0.46866C6.1875 0.74991 6.1875 1.21866 5.90625 1.53116L1.875 5.78116L5.90625 9.99991C6.1875 10.3124 6.1875 10.7812 5.875 11.0624C5.5625 11.3437 5.09375 11.3437 4.8125 11.0312Z"
                            fill="white"
                          />
                        </svg>
                        Go Back
                      </button>
                    </Link>
                  </div>
                  <Link href="/" className="flex md:hidden">
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="bg-primary-500 shadow-[8px_8px_24px_0_rgba(0, 95, 227, 0.20)] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 rounded-full px-[12.4px] py-[10px] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                      >
                        <path
                          d="M4.8125 11.0312L0.34375 6.28116C0.21875 6.12491 0.125 5.93741 0.125 5.74991C0.125 5.59366 0.21875 5.40616 0.34375 5.24991L4.8125 0.49991C5.09375 0.18741 5.5625 0.18741 5.875 0.46866C6.1875 0.74991 6.1875 1.21866 5.90625 1.53116L1.875 5.78116L5.90625 9.99991C6.1875 10.3124 6.1875 10.7812 5.875 11.0624C5.5625 11.3437 5.09375 11.3437 4.8125 11.0312Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <h3 className="font-poppins_bolder relative text-center text-[16px] md:text-[30px]">
                {item.title}
              </h3>
            </div>
            <p className="font-poppins text-textSecondary text-justify text-[14px] md:text-[16px]">
              {item.description}
            </p>
          </div>
          <div className="relative h-[186px] w-[345px] overflow-hidden rounded-[8px] shadow-[0px_60px_120px_-20px_#EBEFFD] sm:w-[592px] md:h-[600px] md:w-[1240px] md:rounded-[24px] 2xl:h-[700px] 2xl:w-[1700px]">
            <Image
              src={item.bannerImage}
              alt="banner Image"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
