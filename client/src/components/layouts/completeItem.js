import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteItem = ({ item }) => {
  const navigate = useNavigate();
  // const searching = (e) => {
  //   e.target.name = 
  //   navigate({
  //     pathname: "/search",
  //     search: "?{name}",
  //   });
  // }
  return (
    <div className="max-w-[700px] w-full flex flex-col border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
    <div className="w-full mb-1 text-black font-bold indent-2 border-b-2">
      {item.owner}
    </div>
    <div className="w-full md:grid md:grid-cols-2" style={{"gridTemplateColumns":"4fr 1fr"}}>
      <div className="w-full flex flex-row">
        <div className="w-[120px] h-full px-2">
          <img
            alt="item"
            src={item.image[0]}
            className="block align-middle"
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-1 h-1/2" style={{minHeight: "48px"}}>{item.title}</div>
          <div className="flex flex-row text-lg text-[#030981] h-3/10 relative"> 
            <div className="text-left font-semibold">
              {"Giá: "}
              {item.price}
            </div>
          </div>
          <div className="text-sm text-[#1488D8] font-semibold h-2/10">
            {"Sản phẩm này đã ngừng bán."}
          </div>
        </div>  
      </div>
      {/* <div className="w-full relative justify-center hidden md:flex md:flex-col">
        <button 
          name = "comment"
          onClick={searching(item.name)}
          className='bg-[#E95959] text-white right-0 w-[100px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1'>Sản phẩm tương tự</button>
      </div> */}
    </div>
    {/* <div className="w-full flex align-middle justify-end md:hidden">
      <button 
        name = "comment"
        onClick={searching(item.name)}
        className='bg-[#E95959] text-white right-0 max-w-[160px] rounded-md font-medium my-1 mx-auto py-1 px-2'>Sản phẩm tương tự</button>
    </div> */}
  </div>
);
}; export default CompleteItem;