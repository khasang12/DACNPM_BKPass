import {timeAgo} from '../../service/timeAgo';
import { useNavigate } from 'react-router-dom';
import {formatValue} from "react-currency-input-field";

export default function Item({item}) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col item-center w-72 h-88 rounded m-2 border-2 rounded-md hover:border-2 hover:border-[#1488d8]" onClick={()=>navigate(`/item/${item._id}`)}>
            <div className="w-68 h-60 flex flex-col item-center">
                <img alt="item"
                    src={item.image[0]}
                    className="object-contain w-68 h-60"
                />
            </div>
            <div className="flex flex-col p-4">
                <div className="mb-1 text-xl font-bold">
                    {item.title}
                </div>
                <div className="text-lg text-[#030981] font-semibold">
                    {formatValue({
                        value: item.price,
                        groupSeparator: '.'
                    })} VNĐ
                </div>
                <div className="text-sm text-[#1488D8] font-semibold">
                    {timeAgo(Date.parse(item.date))}
                </div>
            </div>
        </div>
    )
}