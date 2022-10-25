import comment from "./comment.json"
import ReactStars from "react-rating-stars-component";
import React from "react";
import avatar from "../../assets/img/avatar.png"
import nocomment from "../../assets/img/nocomment.png"
import { Info } from "./Info";
export function Comment() {
    if (comment.length) {
        return (
            <div>
                <Info />
                <div class="flex p-3 left-80">
                    <button class="flex flex-col md:flex-row bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tất cả đánh giá
                    </button>
                </div>
                <ul>
                    {comment.map(item => <li>
                        <div class="flex justify-center p-1.5">
                            <div class="flex flex-col md:flex-row md:w-2/3 rounded-lg bg-gray shadow-lg p-1.5 ">
                                <img
                                    src={avatar}
                                    class="rounded-full w-1/6 h/6 md:w-16 md:h-16 pt-4"
                                    alt="Avatar"
                                />
                                <div class="p-6 flex flex-col justify-start bg-gray">
                                    <a href="#" class="text-gray-900 text-xl font-medium mb-2">{item.name}</a>
                                    <ReactStars class="flex"
                                        count={5}
                                        value={item.star}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p class="text-gray-700 text-base mb-4">
                                        {item.comment}
                                    </p>
                                    <p class="text-gray-600 text-xs">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>

        )
    }
    return (
        <div class="flex justify-center">
            <img src={nocomment}></img>
            <h1>Chưa có đánh giá</h1>
        </div>
    )
}