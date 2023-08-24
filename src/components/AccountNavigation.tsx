import { nanoid } from "nanoid";

const Tabs: ITabProps[] = [
  { text: "Posts", active: false },
  { text: "About", active: true },
  { text: "Friends", active: false },
  { text: "Photos", active: false },
  { text: "Videos", active: false },
  { text: "Reels", active: false },
  { text: "More", active: false },
];

export default function AccountNavigation() {
  return (
    <div className="relative top-5 w-full border-t border-cgray py-2">
      <div className="tabs flex gap-1">
        {Tabs.map((tab) => {
          return <Tab text={tab.text} active={tab.active} key={nanoid()} />;
        })}
      </div>
    </div>
  );
}

interface ITabProps {
  text: string;
  active?: boolean;
}

function Tab({ text, active }: ITabProps) {
  return (
    <div className="hover:bg-[#f2f2f2] px-4 py-3 rounded-lg select-none cursor-pointer">
      <h3 className="font-semibold ">{text}</h3>
    </div>
  );
}
