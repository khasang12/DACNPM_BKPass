import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteItem } from "../../api/itemApi";

const TakeOffItem = ({ item }) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    const ev = e.target.name;
    if (ev === "delete") {
      deleteItem(
        JSON.parse(localStorage.getItem("bkpass-user"))["token"],
        item._id,
        () => {
          window.location.reload();
        }
      );
    }
  }
  return (
    <div className="max-w-[700px] w-full flex flex-col border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
      <div
        className="w-full md:grid md:grid-cols-2"
        style={{ gridTemplateColumns: "4fr 1fr" }}
      >
        <div className="w-full flex flex-row">
          <div className="w-[120px] h-full px-2">
            <img
              alt="item"
              src={item.image[0]}
              className="block align-middle"
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-1 h-1/2" style={{ minHeight: "48px" }}>
              {item.title}
            </div>

            <div className="flex flex-row text-lg text-[#030981] h-1/2 relative">
              <div className="text-left font-semibold">
                {"Giá: "}
                {item.price}
              </div>
            </div>
            <div className="text-sm text-[#1488D8] font-semibold h-2/10">
              {"Sản phẩm này đã ngừng bán."}
            </div>
            <div className="mb-1 h-1/2" style={{ minHeight: "48px" }}>
              <button
                className="mt-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={"#deleteModal" + item._id}
              >
                Xóa sản phẩm
              </button>
            </div>
          </div>
          <div className="flex flex-row relative">
            <div className="text-lg text-[#030981] font-italic h-2/10 bottom-0"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex align-middle justify-end md:hidden">
        <button
          name="delete"
          data-modal-toggle="delete-modal"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#delete-modal"
          className="flex-auto bg-red-500 hover:bg-gray-700 text-white border border-blue-700 rounded h-10"
        >
          <span className="md:hidden">
            <FontAwesomeIcon icon={faTrashCan} color="#fff"></FontAwesomeIcon>
          </span>

          <p className="hidden md:block">Xóa mặt hàng</p>
        </button>
        {/* Delete-Item Modal */}
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="delete-modal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="delete-modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Xác nhận xóa mặt hàng "{item.name}" ?
                  </h3>
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Quay lại
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="submit"
                    className="text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <deleteModel/> */}

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={"deleteModal" + item._id}
        tabIndex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body relative py-5 items-center justify-center text-center font-semibold">
              Xác nhận xóa sản phẩm {item.title}?
            </div>
            <div className="modal-footer flex flex-row items-center justify-center">
              <button
                type="button"
                className="bg-white text-bleck right-0 w-[120px] rounded-md border-2 font-medium my-1 md:mx-8 mx-0 scale-90"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 md:mx-8 mx-0"
                onClick={handleSubmit}
                name="delete"
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; export default TakeOffItem;