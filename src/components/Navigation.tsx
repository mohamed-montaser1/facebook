import { nanoid } from "nanoid";
import FriendsIcon from "./icons/FriendsIcon";
import GroupsIcon from "./icons/GroupsIcon";
import HomeIcon from "./icons/HomeIcon";
import MoreIcon from "./icons/MoreIcon";

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
        return current === Nav.name ? (
          <Active element={<Nav.icon />} key={nanoid()} />
        ) : (
          <Normal element={<Nav.icon />} key={nanoid()} />
        );
      })}
    </ul>
  );
}

interface ElementProps {
  element: React.ReactNode;
}

function Normal({ element }: ElementProps) {
  return (
    <li className="text-[#65676B] hover:bg-[#f2f2f2] transition ease-linear cursor-pointer px-8 py-2 rounded-md max-[594px]:px-4 max-[464px]:hidden">
      {element}
    </li>
  );
}

function Active({ element }: ElementProps) {
  return (
    <li className="text-[#1B74E4] transition ease-linear cursor-pointer max-[594px]:px-4 py-2 rounded-md max-[464px]:hidden">
      {element}
    </li>
  );
}
