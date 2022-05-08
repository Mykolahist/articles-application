import IconsSVG from "./sprite.svg";

export const Icons = ({ name, color, width, height, className }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      width={width}
      height={height}
      pointerEvents="none"
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
};