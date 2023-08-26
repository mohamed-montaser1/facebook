import { nanoid } from "nanoid";
import Image from "next/image";

export default function NotificationPopup() {
  return (
    <div
      className="fixed top-16 bg-white w-[360px] right-4 z-50 rounded-lg px-3 py-4 overflow-auto"
      style={{ height: "calc(100vh - 78px)", maxWidth: "calc(100vw - 24px)" }}
    >
      <h3 className="font-bold text-2xl mb-2">Notifications</h3>
      <div className="flex gap-1">
        <button className="active-notifications-tab notifications-tab">
          All
        </button>
        <button className="notifications-tab hover:bg-gray-100">Unread</button>
      </div>
      <h4 className="text-black text-lg font-semibold mt-2">New</h4>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map(() => {
          return (
            <Notification
              image="/friend.jpeg"
              username="Ahmed Sallam"
              verb="reacted to your photo"
              icon={"/reacts/small/heart.svg"}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
}

interface INotificationProps {
  image: string;
  icon: string;
  verb: string;
  username: string;
}

function Notification({ icon, image, username, verb }: INotificationProps) {
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
