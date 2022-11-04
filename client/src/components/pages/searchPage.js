import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemsList from '../layouts/ItemList';
import SalerList from "../layouts/salerList";

export default function SearchPage() {
    const [searchMode, setSearchMode] = useState(1);
    const [urlParams, setURLParams] = useSearchParams();
    const btnActiveStyle = 'bg-[#1488D8] text-white';
    const btnInactiveStyle = 'bg-white text-[#1488D8]';

    const onClickSearchByNameBtn = (e) => {
        e.preventDefault();
        setSearchMode(1);
    }

    const onClickSearchByTagBtn = (e) => {
        e.preventDefault();
        setSearchMode(2);
    }

    const onClickSearchSalerBtn = (e) => {
        e.preventDefault();
        setSearchMode(3);
    }

    const onChangeSortItem = (e) => {
        console.log(e.target.value);
    }

    const onChangeSortSaler = (e) => {
        console.log(e.target.value);
    }

    const onChangeProductState = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='w-full flex flex-col mt-2 items-center'>
            <div className='w-11/12 flex flex-col items-start'>
                <div className='text-xl w-100'>
                    Kết quả tìm kiếm cho :&nbsp; <span className='text-[#030391]'>{urlParams.get("s")}</span>
                </div>
                <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
                    <button className={`rounded pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${(searchMode === 1)? btnActiveStyle : btnInactiveStyle}`}
                        onClick={onClickSearchByNameBtn}
                    >
                        Tìm theo tên
                    </button>
                    <button className={`rounded pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${(searchMode === 2)? btnActiveStyle : btnInactiveStyle}`}
                        onClick={onClickSearchByTagBtn}
                    >
                        Tìm theo nhãn
                    </button>
                    <button className={`rounded pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${(searchMode === 3)? btnActiveStyle : btnInactiveStyle}`}
                        onClick={onClickSearchSalerBtn}
                    >
                        Tìm người bán
                    </button>
                </div>
                {
                    (searchMode === 3)? (
                        <div className="w-full flex flex-row flex-wrap justify-start mt-2 mb-4">
                            <div className="flex flex-row mr-16 mb-6">
                                <div className="w-28 align-middle p-1">
                                    Sắp xếp theo:
                                </div>
                                <div className="w-32">
                                    <select onChange={onChangeSortSaler}
                                        defaultValue="rate"
                                        className="border-[#1488d8] border-2 py-1 px-4 rounded appearance-none"
                                    >
                                        <option value="rate">
                                            Đánh giá
                                        </option>
                                        <option value="currNum">
                                            Số lượng đang bán
                                        </option>
                                        <option value="saledNum">
                                            Số lượng đã bán
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-row flex-wrap justify-start mt-2 mb-4">
                            <div className="w-48 flex flex-row mr-16 mb-6">
                                <div className="w-20 align-middle p-1">
                                    Sắp xếp:
                                </div>
                                <div className="w-28">
                                    <select onChange={onChangeSortItem}
                                        defaultValue="all"
                                        className="border-[#1488d8] border-2 py-1 px-4 rounded appearance-none"
                                    >
                                        <option value="time">
                                            Mới nhất
                                        </option>
                                        <option value="priceDown">
                                            Giá giảm dần
                                        </option>
                                        <option value="priceUp">
                                            Giá tăng dần
                                        </option>
                                        <option value="all">
                                            Tất cả
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-24 p-1">
                                    Tình trạng:
                                </div>
                                <div className="w-28">
                                    <select onChange={onChangeProductState}
                                        defaultValue="all"
                                        className="border-[#1488d8] after:border-[#1488d8] border-2 py-1 px-4 rounded appearance-none"
                                    >
                                        <option value="new">
                                            Mới
                                        </option>
                                        <option value="used">
                                            Cũ
                                        </option>
                                        <option value="all">
                                            Tất cả
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                (searchMode === 3)? (<SalerList/>) : (<ItemsList/>)
            }
        </div>
    )
}