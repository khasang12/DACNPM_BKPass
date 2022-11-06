import React, { useState } from "react";
import {timeAgo} from '../../service/timeAgo'
import ItemsList from "./soldItemList";
//import {seller} from '../../components/profile'
export const items = [
    {
        id:1,
        state: "1",
        owner: "Nguyễn Văn A",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Set sách mới nhú dành cho các bé Khoa Máy tính",
        cost : "80.000",
        time : new Date() - 1000000
    },
    {
        id:2,
        state: "2",
        owner: "Nguyễn Văn A",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        time : new Date() - 4000000
    },
    {
        id:3,
        state: "1",
        owner: "Nguyễn Văn A",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        time : new Date() - 6000000
    },
    {
        id:4,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        time : new Date() - 10000000
    },
    {
        id:5,
        owner: "Nguyễn Văn A",
        state: "2",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 20000000
    },
    {
        id:6,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 40000000
    },
    {
        id:7,
        state: "2",
        owner: "Nguyễn Văn A",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 80000000
    },
    {
        id:8,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 100000000
    },
    {
        id:9,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 150000000
    },
    {
        id:10,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 200000000
    },
    {
        id:11,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 200000000
    },
    {
        id:12,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 200000000
    },
    {
        id:13,
        owner: "Nguyễn Văn A",
        state: "1",
        image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
        name : "Item 1",
        cost : "300.000",
        // state: ""
        time : new Date() - 250000000
    },
];
const Item1 = ({item}) => {
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
                                    Đánh giá
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
                                    Đã mua lúc {timeAgo(item.time)}
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
                                    Mua lại
                                </button>
                            </div>
                        </div>
                    </>
                );
            })};   
        </div>
    )
}; export default Item1;

export const Item2 = ({item}) => {
    return (
        <div className="flex flex-col h-200 m-3 border-1 border-blue-200" style={{"maxWidth":"682px"}}>
            {items.map((item) =>
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
                        Liên hệ
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
                        "paddingInline":"2px",
                        "minWidth":"80px",
                        "maxWidth":"100px",
                        "borderRadius": 4,
                        "textAlign":"center"}}>
                        Huỷ đánh dấu
                    </button>
                </div>
            </div>
        </>
            )}
            
        </div>
    );
}

export function Buttons ({filterItem}) {
    // const [isA, setIsA] = useState(false);
    // const onClickA = (e) => {
    //     e.preventDefault();
    //     setIsA(true);
    // }

    // const onClickB = (e) => {
    //     e.preventDefault();
    //     setIsA(false);
    // }
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-row w-full items-center justify-start mt-2 mb-4 border-2" 
            style={{"maxWidth":"682px", 
            "backgroundColor":"#1488D8", 
            "height":"80px",
            }}>
            <button className={`rounded-2 hover:text-[#151515] w-1/2 h-full border-2 `}
                onClick={filterItem("1")}
            >
                Đang đánh dấu
            </button>
            <button className={`rounded-2 hover:text-[#1488D8] w-1/2 h-full border-2`}
                onClick={filterItem("2")}
            >
                Đã mua
            </button>
            </div>
        </div>
    )
}; 
// export default ItemsList({items}) {
//     return(
//         <div className="w-full flex flex-col items-center">
//             <div className="flex flex-col flex-wrap justify-center w-full">
//                 {items.map((item) => {
//                 return <Item1 item={item} key={item.id} />;
//                 })}
//             </div>
//         </div>
        
//     );
// };
