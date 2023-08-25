import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

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

interface IFreindRequestProps {
  name: string;
  img: string;
}

function FriendRequest({ name, img }: IFreindRequestProps) {
  return (
    <div className="mt-3 py-2 px-1 rounded-md hover:bg-[#f6fcff] transition ease-linear cursor-pointer select-none">
      <div className="flex items-center gap-2">
        <Image
          src={img}
          alt={name}
          width={46.67}
          height={46.67}
          className="rounded-full"
        />
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="mt-2 flex gap-2 justify-end">
        <button className="w-24 h-9 bg-[#1b74e4] hover:bg-[#1367ce] active:bg-[#0a56b3] text-white rounded-lg font-semibold border-none outline-none">
          Confirm
        </button>
        <button className="w-24 h-9 bg-[#e4e6eb] hover:bg-[#cacbcf] active:bg-[#b4b5b9] rounded-lg font-semibold border-none outline-none">
          Delete
        </button>
      </div>
    </div>
  );
}

let contacts: IContactProps[] = [
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
  { img: "/test-account-pic.jpg", name: "Mohamed Montaser" },
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
  { img: "/test-account-pic.jpg", name: "Mohamed Montaser" },
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
  { img: "/test-account-pic.jpg", name: "Mohamed Montaser" },
  { img: "/friend.jpeg", name: "Ahmed Sallam" },
];

function Contacts() {
  return (
    <>
      <h3 className="font-semibold text-lg mt-3 text-[#65676b]">Contacts</h3>
      {contacts.map((contact) => {
        return <Contact name={contact.name} img={contact.img} key={nanoid()} />;
      })}
    </>
  );
}

interface IContactProps {
  img: string;
  name: string;
}

function Contact({ img, name }: IContactProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-cgray px-1 py-2 rounded-lg transition ease-linear">
      <Image
        src={img}
        alt="sidebar-item__image"
        width={28}
        height={28}
        className={`rounded-full select-none`}
      />
      <span className="font-semibold select-none text-[.9rem]">{name}</span>
    </div>
  );
}
