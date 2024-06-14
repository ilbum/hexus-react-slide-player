import { svgDefaultSize } from '../../utilities/constants';

interface Props {
  flipHorizontal?: boolean;
  onClick?: () => void;
  size?: string;
}

/**
 * For rendering a right arrow SVG icon.
 *
 * @param flipHorizontal flip the arrow horizontally
 * @param handleClick click handler function
 * @param size resizing class for the SVG icon.
 * @returns React arrow SVG component.
 *
 * @example
 * <RightArrow size="size-12" />
 */
const RightArrow: React.FC<Props> = ({
  onClick,
  flipHorizontal = false,
  size = svgDefaultSize,
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

export default RightArrow;
