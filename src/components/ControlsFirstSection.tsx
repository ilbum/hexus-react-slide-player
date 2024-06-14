type Props = {
  children: any;
};

export default function ControlsFirstSection({ children }: Props) {
  return <div className="flex items-center gap-x-10 m-5 z-10">{children}</div>;
}
