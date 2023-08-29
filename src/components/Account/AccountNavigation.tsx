import { BsFillCaretDownFill } from "react-icons/bs";
import Tab, { ITabProps } from "./Tab";
import { useState } from "react";

const Tabs: ITabProps[] = [
  { id: 1, text: "Posts" },
  { id: 2, text: "About" },
  { id: 3, text: "Friends" },
  { id: 4, text: "Photos" },
  { id: 5, text: "Videos" },
  { id: 6, text: "Reels" },
  { text: "More", icon: <BsFillCaretDownFill /> },
];

export default function AccountNavigation() {
  const [activeTabId, setActiveTabId] = useState<number>(1);

  const changeActiveTabHandler = (id: number | undefined) => {
    if (typeof id === "number") {
      setActiveTabId(id);
    }
  };

  return (
    <div className="relative top-5 w-full border-t border-cgray pt-2 pb-1">
      <div className="tabs flex gap-1">
        {Tabs.map((tab) => {
          return (
            <Tab
              text={tab.text}
              active={activeTabId === tab.id}
              icon={tab.icon}
              key={tab.id}
              id={tab.id}
              onClick={changeActiveTabHandler.bind(null, tab.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
