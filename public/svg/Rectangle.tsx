export default function Rectangle({
  color = '#E8344E',
  width = 160,
  height = 96,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <path
        d='M0 12C0 5.37258 5.37258 0 12 0H123.349C127.487 0 131.332 2.13144 133.525 5.64001L156.025 41.64C158.457 45.5313 158.457 50.4687 156.025 54.36L133.525 90.36C131.332 93.8686 127.487 96 123.349 96H12C5.37258 96 0 90.6274 0 84V12Z'
        fill={color}
      />
    </svg>
  );
}
