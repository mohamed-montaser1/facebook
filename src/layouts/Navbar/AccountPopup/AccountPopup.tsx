import Image from "next/image";
import AccountOption, { IAccountPopupOptions } from "./AccountOption";
import { nanoid } from "nanoid";
import { BsFillDoorOpenFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { TbInfoSquareFilled } from "react-icons/tb";
const Options: IAccountPopupOptions[] = [
  {
    img: "/settings.png",
    text: "Settings & privacy",
  },
  {
    img: <BsFillQuestionCircleFill />,
    text: "Help & support",
  },
  {
    img: <FaMoon />,
    text: "Display & accessibility",
  },
  {
    img: <TbInfoSquareFilled />,
    text: "Give feedback",
  },
  {
    img: <BsFillDoorOpenFill />,
    text: "Logout",
  },
];
export default function AccountPopup() {
  return (
    <div className="popup">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-cgray px-2 py-3 rounded-lg transition ease-linear shadow-lg">
        <Image
          src={"/test-account-pic.jpg"}
          alt="sidebar-item__image"
          width={36}
          height={36}
          className={`rounded-full select-none`}
        />
        <span className="font-semibold select-none text-[1.1rem]">
          Mohamed Montaser
        </span>
      </div>
      <ul className="mt-4">
        {Options.map((el) => {
          return <AccountOption img={el.img} text={el.text} key={nanoid()} />;
        })}
      </ul>
    </div>
  );
}
