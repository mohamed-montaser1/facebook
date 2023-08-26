import Image from "next/image";

export interface IAccountPopupOptions {
  img: string | React.ReactNode;
  text: string;
}

export default function AccountOption({ img, text }: IAccountPopupOptions) {
  return (
    <li className="mb-2 flex gap-2 items-center hover:bg-[#f2f2f2] p-2 rounded-lg transition ease-linear select-none cursor-pointer">
      <span className="bg-[#e4e6eb] w-9 h-9 flex items-center justify-center rounded-full">
        {typeof img === "string" && (
          <Image src={img} alt="settings icon" width={20} height={20} />
        )}
        {typeof img !== "string" && <span className="text-xl">{img}</span>}
      </span>
      <h4 className="font-medium">{text}</h4>
    </li>
  );
}
