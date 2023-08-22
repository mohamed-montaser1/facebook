import Image from "next/image";
import Notification from "./icons/Notification";

export default function AccountAndNotifications() {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="bg-[#e4e6eb] hover:bg-[#d5d6da] p-3 rounded-full cursor-pointer transition ease-linear active:scale-95 max-[464px]:hidden">
          <Notification />
        </span>
        <Image
          src={"/test-account-pic.jpg"}
          alt="account-pic"
          width={40}
          height={40}
          className="rounded-full cursor-pointer active:scale-95 transition ease-linear active:grayscale"
        />
      </div>
    </>
  );
}
