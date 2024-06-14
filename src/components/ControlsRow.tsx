type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ControlsRow: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap-reverse justify-between min-w-full">
      {children}
    </div>
  );
};

export default ControlsRow;
