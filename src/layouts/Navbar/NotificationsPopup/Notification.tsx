import Image from "next/image";

export interface INotificationProps {
  image: string;
  icon: string;
  verb: string;
  username: string;
}

export default function Notification({
  icon,
  image,
  username,
  verb,
}: INotificationProps) {
  return (
    <>
      <div className="flex gap-3 hover:bg-[#f2f2f2] transition ease-linear p-2 rounded-lg select-none cursor-pointer">
        <div className="image relative w-fit">
          <Image
            src={image}
            alt="user image"
            width={56}
            height={56}
            className="rounded-full"
          />
          <span className="absolute -bottom-1 -right-1">
            <Image src={icon} alt="icon" width={28} height={28} />
          </span>
        </div>
        <div className="w-[236px] flex flex-col justify-center">
          <p>
            <strong className="text-black">{username}</strong>{" "}
            <span className="max-[346px]:text-sm">{verb}</span>
          </p>
        </div>
      </div>
    </>
  );
}
