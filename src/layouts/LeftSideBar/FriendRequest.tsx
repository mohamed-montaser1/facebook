import Image from "next/image";

interface IFreindRequestProps {
  name: string;
  img: string;
}

export default function FriendRequest({ name, img }: IFreindRequestProps) {
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
