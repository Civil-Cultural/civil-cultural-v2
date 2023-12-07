/* --- resources --- */
import Image from 'next/image'

/* --- hooks --- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { ImageProps } from "Contracts/Components";

export default function Logo({
  className,
  width = 43,
  height = 43,
  objectFit = "cover",
  src = "",
  ...props
}: ImageProps) {
  const { theme } = useTheme();

  return (
    <Image
      width={width}
      height={height}
      src={`/civilcultural_${theme}.png`}
      aria-label="Logo Civil Cultural"
      objectFit={objectFit}
      className={className ?? "float-end"}
      {...props}
    />
  );
}