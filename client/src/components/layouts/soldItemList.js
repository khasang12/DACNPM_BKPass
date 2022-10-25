import {timeAgo} from '../../service/timeAgo'
//import {seller} from '../../components/profile'

function Item({item}) {
    return (
        <div className="flex flex-col h-200 m-3 border-1 border-blue-200">
            <div className="flex w-130 h-50">
                <div className="block w-1/5 h-full p-3">
                    <img alt="item"
                        src={item.image}
                        className="block w-120 h-120 content--blur align-middle"
                    />
                </div>
                <div className="flex-col w-1/2" style={{"minWidth":"200px"}}>
                    <div className="mb-1 text-xl font-bold h-1/2">
                        {item.name}
                    </div>
                    <div className="text-lg text-[#030981] font-semibold h-3/10">
                        Giá:
                    </div>
                    <div className="text-sm text-[#1488D8] font-semibold h-2/10">
                        Đánh dấu đã bán gần nhất: {timeAgo(item.time)}
                    </div>
                </div>
                <div className="flex-col w-3/10" style={{"minWidth":"120px", "textAlign":"right"}}>
                    <div className="mb-1 right-0 font-italic h-1/2" style={{"textAlign":"right"}}>
                        {/* x{item.count} */}x1
                    </div>
                    <div className="text-lg text-[#030981] font-italic h-3/10">
                        {item.cost} VNĐ
                    </div>
                </div>
                <div className="flex-col w-2/10 p-3" style={{"minWidth":"120px", "position":"relative"}}>
                    <button className="bg-[#E95959] text-white font-semibold pl-3 pr-3 ml-2" style={{"position":"absolute", "bottom":"0"}}>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function ItemsList () {
    const items = [
        {
            id:1,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "30.000",
            // state: ""
            time : new Date() - 1000000
        },
        {
            id:2,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 4000000
        },
        {
            id:3,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 6000000
        },
        {
            id:4,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 10000000
        },
        {
            id:5,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 20000000
        },
        {
            id:6,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 40000000
        },
        {
            id:7,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 80000000
        },
        {
            id:8,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 100000000
        },
        {
            id:9,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 150000000
        },
        {
            id:10,
            owner: "Nguyễn Văn A",
            image : "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
            name : "Item 1",
            cost : "300.000",
            // state: ""
            time : new Date() - 200000000
        },
    ];
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col flex-wrap justify-center w-full">
                {items.map(
                    (item) => {
                        return <Item item={item} key={item.id}/>
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