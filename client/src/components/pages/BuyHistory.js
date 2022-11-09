import React, {useState, useEffect} from "react"

import items from "../layouts/data";
import Item from "../layouts/boughtItemList";
import FilterButton from "../layouts/filterbutton";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

// export default function BuyHistory() {
//     const [activeFilter, setActiveFilter] = useState("bought");
//     const MouseEvent = (e) => {
//         e.preventDefault();
//         const el = e.target;
//         setActiveFilter(el);
//     }

//     // const posts = useMany<{
//     //     id: number,
//     //     state: string,
//     // }>({
//     //     resource: items,
//     //     ids: Array.from(Array(10).keys()).slice(1),
//     // }).data;

//   const filters = ["marking", "bought"];
//     return (
//         <>
//         <div className="w-full flex flex-col items-center">
//             <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
//             {filters.map((filter, index) => {
//                 return (
//                     <FilterButton
//                     key={index}
//                     title={filter}
//                     isActive={filter === activeFilter}
//                     onClick={MouseEvent}
//                     />
//                 );
//                 })}
//             </div>
//         </div>
//         <div className="w-full flex flex-col items-center" style={{"maxWidth":"682px"}}>
//             {items
//             .filter((item) => item.state.includes(activeFilter))
//             .map((item) => {
//                 return <Item item={item} key={item.id} state={item.state}/>;
//               })}
//         </div>
//         </>
//     )
// }
const buttons = [
    {
        name: "Đang đánh dấu",
        value: "marking"
    },
    {
        name: "Đã bán",
        value: "bought"
    },
];
function getList() {
    const itemList = items;
    return itemList;
}
function filterList(itemState) {
    let filteredList = getList().filter(item => item.state === itemState);
    return filteredList;
}
const BuyHistory = () => {
    // const [item, setItem] = useState(items);
    // const itemList = [...new Set(items.map((Val) => Val.state))];
    // const filterItem = (cur) => {
    //     return {items.filter(newVal => newVal.state === cur)};
    // };
    // return (
    //     <div className="w-full flex flex-col items-center">
    //         <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
    //             <FilterButton
    //             filterItem={filterItem}
    //             itemList={itemList}
    //             />
    //         </div>
    //         <div className="w-full flex flex-col items-center" style={{"maxWidth":"682px"}}>
    //             <Item item={item}/>
    //         </div>
    //     </div>
    // )
    const list = filterList("marking");
    console.log(list);
    const [filteredList, setFilteredList] = useState(list);
    function handleList(e) {
        let typeItem = e.target.value;
        setFilteredList(filterList(typeItem));
    }
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
                {buttons &&
                buttons.map((type, index) => (
                <>
                    <button value={type.value} onClick={handleList}>
                    {type.name}
                    </button>
                </>
                ))}
            </div>
            <div className="w-full flex flex-col items-center" style={{"maxWidth":"682px"}}>
                {/* {list && */}
                {filteredList.map( (item) => {
                    return <Item item={item} key={item.id} />;
                })}
            </div>
        </div>
    )
}
export default BuyHistory;