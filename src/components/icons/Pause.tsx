import { SvgIconProps } from '../../interfaces/SvgIconProps';

/**
 * A pause button SVG icon.
 *
 * @param size resizing class for the SVG icon.
 * @returns React right arrow SVG component.
 *
 * @example
 * <Pause size="size-12" />
 */
const Pause: React.FC<SvgIconProps> = ({ size = 'size-10' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  );
};

export default Pause;
