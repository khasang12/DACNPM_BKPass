import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
function Saler ({saler}) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row w-11/12 md:w-3/4 rounded m-2 p-4 border-2 rounded-2xl hover:border-2 hover:border-[#1488d8]" onClick={navigate("/comment")}>
            <div className="w-28 h-28 rounded-full border-2">
                <img alt="saler"
                    src={saler.image}
                    className="object-fit w-28 h-28 rounded-full"
                />
            </div>
            <div className="flex flex-col p-4">
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
                        Đã bán: {saler.saledProductNum}
                    </div>
                    <div className="mr-6">
                        Đang bán: {saler.currentProductNum}
                    </div>
                    <div className="flex flex-row">
                        <div>
                            Đánh giá: {saler.rate}
                        </div>
                        <ReactStars 
                            class="flex"
                            count={5}
                            value={Math.round(saler.rate)}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                        <div>
                            ({saler.numRatesTime} đánh giá)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SalerList () {
    const salers = [
        {
            id: 1,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 1",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30,
            description : "Welcome to my shop. Contact me on Zalo : **********"
        },
        {
            id: 2,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 2",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 3,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 3",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 4,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 4",
            saledProductNum: 4,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 5,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 5",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 6,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 6",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 7,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 7",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 8,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 8",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 9,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 9",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
        {
            id: 10,
            image: "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name: "Saler 10",
            saledProductNum: 3,
            currentProductNum: 8,
            rate : 4.5,
            numRatesTime : 30
        },
    ];
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-row flex-wrap justify-center w-full">
                {salers.map(
                    (saler) => {
                        return <Saler saler={saler} key={saler.id} />
                    }
                )}
            </div>
            <div className="mt-6">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <button className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
                    </li>
                    <li>
                        <button aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</button>
                    </li>
                    <li>
                        <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</button>
                    </li>
                    <li>
                        <button className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}