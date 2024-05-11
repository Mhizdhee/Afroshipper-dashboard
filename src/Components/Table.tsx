import React from "react";

type TableRow = {
  Location: string;
  Email: string;
  IPAddress: string;
  Time: string;
  ActivityStatus: string;
};

const Table = ({ data }: { data: TableRow[] }) => {
  return (
    <div className="bg-white shadow-md rounded-md mr-[32px]  ">
      <div className="py-[24px] px-[24px] flex justify-between items-center">
        <p className="text-[18px] font-[inter] leading-[28px] text-[#101828]">
          Session Logs
        </p>
        <button className="bg-[#0C0F5C] text-[#FFFFFF] text-[14px] font-[inter] rounded-[8px] py-[8px] px-[14px] border-[1px]">
          Sign Out All Sessions
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-justify">
        <thead className="bg-[#F9FAFB] border-b-[#EAECF0]">
          <tr>
            <th className="px-6 py-3 text-left text-[12px] leading-[18px] font-[inter] text-[#475467] tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-[12px] leading-[18px] font-[inter] text-[#475467] tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-[12px] leading-[18px] font-[inter] text-[#475467] tracking-wider">
              IP Address
            </th>
            <th className="px-6 py-3 text-left text-[12px] leading-[18px] font-[inter] text-[#475467] tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-[12px] leading-[18px] font-[inter] text-[#475467] tracking-wider">
              Activity Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row: TableRow, index: number) => (
            <tr key={index} className={`${index % 2 === 0 ? "" : "bg-white"}`}>
              <td className="px-6 py-4 text-[14px] text-[#475467] font-[inter] leading-[20px] whitespace-nowrap">
                {row.Location}
              </td>
              <td className="px-6 py-4 text-[14px] text-[#475467] font-[inter] leading-[20px] whitespace-nowrap">
                {row.Email}
              </td>
              <td className="px-6 py-4 text-[14px] text-[#475467] font-[inter] leading-[20px] whitespace-nowrap">
                {row.IPAddress}
              </td>
              <td className="px-6 py-4 text-[14px] text-[#475467] font-[inter] leading-[20px] whitespace-nowrap">
                {row.Time}
              </td>
              <td className="px-6 py-4 text-[14px] font-[inter] text-center leading-[20px] whitespace-nowrap">
                <span
                  className={`inline-block px-2 py-1 ${
                    row.ActivityStatus === "Active"
                      ? "text-[#059669] bg-[#ECFDF3] border border-[#EAECF0] rounded-[16px]"
                      : row.ActivityStatus === "Expired" ||
                        row.ActivityStatus === "Signed Out"
                      ? "text-[#DC2626] bg-[#FFFAEB] border border-[#FEDF89] rounded-[16px]"
                      : ""
                  }`}
                >
                  {row.ActivityStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
