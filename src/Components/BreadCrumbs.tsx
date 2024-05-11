import React from "react";
import Home from "../assets/Icons/_Breadcrumb button base.png";
import Chevron from "../assets/Icons/chevron-right.png";

const BreadCrumbs = () => {
  return (
    <div>
      <nav className="flex items-center text-sm font-medium text-gray-500">
        <img className="hover:text-gray-700" src={Home} alt="home" />
        <img src={Chevron} alt="chev" />

        <a
          href="#"
          className="text-[#475467] pl-[6px] pr-[6px] text-[14px] font-[inter] leading-[20px]"
        >
          User Management
        </a>
        <img className="pr-[6px] " src={Chevron} alt="chev" />

        <a
          href="#"
          className="text-[#475467] pl-[6px] text-[14px] font-[inter] leading-[20px]"
        >
          Users
        </a>
        <img className="pr-[6px]" src={Chevron} alt="chev" />
        <a
          href="#"
          className="text-[#475467] text-[14px] font-[inter] leading-[20px]"
        >
          Abdullah Nasir
        </a>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
