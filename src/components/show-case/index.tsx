import Container from '@/components/container/container';
import HomeShowCaseChips from '@/components/home-show-case-chips/home-show-case-chips';
import ShowCase from './show-case';
import Link from 'next/link';

export default function ShowCaseContainer() {
  return (
    <Container
      bgColor="bg-lightBlue"
      className="justify-center px-[24px] py-[32px] md:px-[180px] md:py-[40px]"
    >
      <div className="flex flex-1 flex-col items-center space-y-[40px]">
        <div className="flex flex-col items-center space-y-[16px]">
          <div className="flex flex-1 flex-col items-center">
            <p className="sm-title">Show Case</p>
            <h3 className="font-poppins_bolder text-center text-[16px] uppercase md:text-[34px]">
              Presenting to you my magic
            </h3>
          </div>
          <div>{/* <HomeShowCaseChips /> */}</div>
        </div>
        <div>
          <ShowCase />
        </div>
        <Link href="/show-case" className="relative w-full md:w-[247px]">
          <button
            type="button"
            className="btn font-poppins_medium bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[8px_8px_24px_0_rgba(0, 95, 227, 0.20)] flex w-full items-center justify-center rounded-[16px] px-[48px] py-[12px] uppercase text-white transition transition duration-150 duration-150 ease-in-out ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:rounded-[38px]"
          >
            See More
            <svg
              className="icon-shake ml-[12px]"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
            >
              <path
                d="M21.5733 8.82886L23.4584 12.6307C23.6 12.9167 23.8736 13.1147 24.1912 13.1615L28.5418 13.7913C29.3393 13.9068 29.6583 14.8857 29.0794 15.4467L25.9333 18.4992C25.7037 18.7219 25.5978 19.0437 25.6528 19.3586L26.3721 23.5358C26.5178 24.3828 25.6267 25.0291 24.8636 24.6304L21.0892 22.6558C20.806 22.5073 20.4678 22.5073 20.1859 22.6558L16.4142 24.6289C15.6497 25.0291 14.7573 24.3814 14.9044 23.5331L15.6237 19.36C15.6787 19.0451 15.5728 18.7234 15.3432 18.5006L12.1971 15.4481C11.6196 14.8871 11.9372 13.9081 12.7347 13.7926L17.0853 13.1628C17.4015 13.1175 17.6751 12.9195 17.8181 12.6321L19.7032 8.83021C20.0882 8.05746 21.1911 8.05749 21.5733 8.82886ZM11.1562 23.375C11.1562 22.8057 10.6943 22.3437 10.125 22.3437H4.625C4.05575 22.3437 3.59375 22.8057 3.59375 23.375C3.59375 23.9442 4.05575 24.4062 4.625 24.4062H10.125C10.6943 24.4062 11.1562 23.9442 11.1562 23.375ZM7.375 17.5312H4.625C4.05575 17.5312 3.59375 17.0692 3.59375 16.5C3.59375 15.9307 4.05575 15.4687 4.625 15.4687H7.375C7.94425 15.4687 8.40625 15.9307 8.40625 16.5C8.40625 17.0692 7.94425 17.5312 7.375 17.5312ZM10.125 10.6562H4.625C4.05575 10.6562 3.59375 10.1942 3.59375 9.62496C3.59375 9.05571 4.05575 8.59371 4.625 8.59371H10.125C10.6943 8.59371 11.1562 9.05571 11.1562 9.62496C11.1562 10.1942 10.6943 10.6562 10.125 10.6562Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </Container>
  );
}
