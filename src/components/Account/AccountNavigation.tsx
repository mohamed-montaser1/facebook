import { nanoid } from "nanoid";
import { BsFillCaretDownFill } from "react-icons/bs";
import Tab, { ITabProps } from "./Tab";

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
