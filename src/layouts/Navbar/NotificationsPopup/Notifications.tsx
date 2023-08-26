import { nanoid } from "nanoid";
import Notification from "./Notification";

export default function NotificationPopup() {
  return (
    <div className="popup" style={{ height: "calc(100vh - 78px)" }}>
      <h3 className="font-bold text-2xl mb-2">Notifications</h3>
      <div className="flex gap-1">
        <button className="active-notifications-tab notifications-tab">
          All
        </button>
        <button className="notifications-tab hover:bg-gray-100">Unread</button>
      </div>
      <h4 className="text-black text-lg font-semibold mt-2">New</h4>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map(() => {
          return (
            <Notification
              image="/friend.jpeg"
              username="Ahmed Sallam"
              verb="reacted to your photo"
              icon={"/reacts/small/heart.svg"}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
}
