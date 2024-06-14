type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export default function ControlsRow({ children }: Props) {
  return (
    <div className="flex flex-wrap-reverse justify-between min-w-full">
      {children}
    </div>
  );
}
