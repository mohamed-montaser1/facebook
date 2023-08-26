import Link from "next/link";
import AccountAndNotifications from "./AccountAndNotifications";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import Logo from "../../../public/logo";
import NotificationPopup from "./NotificationsPopup/Notifications";
import { useState } from "react";
import AccountPopup from "./AccountPopup/AccountPopup";

interface Props {
  current?: "home" | "friends" | "groups" | "more";
}

export default function NavBar({ current }: Props) {
  let [showNotificationPopup, setShowNotificationPopup] = useState<boolean>(false);
  let [showAccountOptions, setShowAccountOptions] = useState<boolean>(false);

  return (
    <>
      <header className="bg-white w-full h-14 flex items-center px-4 shadow-md fixed z-50">
        <Link href={"/"} className="mr-3">
          <Logo />
        </Link>
        <SearchBox setShowNotificationPopup={setShowNotificationPopup} />
        <Navigation current={current} />
        <AccountAndNotifications
          setShowNotifications={setShowNotificationPopup}
          setShowAccountOptions={setShowAccountOptions}
        />
      </header>
      {showNotificationPopup ? <NotificationPopup /> : null}
      {showAccountOptions ? <AccountPopup /> : null}
    </>
  );
}
