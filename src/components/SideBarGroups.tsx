import Image from "next/image";

export default function SideBarGroups() {
  return (
    <>
      <h2 className="text-slate-500 font-semibold mt-2">Your shortcuts</h2>
      <SideBarGroup />
      <SideBarGroup />
      <SideBarGroup />
    </>
  );
}

function SideBarGroup() {
  return (
    <div className="flex items-center gap-2 my-2 hover:bg-cgray transition ease-linear py-2 px-2 rounded-lg cursor-pointer">
      <Image
        src={"/test-account-pic.jpg"}
        width={36}
        height={36}
        alt="group image"
        className="rounded-md select-none"
      />
      <span className="text-[.9rem] font-semibold select-none">
        Mohamed Montaser Group
      </span>
    </div>
  );
}
