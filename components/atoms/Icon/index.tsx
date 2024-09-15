import { ICONS_MAP, SIZE_MAP } from "./constants";

const getSize = (size: string) => SIZE_MAP[size];

interface Props {
  name: keyof typeof ICONS_MAP
  size?: keyof typeof SIZE_MAP
}

const CommentIcon = ({ name, size = 'm' }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getSize(size)}
      height={getSize(size)}
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      {ICONS_MAP[name]}
    </svg>
);

export default CommentIcon;
