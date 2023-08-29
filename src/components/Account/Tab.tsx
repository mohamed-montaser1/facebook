import { MouseEventHandler } from "react";

export interface ITabProps {
  id?: number;
  text: string;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Tab({ text, active, icon, onClick }: ITabProps) {
  return (
    <div
      className={`${active ? "border-b-2 border-blue-500" : ""} py-1`}
      onClick={onClick}
    >
      <div
        className={`${
          active ? "" : "hover:bg-[#f2f2f2]"
        }  px-4 py-3 rounded-lg select-none cursor-pointer ${
          text !== "More" && text !== "Posts" ? "max-[657px]:hidden" : ""
        }`}
      >
        <h3
          className={`${
            active ? "text-[#1876f2]" : ""
          } font-semibold flex items-center gap-2`}
        >
          <span className="text-lg">{text}</span> {icon ? icon : null}
        </h3>
      </div>
    </div>
  );
}
