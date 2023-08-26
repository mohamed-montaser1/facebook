import Link from "next/link";
import AccountAndNotifications from "./AccountAndNotifications";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import Logo from "../../../public/logo";
import NotificationPopup from "@/components/Ui/Notifications";
import { useState } from "react";

interface Props {
  current?: "home" | "friends" | "groups" | "more";
}

export default function NavBar({ current }: Props) {
  let [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <header className="bg-white w-full h-14 flex items-center px-4 shadow-md fixed z-50">
        <Link href={"/"} className="mr-3">
          <Logo />
        </Link>
        <SearchBox setShowPopup={setShowPopup} />
        <Navigation current={current} />
        <AccountAndNotifications setShowPopup={setShowPopup} />
      </header>
      {showPopup ? <NotificationPopup /> : null}
    </>
  );
}
