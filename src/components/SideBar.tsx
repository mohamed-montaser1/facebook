import Image from "next/image";

export default function SideBar() {
  return (
    <aside className="side-bar">
      <SideBarItem img="/test-account-pic.jpg" text="Mohamed Montaser" />
    </aside>
  );
}

interface ISideBarItem {
  img: string;
  text: string;
}

function SideBarItem({ img, text }: ISideBarItem) {
  return (
    <div className="flex items-center gap-2 cursor-pointer bg-slate-200">
      <Image
        src={img}
        alt="sidebar-item__image"
        width={36}
        height={36}
        className="rounded-full select-none"
      />
      <span className="font-semibold text-md select-none">{text}</span>
    </div>
  );
}
