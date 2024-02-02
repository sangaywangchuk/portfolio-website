interface ContainerProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

export default function Container(props: ContainerProps) {
  return (
    <section
      className={`flex min-h-[calc(100vh-73px)] flex-1 ${props.bgColor} ${props.className}`}
    >
      {props.children}
    </section>
  );
}
