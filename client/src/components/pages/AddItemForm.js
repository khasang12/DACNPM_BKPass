import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddItemForm() {
  const [values, setValues] = useState({
    category: "",
    item_status: "",
    price: "",
    header: "",
    desc: "",
    addr: "",
    img: [],
  });

  // FOR FILES UPLOADING....
  const [files, setFiles] = useState([]);

  async function uploadMultipleFiles(e) {
    const files = e.target.files;
    const arr = Array.from(files);
    const arrItem = arr.map((file) => URL.createObjectURL(file));
    setValues({ ...values, img: [arrItem] });
    await setFiles(arrItem);
  }

  function uploadFiles(e) {
    e.preventDefault();
    console.log(files);
  }

  // FOR FINAL SUBMISSION....
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      /*console.log("in validation", loginRoute);
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        console.log(data.user);
        if (data.user.isAvatarSet) navigate("/");
        else {
          navigate("/setAvatar");
        }
      }*/
      console.log(values);
    }
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleValidation = () => {
    const { price, img, category, item_status } = values;
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    if (category == "Chọn danh mục" || category == "") {
      toast.error("Vui lòng chọn danh mục", toastOptions);
      return false;
    } else if (item_status == "") {
      toast.error(
        "Vui lòng chọn trạng thái hàng (Mới/Đã sử dụng)",
        toastOptions
      );
      return false;
    } else if (!price.match(/^\d+(?:[,]\d+)*VND$/)) {
      toast.error("Giá tiền không thể là số âm", toastOptions);
      return false;
    } else if (img.length == 0) {
      toast.error("Vui lòng thêm ít nhất 1 ảnh", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex bg-gray-300 px-40 border">
      <div className="flex-auto justify-center items-center text-gray-700 bg-white px-4 py-7 mx-0">
        <div className="flex flex-col grow-0 justify-center items-center px-2">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center px-2 w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Thêm hình ảnh</span>
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={uploadMultipleFiles}
              accept="image/*"
              multiple
            />
          </label>
          <div className="grid grid-cols-3 mt-10">
            {(files || []).map((url) => (
              <img className="w-full p-2" src={url} key={url} alt="..." />
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 w-2/3 text-gray-700 bg-white px-4 py-7">
        <form
          action=""
          className="w-full"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="inline-block relative w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Danh mục tin đăng
            </label>
            <select
              name="category"
              onChange={(e) => handleChange(e)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Chọn danh mục</option>
              <option>Sách</option>
              <option>Thiết bị số</option>
              <option>Vật dụng khác</option>
            </select>
          </div>

          <h1 className="text-2xl mt-10 mb-5 font-bold">Thông tin chi tiết</h1>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Tình trạng hàng
          </label>
          <ul className="flex w-2/3 mt-3 mb-5 md:grid-cols-2 mt-2">
            <li className="flex-1">
              <input
                type="radio"
                id="status-new"
                name="item_status"
                value="new"
                className="hidden peer"
                onChange={(e) => handleChange(e)}
                required
              />
              <label
                htmlFor="status-new"
                className="inline-flex justify-center items-center p-2 w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
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
                value="old"
                onChange={(e) => handleChange(e)}
                className="hidden peer"
              />
              <label
                htmlFor="status-old"
                className="inline-flex justify-center items-center p-2 w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <div className="w-full">Đã sử dụng</div>
                </div>
              </label>
            </li>
          </ul>

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
              onChange={(e) => handleChange(e)}
              suffix="VND"
            />
          </div>

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
              placeholder="Tiêu đề cho mặt hàng của bạn"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mô tả (dưới 50 từ)
            </label>
            <textarea
              id="desc"
              rows="4"
              name="desc"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => handleChange(e)}
              placeholder="Mô tả mặt hàng..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Địa chỉ nhận hàng
            </label>
            <input
              type="text"
              id="location"
              name="addr"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="268, Lý Thường Kiệt. Phường 14, Quận 10"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="inline-flex">
            <button
              type="submit"
              className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-5 rounded"
            >
              Tiếp tục
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
