import Image from "next/image";
import { IContactProps } from ".";

export default function Contact({ img, name }: IContactProps) {
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
