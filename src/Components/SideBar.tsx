import { useState } from "react";
import Logo from "../assets/Images/Logo.png";
import HomeIcon from "../assets/Icons/home-01.png";
import UserIcon from "../assets/Icons/user-02.png";
import DropUp from "../assets/Icons/chevron-up.png";
import OrganizationsIcon from "../assets/Icons/building-06.png";
import VehiclesIcon from "../assets/Icons/truck-01.png";
import ShipmentsIcon from "../assets/Icons/package.png";
import WalletIcon from "../assets/Icons/wallet-04.png";
import TransactionsIcon from "../assets/Icons/switch-horizontal-01.png";
import ShippingQuoteIcon from "../assets/Icons/Icon.png";
import TicketIcon from "../assets/Icons/ticket-02.png";
import InvoiceIcon from "../assets/Icons/file-06.png";
import BagIcon from "../assets/Icons/shopping-bag-03.png";
import ListIcon from "../assets/Icons/list.png";
import SettingsIcon from "../assets/Icons/settings-02.png";
import DropDown from "../assets/Icons/chevron-down.png";
import Hamburger from "../assets/Icons/hamburger.svg";
import ButtonIcon from "../assets/Icons/Button.png";
import AvatarIcon from "../assets/Icons/avatar.webp";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    console.log("Open up");
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile lg:hidden w-[100%] md:h-[50%] md:pt-8 md:pl-6 fixed top-0 left-0 z-50  bg-[#0B0E54] px-4 py-3 flex justify-between items-center">
          <img
            src={Hamburger}
            alt="Hamburger Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleHamburger}
          />
          <img src={AvatarIcon} alt="" className="w-[20px] rounded-[200px]" />
        </div>

        {isHamburgerOpen && (
          <div className="open-menu pt-[74px] pl-[32px] h-[100%] pb-[20px] lg:hidden bg-[#0B0E54]">
            <div className="flex items-center">
              <img src={HomeIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
                Home
              </p>
            </div>
            <div>
              <div className="pt-[12px] flex items-center">
                <img src={UserIcon} alt="usericon" />
                <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
                  User Management
                </p>
                <div className="px-[18px] py-[16px]" onClick={toggleDropdown}>
                  <img src={DropUp} alt="drop-up" />
                </div>
              </div>
              {isOpen && (
                <ul className="text-[#F3F6FF] pt-[23px] pl-[23px] font-[inter]  text-[16px] leading-[24px]">
                  <li className="pb-[12px] list-disc-custom">Users</li>
                  <li className="mb-[12px] mr-[16px]  pb-[8px] pt-[8px] list-disc-custom1 bg-[#EAAA08] flex items-center rounded-[6px] text-[#0C0F5C]">
                    Employees
                  </li>
                  <li className="pb-[12px] list-disc-custom">Drivers</li>
                  <li className="pb-[12px] list-disc-custom">Influencers</li>
                </ul>
              )}
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={OrganizationsIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
                Organizations
              </p>
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={VehiclesIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
                Vehicles
              </p>
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={ShipmentsIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
                Shipments
              </p>
              <div className="pl-[57px]">
                <img src={DropDown} alt="drop-dwn" />
              </div>
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={WalletIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
                Wallet
              </p>
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={TransactionsIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
                Transactions
              </p>
            </div>

            <div className="pt-[12px] flex  items-center">
              <img src={ShippingQuoteIcon} alt="homeicon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
                Shipping Quote
              </p>
            </div>

            <div className="pt-[24px]">
              <h4 className="text-[#FFFFFF80] font-[inter] text-[14px] leading-[20px] ">
                INTERNAL TOOLS
              </h4>
              <div className="text-[#F3F6FF] pt-[12px]">
                <div className="flex items-center ">
                  <img src={TicketIcon} alt="ticket" />
                  <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                    Support Tickets
                  </p>
                </div>
                <div className="flex items-center pt-[12px] ">
                  <img src={InvoiceIcon} alt="invoice" />
                  <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                    Invoices
                  </p>
                  <div className=" pl-[70px]">
                    <img src={DropDown} alt="drop-dwn" />
                  </div>
                </div>
                <div className="flex items-center pt-[12px]">
                  <img src={BagIcon} alt="bagicon" />
                  <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                    Market Place
                  </p>
                </div>
                <div className="flex items-center pt-[12px]">
                  <img src={ListIcon} alt="list" />
                  <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                    Log
                  </p>
                </div>
                <div className="flex items-center pt-[12px] ">
                  <img src={SettingsIcon} alt="settings" />
                  <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                    Settings
                  </p>
                  <div className=" pl-[70px]">
                    <img src={DropDown} alt="drop-dwn" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[24px] pb-[32px]">
              <div className="flex items-center">
                <img
                  src={AvatarIcon}
                  alt=""
                  className="w-[20px] rounded-[200px]"
                />
                <div className=" pl-[12px] pr-[50px]">
                  <p className="text-[#FFFFFF] text-[14px] font-[inter] leading-[20px]">
                    Olivia Rhye
                  </p>
                  <p className="text-[#D5DEFF] text-[14px] font-[inter] leading-[20px]">
                    olivia@untitledui.com
                  </p>
                </div>
                <div>
                  <img src={ButtonIcon} alt="button" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="large-screen md-hidden lg:bg-[#0B0E54] lg:w-[312px] lg:h-[912px] lg:pt-8 lg:pl-6">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="pt-[24px] lg:block md:hidden">
          <div className="flex items-center">
            <img src={HomeIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
              Home
            </p>
          </div>
          <div>
            <div className="pt-[12px] flex items-center">
              <img src={UserIcon} alt="usericon" />
              <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
                User Management
              </p>
              <div className="pl-[57px]" onClick={toggleDropdown}>
                <img src={DropUp} alt="drop-up" />
              </div>
            </div>
            {isOpen && (
              <ul className="text-[#F3F6FF] pt-[23px] pl-[23px] font-[inter]  text-[16px] leading-[24px]">
                <li className="pb-[12px] list-disc-custom">Users</li>
                <li className="mb-[12px] mr-[16px]  pb-[8px] pt-[8px] list-disc-custom1 bg-[#EAAA08] flex items-center rounded-[6px] text-[#0C0F5C]">
                  Employees
                </li>
                <li className="pb-[12px] list-disc-custom">Drivers</li>
                <li className="pb-[12px] list-disc-custom">Influencers</li>
              </ul>
            )}
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={OrganizationsIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
              Organizations
            </p>
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={VehiclesIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
              Vehicles
            </p>
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={ShipmentsIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
              Shipments
            </p>
            <div className="pl-[117px]">
              <img src={DropDown} alt="drop-dwn" />
            </div>
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={WalletIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter]  leading-[24px] pl-3">
              Wallet
            </p>
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={TransactionsIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
              Transactions
            </p>
          </div>

          <div className="pt-[12px] flex  items-center">
            <img src={ShippingQuoteIcon} alt="homeicon" />
            <p className="text-[#F3F6FF] text-[16px] font-[inter] leading-[24px] pl-3">
              Shipping Quote
            </p>
          </div>

          <div className="pt-[24px]">
            <h4 className="text-[#FFFFFF80] font-[inter] text-[14px] leading-[20px] ">
              INTERNAL TOOLS
            </h4>
            <div className="text-[#F3F6FF] pt-[12px]">
              <div className="flex items-center ">
                <img src={TicketIcon} alt="ticket" />
                <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                  Support Tickets
                </p>
              </div>
              <div className="flex items-center pt-[12px] ">
                <img src={InvoiceIcon} alt="invoice" />
                <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                  Invoices
                </p>
                <div className=" pl-[135px]">
                  <img src={DropDown} alt="drop-dwn" />
                </div>
              </div>
              <div className="flex items-center pt-[12px]">
                <img src={BagIcon} alt="bagicon" />
                <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                  Market Place
                </p>
              </div>
              <div className="flex items-center pt-[12px]">
                <img src={ListIcon} alt="list" />
                <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                  Log
                </p>
              </div>
              <div className="flex items-center pt-[12px] ">
                <img src={SettingsIcon} alt="settings" />
                <p className="pl-[12px] text-[16px] font-[inter] leading-[24px]">
                  Settings
                </p>
                <div className=" pl-[135px]">
                  <img src={DropDown} alt="drop-dwn" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[24px] pb-[32px]">
            <div className="flex items-center">
              <img
                src={AvatarIcon}
                alt=""
                className="w-[20px] rounded-[200px]"
              />
              <div className=" pl-[12px] pr-[50px]">
                <p className="text-[#FFFFFF] text-[14px] font-[inter] leading-[20px]">
                  Olivia Rhye
                </p>
                <p className="text-[#D5DEFF] text-[14px] font-[inter] leading-[20px]">
                  olivia@untitledui.com
                </p>
              </div>
              <img src={ButtonIcon} alt="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
