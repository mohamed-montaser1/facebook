import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import SuggestedPhotos from "./SuggestedPhotos";
import AccountPictureEditor from "./AccountPictureEditor";

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UpdateProfilePicutrePopup({ setShowPopup }: Props) {
  const [img, setImg] = useState<File>();
  const [isImgSelected, setIsImgSelected] = useState<boolean>(false);
  const [discardChanges, setDiscardChanges] = useState<boolean>(false);

  return (
    <div className="layer fixed z-50">
      <div className="w-[700px] min-h-[200px] max-h-[90vh] overflow-auto shadow-md bg-white rounded-md">
        <div className="create-post__header border-b border-b-cgray min-h-[50px] flex items-center justify-center relative">
          <h2 className="text-center text-xl font-semibold">
            Update profile picture
          </h2>
          <button
            className="bg-[#e4e6eb] w-9 h-9 rounded-full text-lg absolute right-3 flex items-center justify-center"
            onClick={() => setDiscardChanges(true)}
          >
            <LiaTimesSolid />
          </button>
        </div>
        {isImgSelected ? (
          <AccountPictureEditor
            state={discardChanges}
            setState={setDiscardChanges}
            setShowPopup={setShowPopup}
          />
        ) : (
          <SuggestedPhotos
            img={img}
            setImg={setImg}
            isImgSelected={isImgSelected}
            setIsImgSelected={setIsImgSelected}
          />
        )}
      </div>
    </div>
  );
}
