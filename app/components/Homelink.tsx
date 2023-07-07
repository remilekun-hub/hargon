import React from "react";
import Link from "next/link";

type HomelinkProp = {
  src: string;
  title: string;
  link: string;
  yes?: boolean;
};
function Homelink({ src, title, link, yes }: HomelinkProp) {
  return (
    <Link href={link} className="group">
      <div
        className={` ${
          yes && " border-[#328A28]"
        } mb-5 cursor-pointer border flex px-6 py-6 items-center gap-6 bg-[#fafafa] rounded-[10px]  group-hover:border-[#328A28] transition`}
      >
        <div className="rounded-full w-11 h-11 flex justify-center items-center bg-[#eeeeee]">
          <img src={src} alt="" className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[17px]">{title}</h3>
          <p className="text-[#9CA3AF] text-[12px]">
            Select which type of account you want to open
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 group-hover:text-[#328A28] transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default Homelink;
