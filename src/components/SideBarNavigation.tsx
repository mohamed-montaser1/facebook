import Image from "next/image";
import Logo from "./logo";
import Link from "next/link";

export default function SideBarNavigation() {
  return (
    <div className="border-b-2 border-b-[#CED0D4] pb-3">
      <SideBarItem
        img="/test-account-pic.jpg"
        text="Mohamed Montaser"
        link_to="/account/me"
      />
      <SideBarItem img="/sidebar-friends.png" text="Find friends" />
      <SideBarItem img="/sidebar-memories.png" text="Memories" />
      <div className="flex items-center gap-2 cursor-pointer hover:bg-cgray px-2 py-2 rounded-lg transition ease-linear">
        <Logo width={24} height={24} />
        <span className="font-semibold text-[.9rem] select-none">Welcome</span>
      </div>
      <SideBarItem img="/sidebar-saved.png" text="Saved" />
      <SideBarItem img="/sidebar-groups.png" text="Groups" />
      <SideBarItem img="/sidebar-video.png" text="Video" />
      <SideBarItem img="/sidebar-feeds.png" text="Feeds" />
    </div>
  );
}

interface ISideBarItem {
  img: string;
  text: string;
  link_to?: string;
}

function SideBarItem({ img, text, link_to }: ISideBarItem) {
  return (
    <Link
      href={link_to || "/"}
      className="flex items-center gap-2 cursor-pointer hover:bg-cgray px-1 py-2 rounded-lg transition ease-linear"
    >
      <Image
        src={img}
        alt="sidebar-item__image"
        width={28}
        height={28}
        className={`rounded-full select-none`}
      />
      <span className="font-semibold select-none text-[.9rem]">{text}</span>
    </Link>
  );
}
