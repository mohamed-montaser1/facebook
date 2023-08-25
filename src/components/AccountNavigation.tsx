import { nanoid } from "nanoid";
import { BsFillCaretDownFill } from "react-icons/bs";

const Tabs: ITabProps[] = [
  { text: "Posts", active: false },
  { text: "About", active: true },
  { text: "Friends", active: false },
  { text: "Photos", active: false },
  { text: "Videos", active: false },
  { text: "Reels", active: false },
  { text: "More", active: false, icon: <BsFillCaretDownFill /> },
];

export default function AccountNavigation() {
  return (
    <div className="relative top-5 w-full border-t border-cgray pt-2 pb-1">
      <div className="tabs flex gap-1">
        {Tabs.map((tab) => {
          return (
            <Tab
              text={tab.text}
              active={tab.active}
              icon={tab.icon}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ITabProps {
  text: string;
  active?: boolean;
  icon?: React.ReactNode;
}

function Tab({ text, active, icon }: ITabProps) {
  return (
    <div className={`${active ? "border-b-2 border-blue-500" : ""} py-1`}>
      <div
        className={`${
          active ? "" : "hover:bg-[#f2f2f2]"
        }  px-4 py-3 rounded-lg select-none cursor-pointer ${
          text !== "More" && text !== "Posts" ? "max-[657px]:hidden" : ""
        }`}
      >
        <h3
          className={`${
            active ? "text-[#1876f2]" : ""
          } font-semibold flex items-center gap-2`}
        >
          <span className="text-lg">{text}</span> {icon ? icon : null}
        </h3>
      </div>
    </div>
  );
}
