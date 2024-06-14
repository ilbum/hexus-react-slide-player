type Props = {
  children: any;
};

const ControlsFirstSection: React.FC<Props> = ({ children }: Props) => {
  return <div className="flex items-center gap-x-10 m-5 z-10">{children}</div>;
};

export default ControlsFirstSection;
