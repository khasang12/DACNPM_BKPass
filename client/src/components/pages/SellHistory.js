import React, { useState } from "react";
import ItemsList from "../layouts/soldItemList";

export default function SellHistory() {
  return (
    <div className="w-full flex flex-col mt-2 items-center">
      <ul className="flex flex-row flex-wrap justify-start mt-2 mb-4 gap-2">
        <li className="flex-auto">
          <input
            type="radio"
            id="status-new"
            name="item_status"
            value="Đang bán"
            className="hidden peer"
            required
          />
          <label
            htmlFor="status-new"
            className="inline-flex justify-center items-center p-2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full">Đang bán</div>
            </div>
          </label>
        </li>
        <li className="flex-auto">
          <input
            type="radio"
            id="status-old"
            name="item_status"
            value="Đã bán"
            className="hidden peer"
          />
          <label
            htmlFor="status-old"
            className="inline-flex justify-center items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full">Đã bán</div>
            </div>
          </label>
        </li>
      </ul>

      <div className="List_Wrapper" style={{ maxWidth: 700 }}>
        <ItemsList />
      </div>
    </div>
  );
}
