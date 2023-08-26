import { nanoid } from "nanoid";
import FriendsIcon from "@/components/icons/FriendsIcon";
import GroupsIcon from "@/components/icons/GroupsIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MoreIcon from "@/components/icons/MoreIcon";

const navigation = [
  { icon: HomeIcon, name: "home" },
  { icon: FriendsIcon, name: "friends" },
  { icon: GroupsIcon, name: "groups" },
  //   { icon: MoreIcon, name: "more" },
];
interface Props {
  current?: "home" | "friends" | "groups" | "more";
}
export default function Navigation({ current }: Props) {
  return (
    <ul className="flex gap-2 mx-auto">
      {navigation.map((Nav) => {
        return (
          <Normal
            element={<Nav.icon />}
            key={nanoid()}
            active={current === Nav.name}
          />
        );
      })}
    </ul>
  );
}

interface ElementProps {
  element: React.ReactNode;
  active?: boolean;
}

function Normal({ element, active }: ElementProps) {
  return (
    <li
      className={` ${
        active ? "text-[#1B74E4]" : "hover:bg-[#f2f2f2] text-[#65676B]"
      } transition ease-linear cursor-pointer px-8 py-2 rounded-md max-[594px]:px-4 max-[464px]:hidden relative ${
        active
          ? "after:absolute after:w-full after:h-[3px] after:bg-blue-500 after:left-0 after:-bottom-2 after:rounded-full"
          : ""
      }`}
    >
      {element}
    </li>
  );
}
