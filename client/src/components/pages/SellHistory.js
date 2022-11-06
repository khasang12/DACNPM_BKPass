import React, {useState} from "react"
import {items} from "../layouts/boughtItemList"
import {Item1} from "../layouts/boughtItemList"
import {Item2} from "../layouts/boughtItemList"
import Buttons from "../layouts/boughtItemList";
import Button from "react-bootstrap/esm/Button";

export default function BuyHistory() {
    const [item, setItem] = useState(items);

    const menuItems = items.map((item) => item.state);

    const filterItem = (cur) => {
        const newItem = items.filter((val) => {
        return val.state === cur;
        });
        setItem(newItem);
    };
    return (
        <>
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
                <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2`}
                    onClick={filterItem("1")}
                >
                    Đang đánh dấu
                </button>
                <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2`}
                    onClick={filterItem("2")}
                >
                    Đã mua
                </button>
            </div>
        </div>
        <div className="w-full flex flex-col items-center" style={{"maxWidth":"682px"}}>
            <menuItems item={item}/>
        </div>
        </>
    )
}
