import React, { useState, useEffect} from "react";
import items from "../layouts/data";
import BoughtItem from "../layouts/boughtItem";
import CompleteItem from "../layouts/completeItem";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function getList() {
  const itemList = items;
  return itemList;
}
function filterList(itemState) {
  let filteredList = getList().filter((item) => item.isSelling === itemState);
  return filteredList;
}
const BuyHistory = () => {
  const userLogin = localStorage.getItem("bkpass-user");
  const navigate = useNavigate();
  useEffect(() => {
    !userLogin && navigate("/403");
  }, []);

  const list = filterList(true);
  const [filteredList, setFilteredList] = useState(list);
  const [isDone, setIsDone] = useState(false);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState(list);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  
  function handleList(e) {
    let typeitem = e.target.value === "on" ? true : false;
    setFilteredList(filterList(typeitem));
    typeitem === false ? setIsDone(true) : setIsDone(false);
    setCurrentItems(filterList(typeitem).slice(0, 9));
    setPageCount(Math.ceil(filterList(typeitem).length / itemsPerPage));
  }
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  function handlePageClick(e) {
    const newOffset = e.selected * itemsPerPage % items.length;
    // console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  function ListRender() {
    return(
      isDone?
        currentItems.map((item) => {
          // console.log(item);
          return <CompleteItem item={item} key={item.id} />;
        }):
        currentItems.map((item) => {
          // console.log(item);
          return <BoughtItem item={item} key={item.id} />;
        })
    );
  }
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[700px] w-full flex-wrap justify-start bg-[#1488D8] mt-2 mb-2 p-2">
          <button className="w-1/2 text-[#fff] self-stretch box-content focus:underline peer-checked:underline underline-offset-4"
          value="on"
          onClick={handleList}>
            Đang trưng bày
          </button>
          <button className="w-1/2 text-[#fff] self-stretch box-content focus:underline peer-checked:underline underline-offset-4"
          value="done"
          onClick={handleList}>
            Đã có người mua
          </button>
      </div>
      <div className="w-full max-w-[700px] flex flex-col items-center">
        <ListRender />
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex flex-row md:items-center p-2 m-2"
        nextClassName="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        previousClassName="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        pageClassName="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeClassName="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      />
      </div>
    </div>
  );
};
export default BuyHistory;
