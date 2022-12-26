import ReactStars from "react-rating-stars-component";
import {useState, useEffect} from "react";
import nocomment from "../../assets/img/nocomment.png"
import { Info } from "./Info";
import {useParams} from "react-router-dom";
import { getUserDetail, getUserFeedback } from "../../api/userApi";
import {timeAgo} from "../../service/timeAgo"

export function Comment() {
    const {userId} = useParams();
    const [saler, setSaler] = useState(null);
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        getUserDetail(userId, (data) => {
            setSaler(data)
        });
        getUserFeedback(userId, (data) => {
            setFeedback(data)
        })
    }, [userId])
    if (saler) {
        return (
            <div>
                <Info saler={saler}/>
                <div className="flex p-3 lg:left-80">
                    <button className="flex flex-col md:flex-row bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tất cả đánh giá
                    </button>
                </div>
                <ul>
                    {feedback.map(item => {
                        if (!item.isDeleted) {
                            return (<li key={item._id}>
                                <div className="flex justify-center p-1.5">
                                    <div className="flex lg:flex-none flex-col md:flex-row md:w-2/3 rounded-lg bg-gray shadow-lg p-5 pb-2">
                                        <img
                                            src={item.authorImage}
                                            className="rounded-full w-12 h-12 mt-4"
                                            alt="Avatar"
                                        />
                                        <div className="p-6 flex flex-col justify-start bg-gray">
                                            <a href={`./${item.authorId}`} className="text-gray-900 text-xl font-medium mb-2">{item.authorName}</a>
                                            <ReactStars className="flex"
                                                count={5}
                                                value={Math.round(item.numStarsRate)}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="text-gray-700 text-base mb-4 whitespace-pre-line">
                                                {item.content}
                                            </p>
                                            <p className="text-gray-600 text-xs">{timeAgo(Date.parse(item.createAt))}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                        else {
                            return (<li key={item._id}>
                                <div className="flex justify-center p-1.5">
                                    <div className="flex lg:flex-none flex-col md:flex-row md:w-2/3 rounded-lg bg-gray shadow-lg p-5 pb-2">
                                        <img
                                            src={item.authorImage}
                                            className="rounded-full w-12 h-16 pt-4"
                                            alt="Avatar"
                                        />
                                        <div className="p-6 flex flex-col justify-start bg-gray">
                                            <p className="italic">
                                                Phản hồi này đã bị xóa
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                    })}
                </ul>
            </div>
        )
    }
    return (
        <div className="flex justify-center">
            <img src={nocomment}></img>
            <h1>Chưa có đánh giá</h1>
        </div>
    )
}