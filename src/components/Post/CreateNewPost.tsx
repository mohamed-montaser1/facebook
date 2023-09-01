import { nanoid } from "nanoid";
import Image from "next/image";
import { useState } from "react";
import CreateNewPostPopup from "./CreateNewPostPopup";
interface util {
  icon: string;
  text: string;
}

const utils: util[] = [
  { icon: "/live.png", text: "Live video" },
  { icon: "/image.png", text: "Add Photo" },
  { icon: "/feeling-activity.png", text: "Feeling/activity" },
];

interface Props {
  utilType?: string;
}
export default function CreateNewPost({ utilType }: Props) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <>
      <div
        className={`create-post__container ${
          utilType === "util-fluid"
            ? "util-fluid max-[1099px]:w-[80%] max-[464px]:w-[95%]"
            : "util max-w-[90%]"
        } select-none`}
      >
        <div className="flex gap-2 border-b border-b-cgray pb-4 max-[368px]:border-b-0">
          <Image
            src={"/test-account-pic.jpg"}
            alt="profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <input
            type="text"
            readOnly
            placeholder="What's on your mind, Mohamed?"
            className="bg-cgray hover:bg-[#d4d5d8] active:scale-[0.96] transition ease-linear flex-1 rounded-full px-3 text-[#65676b] placeholder:text-[#65676b] border-none outline-none cursor-pointer max-[454px]:text-sm"
            onClick={() => setShowPopup(true)}
          />
        </div>
        <ul className="mt-4 flex items-center justify-between flex-wrap max-[368px]:hidden">
          {utils.map((util) => {
            return (
              <UtilsItem icon={util.icon} text={util.text} key={nanoid()} />
            );
          })}
        </ul>
      </div>
      {showPopup && (
        <CreateNewPostPopup
          setShowPopup={setShowPopup}
        />
      )}
    </>
  );
}

function UtilsItem({ icon, text }: util) {
  return (
    <li className="flex gap-2 items-center w-fit py-2 px-4 rounded-lg cursor-pointer hover:bg-[#f2f2f2] transition ease-linear">
      <Image
        src={icon}
        alt="add image to photo"
        width={24}
        height={24}
        className="select-none"
      />
      <span className="text-slate-500 font-semibold select-none">{text}</span>
    </li>
  );
}
