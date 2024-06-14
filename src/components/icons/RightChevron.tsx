import { SvgIconProps } from '../../interfaces/SvgIconProps';

/**
 * A right chevron SVG icon.
 *
 * @param flipHorizontal flip the arrow horizontally
 * @param onClick click handler function
 * @param size resizing class for the SVG icon.
 * @returns React arrow SVG component.
 *
 * @example
 * <RightChevron size="size-12" />
 */
const RightChevron: React.FC<SvgIconProps> = ({
  onClick,
  flipHorizontal = false,
  size = 'size-6',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${size} ${flipHorizontal ? 'transform scale-x-[-1]' : ''}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default RightChevron;
