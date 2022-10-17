import React, { useState } from "react";

export default function AddItemForm() {
  const [values, setValues] = useState({
    category: "",
    item_status: "",
    price: 0,
    header: "",
    desc: "",
    addr: "",
    img: "",
  });
  return (
    <div class="flex bg-gray-200 p-4">
      <div class="flex-initial columns-4 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Short
      </div>
      <div class="flex-1 text-gray-700 bg-white px-4 py-2 m-2">
        <form action="" className="w-full max-w-lg">
          <div class="inline-block relative w-64">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Danh mục tin đăng
            </label>
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Sách</option>
              <option>Thiết bị số</option>
              <option>Vật dụng khác</option>
            </select>
          </div>
          <h1>Thông tin chi tiết</h1>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
            Identification
          </h3>
          <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-license"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Driver License{" "}
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-id"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  State ID
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-millitary"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-millitary"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Millitary
                </label>
              </div>
            </li>
            <li class="w-full dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-passport"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Passport
                </label>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
