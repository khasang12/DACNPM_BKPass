import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemsList from '../layouts/ItemList';

export default function SearchPage() {
    const [isSearchByName, setIsSearchByName] = useState(true);
    const [urlParams, setURLParams] = useSearchParams();
    const btnActiveStyle = 'bg-[#1488D8] text-white';
    const btnInactiveStyle = 'bg-white text-[#1488D8]';

    const onClickSearchByNameBtn = (e) => {
        e.preventDefault();
        setIsSearchByName(true);
    }

    const onClickSearchByTagBtn = (e) => {
        e.preventDefault();
        setIsSearchByName(false);
    }
    return (
        <div className='w-full flex flex-col mt-2 items-center'>
            <div className='w-11/12 flex flex-col items-start'>
                <div className='text-xl w-100'>
                    Kết quả tìm kiếm cho :&nbsp; <span className='text-[#030391]'>{urlParams.get("s")}</span>
                </div>
                <div className="flex flex-row flex-wrap justify-start mt-2 mb-4">
                    <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${isSearchByName? btnActiveStyle : btnInactiveStyle}`}
                        onClick={onClickSearchByNameBtn}
                    >
                        Tìm kiếm theo tên
                    </button>
                    <button className={`rounded-full pl-4 pr-4 pt-2 pb-2 border-2 m-2 ${!isSearchByName? btnActiveStyle : btnInactiveStyle}`}
                        onClick={onClickSearchByTagBtn}
                    >
                        Tìm kiếm theo nhãn
                    </button>
                </div>
            </div>
            <ItemsList/>
        </div>
    )
}