import React from "react";
import SearchBar from "./SearchBar";
import NotificationIcon from "../assets/Icons/Actions.png";
import AvatarIcon from "../assets/Icons/avatar.webp";
import BreadCrumbs from "./BreadCrumbs";
import Avatar from "../assets/Icons/Avatars.png";
import Tabs from "../Components/Tabs";
import Table from "../Components/Table";
import TableData from "../Components/TableData";

const Content = () => {
  return (
    <>
      <div className="lg:pt-[12px] lg:block">
        <div className="header flex justify-center items-center pl-[32px] ">
          <SearchBar />
          <div className="avartar flex pl-[294px] mr-[50px]">
            <img className=" " src={NotificationIcon} alt="notification" />
            <img
              className="w-[30px]  rounded-[50%]"
              src={AvatarIcon}
              alt="avatar"
            />
          </div>
        </div>
        <hr className="mt-[12px] " />

        <div className="pt-[32px] pl-[32px]">
          <BreadCrumbs />
        </div>

        <div className="pt-[32px] pl-[32px]">
          <div className="flex items-center">
            <img className="pr-[12px]" src={Avatar} alt="avatar" />
            <h4 className="font-[inter] text-[rgb(16,25,40)] text-[28px] leading-[33.6px]">
              Abdullah Nasir
            </h4>
          </div>
          <Tabs />
          <Table data={TableData} />
        </div>
      </div>
      
    </>
  );
};

export default Content;


