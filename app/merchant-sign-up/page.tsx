import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-white w-full px-5 md:px-[10%] lg:px-[15%] pt-[40px] min-h-screen pb-[50px]">
      <div>
        <Link href={"/"} className="flex justify-end mb-6">
          <img src="/logo.png" alt="" />
        </Link>
        <h1 className="font-semibold text-[18px]">Create a merchant Account</h1>
        <div className="mt-5">
          <input
            type="text"
            placeholder="</KodeHex>"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />
          <input
            type="number"
            placeholder="Business Phone Number"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />

          <div className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px] ">
            <select className="cursor-pointer w-full outline-0 text-gray-400">
              <option>Business Industry</option>
              <option className="text-black">Business Industry</option>
              <option value={"Agriculture"} className="text-black">
                Agriculture
              </option>
              <option value={"Oil and Gas"} className="text-black">
                Oil and Gas
              </option>
              <option value={"Manufacturing"} className="text-black">
                Manufacturing
              </option>
              <option value={""} className="text-black">
                Manufacturing
              </option>
              <option className="text-black">Business Industry</option>
              <option className="text-black">Business Industry</option>
            </select>
          </div>
          <input
            type="email"
            placeholder="Business Email"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />
          <input
            type="text"
            placeholder="Business website or social handle"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />

          <input
            type="submit"
            value={"Sign Up"}
            className="bg-[#23A323] rounded-full p-4 w-full text-white"
          />
        </div>
      </div>
      <p className="text-[14px] mt-5 text-center">
        Already have an account? <span className="text-[#23A323]">Sign in</span>
      </p>
    </div>
  );
}

export default page;
