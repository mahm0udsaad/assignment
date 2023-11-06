import { Checkbox } from "@mui/material";
import Row from "./row";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import SearchBar from "./search";

const rowData = [
    {
      orderNumber: "#876364",
      price: "$15.00",
      statusText: "Running",
      statusImageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/be21d1ee-3039-4d55-86e1-d3c4a306269a?apiKey=00dd475291cf4f1da724421e257168ca&",
      date: "12 Dec, 2023",
    },
    {
      orderNumber: "#876365",
      price: "$16.00",
      statusText: "Will Expire",
      statusImageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/766e386f-1ded-4935-9f7d-320bf390f9ee?apiKey=00dd475291cf4f1da724421e257168ca&",
      date: "13 Dec, 2023",
    },
    {
      orderNumber: "#876366",
      price: "$28.00",
      statusText: "Expired",
      statusImageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/468846a4-bda4-4755-9d1e-6e320d5697bf?apiKey=00dd475291cf4f1da724421e257168ca&",
      date: "13 Dec, 2023",
    },
    {
      orderNumber: "#876367",
      price: "$19.00",
      statusText: "Expired",
      statusImageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc157fed-9337-4845-8948-3cd76447e6d6?apiKey=00dd475291cf4f1da724421e257168ca&",
      date: "16 Dec, 2023",
    },
  ];
export const Dashboard = () =>{
    return (
        <div className="flex  flex-col items-stretch w-5/6 mx-auto ml-5 max-md:w-full max-md:ml-0">
        <div className=" flex grow w-11/12 flex-col w-full ml-auto pt-10 pb-12 max-md:max-w-full">
        <SearchBar />
          <div className="hidden  sm:flex w-full max-w-[1361px] flex-col   max-md:max-w-full max-md:pl-5">
            <div className="text-neutral-400 text-base font-medium  max-md:max-w-full">
              Dashboard/domains
            </div>
            <div className="flex w-full max-w-[1311px] items-start justify-between gap-5  max-md:max-w-full max-md:flex-wrap">
              <div className="text-neutral-700 text-3xl font-bold">
                Domains
              </div>
              <div className="flex-col overflow-hidden relative flex aspect-[4.142857142857143] w-[174px] max-w-full items-start gap-2 mt-2.5 pl-5 pr-11 py-3.5 self-start max-md:pr-5">
                <MdOutlineArrowDropDown />
                <MdOutlineArrowDropDown />
                <div className="relative text-white text-base font-medium self-start">
                  Buy Domain
                </div>
              </div>
            </div>
            <div className="px-8 pr-28 flex w-full items-start justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="flex items-center justify-between gap-1.5 max-md:justify-center">
              <Checkbox />
                <div className="text-slate-950 text-md opacity-70 ">
                  ID
                </div>
                <MdOutlineArrowDropDown />
              </div>
                <div className="items-start  flex justify-between gap-1.5">
                  <div className="text-slate-950 text-md opacity-70 ">
                    Domain Price
                  </div>
                  <MdOutlineArrowDropDown />
                </div>
                <div className="items-start flex w-40 ">
                  <div className="text-slate-950 text-md opacity-70 mx-3">
                    Status
                  </div>
                  <MdOutlineArrowDropDown />
              </div>
              <div className="flex items-start gap-2.5  self-start">
                <div className="text-slate-950 text-md opacity-70 self-start">
                  Created At
                </div>
                <MdOutlineArrowDropDown />
              </div>
              <div className="text-slate-950 text-md opacity-70 ">
                Action
              </div>
            </div>
          </div>
          <div className="w-full   px-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex sm:mt-0 mt-8 flex-col w-full gap-4">
              {rowData.map((data, index) => (
                  <Row
                    key={index}
                    item={data}
                />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}