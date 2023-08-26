import Image from "next/image";
import Notification from "../../components/icons/Notification";

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountAndNotifications({ setShowPopup }: Props) {
  return (
    <>
      <div className="flex items-center gap-3">
        <button
          className="bg-cgray hover:bg-[#d5d6da] p-3 rounded-full cursor-pointer transition ease-linear active:scale-95 max-[464px]:hidden border-none outline-none"
          onClick={() => setShowPopup((prev) => !prev)}
        >
          <Notification />
        </button>
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
