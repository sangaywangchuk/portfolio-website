import Container from '@/components/container/container';
import ShowCaseChips from '@/components/show-case-chips/show-case-chips';

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      bgColor="bg-lightBlue"
      className="justify-center px-[24px] py-[32px] md:px-[180px] md:py-[40px]"
    >
      <div className="flex flex-1 flex-col items-center space-y-[40px]">
        <div className="flex flex-1 flex-col items-center space-y-[16px]">
          <div className="flex flex-1 flex-col items-center">
            <p className="sm-title">Show Case</p>
            <h3 className="font-poppins_bolder text-center text-[16px] uppercase md:text-[34px]">
              Presenting to you my magic
            </h3>
          </div>
          <div>{/* <ShowCaseChips /> */}</div>
        </div>
        {children}
      </div>
    </Container>
  );
}
