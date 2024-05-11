import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="flex pt-[20px] pb-[7]">
        <button className="pr-[32px] font-[inter] text-[#667085] text-[14px] leading-[20px] text-center focus:border-b-2 focus:border-#0B0E54">
          Overview
        </button>
        <button className="pr-[32px] font-[inter] text-[#667085] text-[14px] leading-[20px] text-center focus:border-b-2 focus:border-#0B0E54">
          Branch
        </button>
        <button className="pr-[32px] font-[inter] text-[#667085] text-[14px] leading-[20px] text-center focus:border-b-2 focus:border-#0B0E54">
          KYC Documents
        </button>
        <button className=" text-[#0B0E54] font-[inter] text-[14px] leading-[20px] text-center py-4 focus:border-b-2 focus:border-#0B0E54">
          Activity Log
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Tabs;
