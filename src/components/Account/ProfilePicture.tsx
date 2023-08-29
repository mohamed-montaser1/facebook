import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import UpdateProfilePicutrePopup from "./UpdateProfilePicturePopup";

export default function ProfilePicture() {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  const handleOpenUpdateProfilePicturePopup = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className="w-[176px] h-[176px] rounded-full bg-white flex justify-center items-center relative">
        <Image
          src={"/test-account-pic.jpg"}
          alt="Profile Picture"
          width={168}
          height={168}
          className="object-cover w-[168px] h-[168px] rounded-full"
        />
        <button
          className="absolute bg-[#e4e6eb] hover:bg-[#cbcdd1] active:bg-[#a9abaf] active:scale-95 p-3 rounded-full right-2 bottom-4 text-xl transition ease-linear border-none outline-none"
          onClick={handleOpenUpdateProfilePicturePopup}
        >
          <FaCamera />
        </button>
      </div>
      {showPopup && <UpdateProfilePicutrePopup setShowPopup={setShowPopup} />}
    </>
  );
}
