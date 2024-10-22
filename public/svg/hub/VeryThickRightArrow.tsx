type VeryThickRightArrowProps = {
  fill?: string;
};
export const VeryThickRightArrow = ({
  fill = "#E8344E",
}: VeryThickRightArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="158"
    height="97"
    viewBox="0 0 158 97"
    fill="none"
  >
    <path
      d="M0 12.1675C0 5.54006 5.37258 0.16748 12 0.16748H123.349C127.487 0.16748 131.332 2.29892 133.525 5.80749L156.025 41.8075C158.457 45.6987 158.457 50.6362 156.025 54.5275L133.525 90.5275C131.332 94.036 127.487 96.1675 123.349 96.1675H12C5.37258 96.1675 0 90.7949 0 84.1675V12.1675Z"
      fill={fill}
    />
  </svg>
);
