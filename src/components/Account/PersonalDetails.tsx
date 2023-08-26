import { nanoid } from "nanoid";
import Image from "next/image";
import { LuMoreHorizontal, LuPlus, LuEdit } from "react-icons/lu";

const friendsAvatars: IFriendAvatar[] = [
  { img: "/test-account-pic.jpg", className: "z-[8]" },
  { img: "/friend.jpeg", className: "right-2 z-[7]" },
  { img: "/test-account-pic.jpg", className: "right-4 z-[6]" },
  { img: "/friend.jpeg", className: "right-6 z-[5]" },
  { img: "/test-account-pic.jpg", className: "right-8 z-[4]" },
  { img: "/friend.jpeg", className: "right-10 z-[3]" },
  { img: "/test-account-pic.jpg", className: "right-12 z-[2]" },
  { img: "/friend.jpeg", className: "right-14 z-[1]", last: true },
];

export default function PersonalDetails() {
  return (
    <div className="w-full flex flex-col justify-between pt-14 gap-1 max-[946px]:pt-1">
      <h1 className="font-bold text-[2rem] leading-[1.1875] max-[946px]:text-center">
        Mohamed Montaser
      </h1>
      <span className="font-semibold text-[#65676B] select-none cursor-pointer hover:underline mb-1 max-[946px]:text-center">
        36 friends
      </span>
      <div className="w-full flex justify-between items-center max-[946px]:flex-col max-[946px]:gap-3">
        <div className="flex">
          {friendsAvatars.map((avatar) => {
            return (
              <FriendAvatar
                img={avatar.img}
                className={avatar.className}
                last={avatar.last || false}
                key={nanoid()}
              />
            );
          })}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-[#1b74e4] text-white px-4 py-2 rounded-lg font-semibold">
            <LuPlus /> Add to story
          </button>
          <button className="flex items-center gap-2 bg-[#E4E6EB] px-4 py-2 rounded-lg font-semibold">
            <LuEdit /> Edit profile
          </button>
        </div>
      </div>
    </div>
  );
}

interface IFriendAvatar {
  img: string;
  className?: string;
  last?: boolean;
}

function FriendAvatar({ img, className, last }: IFriendAvatar) {
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
