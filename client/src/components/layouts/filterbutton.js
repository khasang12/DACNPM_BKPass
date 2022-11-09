import React from "react";

const FilterButton = ({ filterItem, itemList }) => {
  return (
    <div className="w-full flex flex-col items-center">
        {itemList.map((Val, id) => {
          return (
            <button 
            className="flex flex-row flex-wrap justify-start mt-2 mb-4"
            onClick={() => filterItem(Val)}
            key={id}>
              {Val}
            </button>
          );
        })}
    </div>
  )
}; 
export default FilterButton;