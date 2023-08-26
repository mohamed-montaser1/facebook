import Image from "next/image";
import { LuMoreHorizontal } from "react-icons/lu";

export interface IFriendAvatar {
  img: string;
  className?: string;
  last?: boolean;
}

export default function FriendSmallAvatar({
  img,
  className,
  last,
}: IFriendAvatar) {
  return (
    <div className={`relative ${className} cursor-pointer`}>
      <Image
        src={img}
        alt="friends profile picture"
        width={32}
        height={32}
        className={`border border-white rounded-full`}
      />
      {last && (
        <span className="absolute top-0 left-0 bg-black/20 hover:bg-black/50 transition ease-linear w-8 h-8 rounded-full flex items-center justify-center text-white">
          <LuMoreHorizontal />
        </span>
      )}
    </div>
  );
}
