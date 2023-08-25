import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export default function Photos() {
  return (
    <div className="bg-white w-full min-h-40 rounded-lg p-4 my-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Photos</h3>
        <Link
          href={"/account/me"}
          className="text-blue-500 font-semibold hover:underline"
        >
          See All Photos
        </Link>
      </div>
      <div
        className="mt-4 gap-2 grid"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}
      >
        {Array.from({ length: 6 }).map(() => {
          return (
            <Image
              src={"/test-account-pic.jpg"}
              alt="my images"
              width={106}
              height={106}
              className="rounded-lg cursor-pointer"
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
}
