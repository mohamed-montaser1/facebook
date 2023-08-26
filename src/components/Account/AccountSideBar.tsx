import Friends from "./Friends";
import Intro from "./Intro";
import Photos from "./Photos";

export default function AccountSideBar() {
  return (
    <div className="w-[360px] flex flex-col items-center max-[1099px]:w-[80%] max-[464px]:w-[95%] mx-auto">
      <Intro />
      <Photos />
      <Friends />
    </div>
  );
}
