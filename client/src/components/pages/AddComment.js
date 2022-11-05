import ReactStars from "react-rating-stars-component"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export function AddComment() {
    const [values, setValues] = useState({
        star: 0,
        comment: ''
    })
    const [done, setDone] = useState({ status: false, msg: "empty form" });

    const handleValidation = () => {
        const toastOptions = {
            position: "top-right",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        };
        if (done["status"] === false) {
            toast.error(done["msg"], toastOptions);
            return false;
        }
        return true;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values){
            console.log(values)
        }
    }
    const handleComment = (event) => {
        if (event.target.value) {
            setValues({
                ...values,
                comment: event.target.value
            })
        }
    }
    const rateStars = {
        size: 60,
        value: 0,
        edit: true,
        onChange: newValue => {
            setValues(
                {
                    star: newValue
                }
            )
        }
    }
    return (
        <div className="flex justify-center items-center min-h-0 bg-blue-50">
            <div className=" justify-center px-7 w-[700px] rounded-[12px] bg-white p-4">
                <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">Thêm đánh giá cho người bán</p>
                <ReactStars {...rateStars} />
                <textarea
                    className="h-40 px-3 text-sm py-1 mt-5 outline-none border-pink-300 w-full resize-none border rounded-lg placeholder:text-sm required"
                    placeholder="Vui lòng không để trống trường này!"
                    onChange={(e) => handleComment(e)}>

                </textarea>
                <div className="flex justify-end mt-2">
                    <div className="pr-6">
                        <button onClick={(e) => handleSubmit(e)}  type="submit" className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">Xác nhận</button>
                    </div>
                    <button className="h-12 w-[150px] bg-red-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-red-600">Huỷ</button>
                </div>

            </div>
        </div>

    )

}