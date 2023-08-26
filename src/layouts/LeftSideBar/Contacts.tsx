import { nanoid } from "nanoid";
import { IContactProps } from ".";
import Contact from "./Contact";

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

export default function Contacts() {
  return (
    <>
      <h3 className="font-semibold text-lg mt-3 text-[#65676b]">Contacts</h3>
      {contacts.map((contact) => {
        return <Contact name={contact.name} img={contact.img} key={nanoid()} />;
      })}
    </>
  );
}
