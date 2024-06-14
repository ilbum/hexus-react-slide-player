import { SvgIconProps } from '../../interfaces/SvgIconProps';

/**
 * A play button SVG icon.
 *
 * @param size resizing class for the SVG icon.
 * @returns React right arrow SVG component.
 *
 * @example
 * <Play size="size-12" />
 */
const Play: React.FC<SvgIconProps> = ({ size = 'size-10' }) => {
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
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );
};

export default Play;
