import React from "react"
import ItemsList from "../layouts/boughtItemList"

export default function BuyHistory() {
    return(
        <div className='w-full flex flex-col mt-2 items-center'>
            <ItemsList />
        </div>
    )
}