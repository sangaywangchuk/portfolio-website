import Container from '@/components/container/container';

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      bgColor="bg-lightBlue"
      className="p-[24px] md:px-[100px] md:py-[40px]"
    >
      <div className="flex flex-1 flex-col space-y-[40px]">{children}</div>
    </Container>
  );
}
