import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export default function Friends() {
  return (
    <div className="bg-white w-full min-h-40 rounded-lg p-4 my-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Friends</h3>
        <Link
          href={"/account/me"}
          className="text-blue-500 font-semibold hover:underline"
        >
          See All friends
        </Link>
      </div>
      <span className="text-[1.0625rem] text-[#65676B]">36 friend</span>
      <div
        className="mt-4 gap-2 grid"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}
      >
        {Array.from({ length: 6 }).map(() => {
          return (
            <div key={nanoid()} className="w-[106px]">
              <Image
                src={"/test-account-pic.jpg"}
                alt="my images"
                width={106}
                height={106}
                className="rounded-lg cursor-pointer"
              />
              <h3 className="font-semibold text-[.8125rem] cursor-pointer mt-1 hover:underline">
                Mohamed Montaser
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
