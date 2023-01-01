import React, { useState, useEffect, useContext } from "react";
import items from "../layouts/data";
import SellingItem from "../layouts/soldItemList";
import TakeOffItem from "../layouts/take-offItem";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { getListSellingItem } from "../../api/itemsApi";

const SellHistory = () => {
  const userLogin = localStorage.getItem("bkpass-user");
  const navigate = useNavigate();
  const [filteredList, setFilteredList] = useState();
  const [isSelling, setIsSelling] = useState(true);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    filterList(isSelling);
  }, [isSelling]);
  useEffect(() => {
    !userLogin && navigate("/403");
  }, []);

  async function filterList(itemState) {
    await getListSellingItem(
      JSON.parse(userLogin)["_id"],
      itemState,
      (items) => {
        setFilteredList(items);
      }
    );
  }

  function handleList(e) {
    console.log(e.target.value);
    if (e.target.value === "sold") {
      if (isSelling === true || !isSelling) {
        setIsSelling(false);
      }
    } else if (e.target.value === "selling") {
      if (isSelling === false || !isSelling) {
        setIsSelling(true);
      } else return;
    }
    setCurrentItems(filteredList.slice(0, 9));
    setPageCount(Math.ceil(filteredList.length / itemsPerPage));
  }
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    filteredList && setCurrentItems(filteredList.slice(itemOffset, endOffset));
    filteredList && setPageCount(Math.ceil(filteredList.length / itemsPerPage));
  }, [filteredList, itemOffset, itemsPerPage]);

  function handlePageClick(e) {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  }
  function ListRender() {
<<<<<<< HEAD
    // console.log(currentItems);
    return isSold
      ? currentItems.map((item) => {
          return <TakeOffItem item={item} key={item.id} />;
        })
      : currentItems.map((item) => {
          return <SellingItem item={item} key={item.id} />;
        });
=======
    if (currentItems)
      return isSelling
        ? currentItems.map((item) => {
            // console.log(item);
            return <SellingItem item={item} key={item.id} />;
          })
        : currentItems.map((item) => {
            // console.log(item);
            return <TakeOffItem item={item} key={item.id} />;
          });
    else
      return filteredList.map((item) => {
        // console.log(item);
        return <SellingItem item={item} key={item.id} />;
      });
>>>>>>> c217d2ec992a68480619fe35791e01bcc591440d
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[700px] w-full flex-wrap justify-start bg-[#1488D8] mt-2 mb-2 p-2">
        <button
          className="w-1/2 text-[#fff] self-stretch box-content focus:underline peer-checked:underline underline-offset-4"
          value="selling"
          onClick={handleList}
        >
          Đang rao bán
        </button>
        <button
          className="w-1/2 text-[#fff] self-stretch box-content focus:underline peer-checked:underline underline-offset-4"
          value="sold"
          onClick={handleList}
        >
          Đã ngừng bán
        </button>
      </div>
      <div className="w-full max-w-[700px] flex flex-col items-center">
        {filteredList && <ListRender />}
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
export default SellHistory;
