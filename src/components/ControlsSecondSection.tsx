type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function ControlsSecondSection({ children }: Props) {
  return <div className="flex items-center gap-x-7 m-5 z-10">{children}</div>;
}
