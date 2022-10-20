import {timeAgo} from '../../service/timeAgo'

export default function Item({item}) {
    return (
        <div className="flex flex-col w-72 rounded m-2 border-2 rounded-2xl">
            <div className="w-full h-72">
                <img alt="item"
                    src={item.image}
                    className="object-contain rounded-t-2xl"
                />
            </div>
            <div className="flex flex-col p-4">
                <div className="mb-1 text-xl font-bold">
                    {item.name}
                </div>
                <div className="text-lg text-[#030981] font-semibold">
                    {item.cost} VNĐ
                </div>
                <div className="text-sm text-[#1488D8] font-semibold">
                    {timeAgo(item.time)}
                </div>
            </div>
        </div>
    )
}