import React, {useState, useEffect} from "react";
import CurrencyInput, {formatValue} from "react-currency-input-field";
import { ToastContainer, toast } from "react-toastify";
import { uploadItem } from "../../api/itemApi";
import axios from "axios";
export default function ModalForm ({setOpenModal, setActivated, Item}) {
    const [item, setItem] = useState(Item);

    const [imgBuffer, setImgbuffer] = useState(item.image);
    const [done, setDone] = useState(false);
    const [files, setFiles] = useState([]);

   

    // useEffect(() => {
    //     if (item.category === "") {
    //       setDone({ status: false, msg: "Vui lòng chọn danh mục" });
    //     } else if (item.imgBuffer.length === 0) {
    //       setDone({ status: false, msg: "Vui lòng thêm ít nhất 1 ảnh" });
    //     } else if (item.status === "") {
    //       setDone({
    //         status: false,
    //         msg: "Vui lòng chọn trạng thái hàng (Mới/Đã sử dụng)",
    //       });
    //     } else if (item.price.match(/^\d+(?:[,]\d+)*VND$/)) {
    //       setDone({ status: false, msg: "Giá tiền không hợp lệ" });
    //     } else if (item.header === "") {
    //       setDone({ status: false, msg: "Vui lòng điền tên mặt hàng" });
    //     } else {
    //       setDone({ status: true, msg: "validated form" });
    //     }
    //   }, [item]);

    // useEffect (() => {
    //     if (item.category === "") {
    //         setDone(false);
    //     } else if (item.imgBuffer.length === 0) {
    //         setDone(false);
    //     } else if (item.status === "") {
    //         setDone(false);
    //     } else if (item.price.match(/^\d+(?:[,]\d+)*VND$/)) {
    //         setDone(false);
    //     } else if (item.header === "") {
    //         setDone(false);
    //     } else {
    //         setDone(true);
    //     }
    // },[item]);



    async function uploadMultipleFiles(e) {
        const files = e.target.files;
        const arr = Array.from(files);
        const arrItem = arr.map((file) => URL.createObjectURL(file));
        console.log(arrItem)
        setImgbuffer(arrItem);
        setFiles(arrItem);
    }

    function pFileReader(file){
        return new Promise((resolve, reject) => {
            var fr = new FileReader();  
            fr.onloadend = () => resolve(fr.result);
            fr.onerror = reject;
            fr.readAsDataURL(file);
        });
    }

    const removeImagesFromCloud = async ([index]) => {
        try {
            const dataArr = item.image
            dataArr = dataArr.filter(item => !index.includes(item))
            console.log(dataArr)
            const newItem = {...item, image: dataArr}
            setItem(newItem)
            return newItem
        }
        catch (error) {
            console.log(error)
        }
    }

    const uploadImageToCloud = async () => {
        try {
            const dataArr = item.image
            let len = dataArr.length
            for (let i = len; i < imgBuffer.length; i++) {
            const blob = await fetch(imgBuffer[i]).then(r => r.blob());
            const image = await pFileReader(blob).then(data => data);
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "BK_Pass");
            const res = await axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, data, {});
            dataArr.push(res.data.url)
            }
            console.log(dataArr)
            const newItem = {...item, image: dataArr}
            setItem(newItem)
            return newItem
        } catch (error) {
            console.log(error)
        }
    }

    //need add deleteImages
    const handleSubmit = async (event) => {
        // event.preventDefault();
        // if (handleValidation()) {
        //     if (event.target.name === "viewitem") {
        //     const redirectID = JSON.parse(localStorage.getItem("bkpass-lastitem"))["data"]
        //     navigate({ pathname: "/demo-item", search: `?id=${redirectID}` });
        //     } else if (event.target.name === "homepage") navigate("/");
        //     else if (event.target.name === "submit") {
        //     const newItem = await uploadImageToCloud();
        //     await uploadItem(user.token, newItem, () => {
        //         toast.success("Đăng bài thành công", toastOptions);
        //     })
        //     }
        // }
        event.preventDefault();
        
    };

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value,
        });
        let number;
        if (event.target.name === "price") {
            const regex = /([,.])/g
            number = event.target.value.replace(regex, "");
            setItem({
            ...item,
            price: number,
            });
        }
    };
    
    const handleValidation = () => {
        if (done["status"] === false) {
            toast.error(done["msg"], toastOptions);
            return false;
        }
        return true;
    };

    return(
        <div className="modal bg-black backdrop-blur-sm bg-opacity-25 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-full h-full flex flex-col">
            <div className="modal-header flex flex-row-reverse">
                <button className="text-white bg-[#ddd] text-[20px] font-bold rounded-2xl top-1 right-1 px-2"
                 onClick={() => setOpenModal(false)} > 
                    X
                </button>
            </div>
            <div className="modal-body flex flex-col h-auto">
                <div className="flex flex-row"> 
                    <div className="w-4/5 flex flex-row">
                    {item.image.map((image) => 
                        {
                            return(
                                <img className="max-w-[125px] mx-2 my-2"
                                src={image} alt="ssa" />
                            )
                        }
                    )
                    }
                    </div>
                    <div className="flex flex-col">
                        <button className="w-full max-h-[40px] mt-2 mx-1 p-2.5 flex-1 text-white bg-red-400 rounded-md outline-none hover:scale-95">
                            Xoá ảnh
                        </button>
                        <button className="w-full max-h-[40px] mt-2 mx-1 p-2.5 flex-1 text-white bg-blue-400 rounded-md outline-none hover:scale-95">
                            Thêm ảnh
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full px-2">
                        <form className="w-full">
                            <div className="inline-block mb-7 relative w-full">
                                <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                                >
                                Danh mục tin đăng
                                </label>
                                <select
                                name="category"
                                onChange={(e) => handleChange(e)}
                                value={item.category}
                                className="block appearance-none md:w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                >
                                <option>Sách</option>
                                <option>Thiết bị số</option>
                                <option>Vật dụng khác</option>
                                </select>
                            </div>
                            <ul className="flex w-2/3 mb-5 md:grid-cols-2 mt-2">
                                <li className="flex-1">
                                <input
                                    type="radio"
                                    id="status-new"
                                    name="item_status"
                                    value="Mới"
                                    className="hidden peer"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                <label
                                    htmlFor="status-new"
                                    className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                                >
                                    <div className="block">
                                    <div className="w-full">Hàng mới</div>
                                    </div>
                                </label>
                                </li>
                                <li className="flex-1">
                                <input
                                    type="radio"
                                    id="status-old"
                                    name="item_status"
                                    value="Đã sử dụng"
                                    onChange={(e) => handleChange(e)}
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor="status-old"
                                    className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                                >
                                    <div className="block">
                                    <div className="w-full">Đã sử dụng</div>
                                    </div>
                                </label>
                                </li>
                            </ul>

                            <div className="mb-6">
                                <label
                                htmlFor="header"
                                className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                Tiêu đề
                                </label>
                                <input
                                type="text"
                                id="header"
                                name="header"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={item.name}
                                placeholder="Tiêu đề cho mặt hàng của bạn"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                Giá
                                </label>
                                <CurrencyInput
                                id="price"
                                name="price"
                                placeholder="Nhập giá tiền"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                decimalsLimit={2}
                                value={item.price}
                                onChange={(e) => handleChange(e)}
                                suffix=" VND"
                                />
                            </div>  

                            <div className="mb-6">
                                <label
                                htmlFor="desc"
                                className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                Mô tả (dưới 100 từ)
                                </label>
                                <textarea
                                id="desc"
                                rows="4"
                                name="desc"
                                value={item.description}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                onChange={(e) => handleChange(e)}
                                placeholder="Mô tả mặt hàng..."
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="items-center gap-2 mt-3 sm:flex">
                <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setOpenModal(false)}
                    >
                        Quay lại
                    </button>
                    <button
                        type="submit"
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        disabled={!done}
                        onClick={() => handleSubmit}
                    >
                        Lưu thay đổi
                    </button>
                </div>
        </div>
    </div>
    );
}

const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};