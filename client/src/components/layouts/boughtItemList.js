import React, { useState } from "react";
import {timeAgo} from '../../service/timeAgo'
import items from "./data"

const Item = ({item}, {state}) => {
    return (
        <div className="flex flex-col h-200 m-3 border-1 border-blue-200" style={{"maxWidth":"682px"}}>
            {items.map((item) => {
                return(
                    <>
                        <div className="flex flex-row w-130 h-4" style={{"position":"relative"}}>
                            <div className="mb-1 text-black font-bold w-155 h-8" style={{"textIndent":"12px"}}>
                                {item.owner}
                            </div>
                            <button className="bg-[#1488D8] text-white font-semibold" 
                            style={{"position":"absolute",
                                "right":"0",
                                "minWidth":"100px",
                                "borderRadius": 4,
                                "textAlign":"center"}}
                                >
                                    {state === "marking"? "Đánh giá":"Liên hệ"}
                            </button>
                        </div>  
                        <div className="flex w-130 h-50">
                            <div className="block w-1/5 h-full p-3">
                                <img alt="item"
                                    src={item.image}
                                    className="block w-120 h-120 content--blur align-middle"
                                />
                            </div>
                            <div className="flex-col w-1/2" style={{"minWidth":"200px"}}>
                                <div className="mb-1 h-1/2">
                                    {item.name}
                                </div>
                                <div className="text-lg text-[#030981] font-semibold h-3/10">
                                    Giá:
                                </div>
                                <div className="text-sm text-[#1488D8] font-semibold h-2/10">
                                    {state === "1"? "Đã mua lúc ": "Đăng bán lúc "}{timeAgo(item.time)}
                                </div>
                            </div>
                            <div className="flex-col w-3/10" style={{"minWidth":"120px", "textAlign":"right"}}>
                                <div className="mb-1 right-0 font-italic h-1/2" style={{"textAlign":"right"}}>
                                    {/* x{item.count} */}x1
                                </div>
                                <div className="text-lg text-[#030981] font-italic h-3/10">
                                    {item.cost} VNĐ
                                </div>
                            </div>
                            <div className="flex-col w-2/10 p-3" style={{"minWidth":"120px", "position":"relative"}}>
                                <button className="bg-[#E95959] text-white font-semibold" 
                                style={{"position":"absolute", "bottom":"0", "right":"0",
                                    "minWidth":"100px",
                                    "borderRadius": 4,
                                    "textAlign":"center"}}>
                                    {state === "marking"? "Mua lại":"Huỷ đánh dấu"}
                                </button>
                            </div>
                        </div>
                    </>
                );
            })};   
        </div>
    )
}; export default Item;

// export const Item2 = ({item}) => {
//     return (
//         <div className="flex flex-col h-200 m-3 border-1 border-blue-200" style={{"maxWidth":"682px"}}>
//             {items.map((item) =>
//             <>
//             <div className="flex flex-row w-130 h-4" style={{"position":"relative"}}>
//                 <div className="mb-1 text-black font-bold w-155 h-8" style={{"textIndent":"12px"}}>
//                     {item.owner}
//                 </div>
//                 <button className="bg-[#1488D8] text-white font-semibold" 
//                 style={{"position":"absolute",
//                     "right":"0",
//                     "minWidth":"100px",
//                     "borderRadius": 4,
//                     "textAlign":"center"}}
//                     >
//                         Liên hệ
//                 </button>
//             </div>  
//             <div className="flex w-130 h-50">
//                 <div className="block w-1/5 h-full p-3">
//                     <img alt="item"
//                         src={item.image}
//                         className="block w-120 h-120 content--blur align-middle"
//                     />
//                 </div>
//                 <div className="flex-col w-1/2" style={{"minWidth":"200px"}}>
//                     <div className="mb-1 h-1/2">
//                         {item.name}
//                     </div>
//                     <div className="text-lg text-[#030981] font-semibold h-3/10">
//                         Giá:
//                     </div>
//                 </div>
//                 <div className="flex-col w-3/10" style={{"minWidth":"120px", "textAlign":"right"}}>
//                     <div className="mb-1 right-0 font-italic h-1/2" style={{"textAlign":"right"}}>
//                         {/* x{item.count} */}x1
//                     </div>
//                     <div className="text-lg text-[#030981] font-italic h-3/10">
//                         {item.cost} VNĐ
//                     </div>
//                 </div>
//                 <div className="flex-col w-2/10 p-3" style={{"minWidth":"120px", "position":"relative"}}>
//                     <button className="bg-[#E95959] text-white font-semibold" 
//                     style={{"position":"absolute", "bottom":"0", "right":"0",
//                         "paddingInline":"2px",
//                         "minWidth":"80px",
//                         "maxWidth":"100px",
//                         "borderRadius": 4,
//                         "textAlign":"center"}}>
//                         Huỷ đánh dấu
//                     </button>
//                 </div>
//             </div>
//         </>
//             )}
            
//         </div>
//     );
// }