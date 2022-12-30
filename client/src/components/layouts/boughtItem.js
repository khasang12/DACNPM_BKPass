import React, { useState } from "react";
// import { timeAgo } from "../../../service/timeAgo";
import { useNavigate } from "react-router-dom";

const BoughtItem = ({ item }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    if (event.target.name === "comment") {
      navigate("/add-comment");
    } else if (event.target.name === "redo") {
      navigate("/demo-item");
    }
  };

  return (
  <div className="max-w-[700px] w-full flex flex-col border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
    <div className="w-full mb-1 text-black font-bold indent-2 border-b-2">
      {item.title}
    </div>
    <div className="w-full md:grid md:grid-cols-2" style={{"gridTemplateColumns":"4fr 1fr"}}>
      <div className="w-full flex flex-row">
        <div className="block w-[120px] h-full px-2">
          <img
            alt="item"
            src={item.image[0]}
            className="align-middle w-[120px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-1 h-1/2" style={{minHeight: "50px"}}>{item.name}</div>
          <div className="flex flex-row text-lg text-[#030981] h-3/10 relative"> 
            <div className="text-left font-semibold">
              {"Giá: "}
              {item.price}
            </div>
          </div>
          <div className="text-sm text-[#1488D8] font-semibold h-2/10">
            {"Đã quan tâm lúc "}
            {/* {<Date />} */}
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="text-lg text-[#030981] font-italic h-2/10 bottom-0"> 
            
          </div>
        </div>    
      </div>
      <div className="w-full relative hidden md:flex md:flex-col">
        <button 
          name = ""
          onClick={handleSubmit} 
          className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1'>Liên hệ</button>
        <button 
          name = "comment"
          onClick={handleSubmit}
          className='bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1'>Đánh giá</button>
        </div>
    </div>
    <div className="w-full flex align-middle justify-items-end md:hidden">
      <button 
        name = ""
        onClick={handleSubmit} 
        className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Liên hệ</button>
      <button 
        name = "comment"
        onClick={handleSubmit}
        className='bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Đánh giá</button>
    </div>
  </div>
);
}; export default BoughtItem;