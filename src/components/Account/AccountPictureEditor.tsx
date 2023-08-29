import { useState } from "react";
import ImageEditorImage from "./ImageEditorImage";
import UploadNewPhotoDescription from "./UploadNewPhotoDescription";
import DiscardChangesPopup from "./DiscardChangesPopup";

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountPictureEditor({
  state,
  setState,
  setShowPopup,
}: Props) {
  return (
    <>
      <div className="px-3 mt-4">
        <UploadNewPhotoDescription />
        <ImageEditorImage />
        <p className="flex items-center gap-2 text-lg text-gray-500">
          <span
            className="bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/ZcaRS5118Kl.png')] w-5 h-5"
            style={{
              backgroundPosition: "0px -302px",
              WebkitFilter:
                "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
            }}
          ></span>{" "}
          Your profile picture is public.
        </p>
        <hr className="my-3" />
        <div className="flex justify-end items-center ">
          <button
            className="text-[#1877f2] hover:bg-gray-100 mr-2 transition ease-linear font-semibold px-4 mb-3 py-2 rounded-md"
            onClick={() => setState(true)}
          >
            Cancel
          </button>
          <button className="bg-[#1B74E4] hover:bg-[#1062c7] transition ease-linear w-28 font-semibold px-4 mb-3 py-2 rounded-md text-white">
            Save
          </button>
        </div>
      </div>
      {state ? (
        <DiscardChangesPopup
          state={state}
          setState={setState}
          setShowPopup={setShowPopup}
        />
      ) : null}
    </>
  );
}
