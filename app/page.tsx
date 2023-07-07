import merchant from "../public/merchant.png";
import agents from "../public/agents.png";
import company from "../public/company.png";
import partnership from "../public/partnership.png";
import Image from "next/image";
import Homelink from "./components/Homelink";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-white w-full pt-[40px] pb-[50px] md:flex md:justify-center md:h-screen md:items-center px-4">
      <div className="">
        <Link href={"/"} className="flex justify-end mb-4">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="mb-5">
          <h1 className="mb-2 font-medium text-[20px]">
            Select which type of account you want to open
          </h1>
          <p className="text-[#999999] text-[14px]">
            Already have an account? Sign In
          </p>
        </div>

        {/* <div className="w-[200px]  border border-gray-200 p-2 rounded-md">
          <select className="w-full cursor-pointer outline-none">
            <option value="f">first</option>
            <option value="s">second</option>
            <option value="f">first</option>
          </select>
        </div> */}
        <Homelink
          src="/merchant.png"
          title="Merchant"
          link="/merchant-sign-up"
          yes
        />
        <Homelink src="/company.png" title="Company" link="#" />
        <Homelink src="/agents.png" title="Agents" link="#" />

        <Link href={"/"} className="group">
          <div className="mb-5 cursor-pointer border flex px-6 py-6 items-center gap-6 bg-[#fafafa] rounded-[10px] group-hover:border-[#328A28] transition">
            <div className="rounded-full w-11 h-11 flex justify-center items-center bg-[#eeeeee]">
              <img src={"/partnership.png"} alt="" className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[17px]">Partnership</h3>
              <p className="text-[#9CA3AF] text-[12px]">
                Select which type of account you want to open
              </p>
            </div>
            <div>
              <span className="bg-[#23A323] text-white text-[8px] px-[2px] py-[3px] sm:text-[10px] sm:px-2 sm:py-[6px] rounded-full">
                Coming soon
              </span>
            </div>
          </div>
        </Link>
        <p className="text-[13px] text-center md:text-left">
          Already have an account?{" "}
          <span className="text-[#23A323]">Sign in</span>
        </p>
      </div>
    </div>
  );
}
