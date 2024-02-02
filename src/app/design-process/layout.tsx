import Container from '@/components/container/container';
import DesignChips from '@/components/design-chips/design-chips';
export default function Layout(props: { children: React.ReactNode }) {
  return (
    <section>
      <Container
        bgColor="bg-lightBlue"
        className="p-[24px] md:px-[100px] md:py-[40px]"
      >
        <div className="flex flex-1 flex-col space-y-[40px]">
          <div className="flex flex-col items-center justify-center space-y-[16px]">
            <div className="flex flex-col items-center">
              <p className="sm-title">Development Process</p>
              <h3 className="font-poppins_bolder text-center text-[16px] uppercase md:text-[34px]">
                What You Can Expect
              </h3>
            </div>
            {/* <DesignChips /> */}
          </div>
          {props?.children}
        </div>
      </Container>
    </section>
  );
}
