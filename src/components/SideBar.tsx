import Image from "next/image";
import Logo from "./logo";
import SideBarNavigation from "./SideBarNavigation";
import SideBarGroups from "./SideBarGroups";

export default function SideBar() {
  return (
    <aside className="side-bar">
      <SideBarNavigation />
      <SideBarGroups />
      <p className="font-semibold text-slate-500 mt-5">
        Created By Mohamed Montaser
      </p>
    </aside>
  );
}
