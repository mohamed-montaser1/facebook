import { nanoid } from "nanoid";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";

interface Props {
  img: File | undefined;
  setImg: React.Dispatch<React.SetStateAction<File | undefined>>;
  isImgSelected: boolean;
  setIsImgSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SuggestedPhotos({
  img,
  setImg,
  setIsImgSelected,
}: Props) {
  const handleUploadPhoto = (e: any) => {
    setImg(e);
    setIsImgSelected(true);
  };
  return (
    <div className="content">
      <div className="w-full px-3">
        <label
          className="flex justify-center cursor-pointer gap-2 items-center w-full bg-[#e7f3ff] text-[#1877F2] text-[.9375rem] text-center rounded-lg h-9 font-semibold border-nonne outline-none my-3"
          htmlFor="img"
        >
          <PiPlus /> Upload Photo
        </label>
        <input
          type="file"
          className="hidden"
          id="img"
          accept="image/png, image/tiff, image/jfif, image/bmp, image/gif, image/svg,image/webp, image/svgz, image/jpg, image/jpeg, image/ico, image/xbm, image/dib, image/pjp, image/apng, image/tif, image/pjpeg, image/avif, image/heif, image/heic"
          onChange={handleUploadPhoto}
        />
      </div>
      <div className="suggested-photos px-3">
        <h3 className="text-lg font-semibold mb-2">Suggested photos</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {Array.from({ length: 4 }).map((el) => (
            <Image
              src={"/test-account-pic.jpg"}
              alt="uploaded image"
              width={104}
              height={104}
              className="rounded-lg cursor-pointer"
              key={nanoid()}
            />
          ))}
        </div>
      </div>
      <div className="uploads px-3">
        <h3 className="text-lg font-semibold mb-2">Uploads</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {Array.from({ length: 4 }).map((el) => (
            <Image
              src={"/test-account-pic.jpg"}
              alt="uploaded image"
              width={104}
              height={104}
              className="rounded-lg cursor-pointer"
              key={nanoid()}
            />
          ))}
        </div>
      </div>
      <div className="profile-pictures px-3">
        <h3 className="text-lg font-semibold mb-2">Profile pictures</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <Image
            src={"/test-account-pic.jpg"}
            alt="uploaded image"
            width={104}
            height={104}
            className="rounded-lg cursor-pointer"
            key={nanoid()}
          />
        </div>
      </div>
      <div className="cover-photos px-3">
        <h3 className="text-lg font-semibold mb-2">cover photos</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <Image
            src={"/test-account-pic.jpg"}
            alt="uploaded image"
            width={104}
            height={104}
            className="rounded-lg cursor-pointer"
            key={nanoid()}
          />
        </div>
      </div>
    </div>
  );
}
