import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
function Saler ({saler}) {
    const navigate = useNavigate();
    return (
        <button className="flex flex-row w-11/12 md:w-3/4 rounded m-2 p-4 border-2 rounded-2xl hover:border-2 hover:border-[#1488d8]" 
            onClick={
                (e) => {
                    e.preventDefault();
                    window.location.assign(`./user/${saler._id}`);
                }
            }
            tabIndex={-1}
        >
            <div className="w-28 h-28 rounded-full border-2">
                <img alt="saler"
                    src={saler.image}
                    className="object-fit w-28 h-28 rounded-full"
                />
            </div>
            <div className="flex flex-col items-start p-4">
                <div className="mb-1 text-xl font-bold">
                    {saler.name}
                </div>
                <div className="mb-1 text-base font-normal">
                    {saler.description? (
                        <p>{saler.description}</p>
                    ) : (
                        <i>This saler have no description</i>
                    )}
                </div>
                <div className="mb-1 text-base font-normal flex-wrap flex flex-row items-centers">
                    <div className="mr-6">
                        Đã bán: {saler.numSaledItems? saler.numSaledItems:0}
                    </div>
                    <div className="mr-6">
                        Đang bán: {saler.numSellingItems? saler.numSellingItems:0}
                    </div>
                    <div className="flex flex-row">
                        <div>
                            Đánh giá: {saler.numRate? saler.averageStarsRate: 0}
                        </div>
                        <ReactStars 
                            class="flex"
                            count={5}
                            value={Math.round(saler.averageStarsRate)}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                        <div>
                            ({saler.numRate} đánh giá)
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default function SalerList ({salersList, currPage, navigate}) {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-row flex-wrap justify-center w-full">
                {salersList.map(
                    (saler) => {
                        return <Saler saler={saler} key={saler._id} />
                    }
                )}
            </div>
            <div className="mt-6">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <button className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={(e) => navigate(e, -1)}
                        >
                            <span className="sr-only">Previous</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{currPage}</button>
                    </li>
                    <li>
                        <button className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={(e) => navigate(e, 1)}
                        >
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}