import { LiaTimesSolid } from "react-icons/lia";

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DiscardChangesPopup({
  state,
  setState,
  setShowPopup,
}: Props) {
  const handleCancel = () => {
    setState(false);
  };
  const handleDiscardImage = () => {
    setShowPopup(false);
    setState(false);
  };
  return (
    <div className="layer">
      <div className="w-[548px] max-w-[95%] min-h-[179px] rounded-lg absolute top-1/2 bg-white shadow-lg left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="create-post__header border-b border-b-cgray min-h-[50px] flex items-center justify-center relative">
          <h2 className="text-center text-xl font-semibold">Discard changes</h2>
          <button
            className="bg-[#e4e6eb] w-9 h-9 rounded-full text-lg absolute right-3 flex items-center justify-center"
            onClick={handleCancel}
          >
            <LiaTimesSolid />
          </button>
        </div>
        <p className="px-3 py-2 text-[.9375rem] mb-9">
          Are you sure that you want to discard your changes?
        </p>
        <div className="flex justify-end items-center px-3">
          <button
            className="text-[#1877f2] hover:bg-gray-100 mr-2 transition ease-linear font-semibold px-4 mb-3 py-2 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-[#1B74E4] hover:bg-[#1062c7] transition ease-linear w-28 font-semibold px-4 mb-3 py-2 rounded-md text-white"
            onClick={handleDiscardImage}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
