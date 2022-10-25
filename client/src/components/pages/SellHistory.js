import React from "react"
import ItemsList from "../layouts/soldItemList"

export default function SellHistory() {
    return(
        <div className='w-full flex flex-col mt-2 items-center'>
            <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
                    <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2`}
                        // onClick={onClickSearchByNameBtn}
                    >
                        Đang rao bán
                    </button>
                    <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2`}
                        // onClick={onClickSearchByTagBtn}
                    >
                        Đã bán
                    </button>
            </div>
            <ItemsList />
        </div>
    )
}