import Image from "next/image";
import { LuCamera } from "react-icons/lu";

export default function Cover() {
  return (
    <div className="bg-gradient-to-t from-white via-[#050404cb] to-[#000000f1] w-full h-[348px] relative top-14">
      <div className="w-[940px] max-w-full h-full mx-auto rounded-b-lg relative">
        <Image
          src={"/test-cover.png"}
          alt="cover"
          fill
          className="object-cover rounded-b-lg"
        />
        <button className="bg-black/70 hover:bg-black/80 active:bg-black transition ease-linear absolute z-20 bottom-5 right-5 px-5 py-2 rounded-lg text-white font-semibold">
          <span className="max-[946px]:hidden">Edit Cover Photo</span>
          <span className="min-[946px]:hidden">
            <LuCamera />
          </span>
        </button>
      </div>
    </div>
  );
}
