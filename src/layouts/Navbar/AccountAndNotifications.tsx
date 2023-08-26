import Image from "next/image";
import Notification from "../../components/icons/Notification";

interface Props {
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountAndNotifications({
  setShowNotifications,
  setShowAccountOptions,
}: Props) {
  const handleToggleNotifications = () => {
    setShowNotifications((prev) => {
      if (prev === false) {
        setShowAccountOptions(false);
        return true;
      }
      return false;
    });
  };

  const handleToggleAccountOptions = () => {
    setShowAccountOptions((prev) => {
      if (prev === false) {
        setShowNotifications(false);
        return true;
      }
      return false;
    });
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <button
          className="bg-cgray hover:bg-[#d5d6da] p-3 rounded-full cursor-pointer transition ease-linear active:scale-95 max-[464px]:hidden border-none outline-none"
          onClick={handleToggleNotifications}
        >
          <Notification />
        </button>
        <button
          className="active:scale-95 transition ease-linear"
          onClick={handleToggleAccountOptions}
        >
          <Image
            src={"/test-account-pic.jpg"}
            alt="account-pic"
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
      </div>
    </>
  );
}
