import React from "react";

function page() {
  return (
    <div className="bg-white w-full px-[15%] pt-[40px] min-h-screen pb-[50px]">
      <div>
        <div className="flex justify-end mb-6">
          <img src="/logo.png" alt="" />
        </div>
        <h1>Create a merchant Account</h1>
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
          <input
            type="text"
            placeholder="Business Industry"
            className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px]"
          />
          <div className="outline-0 border-[1px] mb-[30px] w-full p-5 rounded-[3px] ">
            <select className="cursor-pointer w-full outline-0 text-gray-300">
              <option>Business Industry</option>
              <option value={"Agriculture"}>Agriculture</option>
              <option value={"Oil and Gas"}>Oil and Gas</option>
              <option value={"Manufacturing"}>Manufacturing</option>
              <option value={""}>Manufacturing</option>
              <option>Business Industry</option>
              <option>Business Industry</option>
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
