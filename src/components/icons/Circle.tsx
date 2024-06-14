import { SvgIconProps } from '../../interfaces/SvgIconProps';

/**
 * For rendering a circle SVG icon.
 *
 * @param color default inherits the 'currentColor'
 * @param onClick click handler function
 * @param size resizing class for the SVG icon.
 * @returns React arrow SVG component.
 *
 * @example
 * <Circle size="size-12" />
 */
const Circle: React.FC<SvgIconProps> = ({
  color = 'currentColor',
  onClick,
  size = 'size-4',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      className={size}
      onClick={onClick}
    >
      <circle r="8" cx="12" cy="12" fill={color} />
    </svg>
  );
};

export default Circle;
