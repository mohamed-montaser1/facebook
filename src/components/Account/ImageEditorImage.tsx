import Image from "next/image";

export default function ImageEditorImage() {
  return (
    <div className="w-[300px] aspect-square max-w-[95%] relative mx-auto my-10">
      <Image
        src={"/test-account-pic.jpg"}
        alt="new account picture"
        className="rounded-full"
        fill
      />
    </div>
  );
}
