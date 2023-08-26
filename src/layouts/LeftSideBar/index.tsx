import Link from "next/link";
import FriendRequest from "./FriendRequest";
import Contacts from "./Contacts";

export default function FriendsSideBar() {
  return (
    <aside className="ml-auto side-bar right-0 top-14">
      <div className="friend-request-header flex justify-between items-center">
        <h2 className="font-semibold text-lg text-[#65676B]">
          Friend requests
        </h2>
        <Link href={"/"} className="text-blue-500 hover:underline">
          See All
        </Link>
      </div>
      <FriendRequest name="Ahmed Sallam" img="/friend.jpeg" />
      <hr className="bg-[#ced0d4] h-[2px] mt-4" />
      <Contacts />
    </aside>
  );
}

