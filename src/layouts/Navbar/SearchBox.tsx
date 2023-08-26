import SearchIcon from "../../components/icons/SearchIcon";
import Notification from "../../components/icons/Notification";

interface Props {
  setShowNotificationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchBox({ setShowNotificationPopup }: Props) {
  return (
    <>
      <div className="rounded-full bg-[#f0f2f5] flex items-center h-10 gap-2 px-4">
        <span className="text-[#65676B]">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="bg-transparent text-[#050505] border-none outline-none max-[751px]:hidden"
          placeholder="Search Facebook"
        />
      </div>
      <button
        className="bg-cgray hover:bg-[#d5d6da] p-3 rounded-full cursor-pointer transition ease-linear active:scale-95 min-[464px]:hidden ml-3"
        onClick={() => setShowNotificationPopup((prev) => !prev)}
      >
        <Notification />
      </button>
    </>
  );
}
