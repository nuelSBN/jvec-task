interface Props {
  title: string;
  clx?: string;
}

export default function SectionTitle({ title, clx }: Props) {
  return (
    <h1
      className={`text-[35px] lg:text-[50px] text-center leading-[100%] font-bold text-white ${clx}`}
    >
      {title}
    </h1>
  );
}
