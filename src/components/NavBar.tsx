import AccountAndNotifications from "./AccountAndNotifications";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import Logo from "./logo";

interface Props {
  current: "home" | "friends" | "groups" | "more";
}

export default function NavBar({ current }: Props) {
  return (
    <header className="bg-white w-full h-14 flex items-center px-4 shadow-md">
      <span className="mr-3">
        <Logo />
      </span>
      <SearchBox />
      <Navigation current={current} />
      <AccountAndNotifications />
    </header>
  );
}
