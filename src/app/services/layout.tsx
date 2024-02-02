import Container from '@/components/container/container';

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      bgColor="bg-lightBlue"
      className="px-[24px] py-[38px] md:px-[120px] md:py-[40px]"
    >
      {children}
    </Container>
  );
}
