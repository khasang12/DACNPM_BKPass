import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddItemForm() {
  const [values, setValues] = useState({
    category: "",
    item_status: "",
    price: 0,
    header: "",
    desc: "",
    addr: "",
    img: "",
  });

  // FOR FILES UPLOADING....
  const [files, setFiles] = useState([]);

  async function uploadMultipleFiles(e) {
    const files = e.target.files;
    const arr = Array.from(files);
    const arrItem = arr.map((file) => URL.createObjectURL(file));
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
    }
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleValidation = () => {
    /*const { password, username } = values;
    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    if (password === "") {
      toast.error("Password required", toastOptions);
      return false;
    } else if (username === "") {
      toast.info("Username required", toastOptions);
      return false;
    } else {
      return true;
    }*/
  };

  return (
    <div class="flex bg-gray-300 py-5 px-40">
      <div class="flex-auto justify-center items-center text-gray-700 bg-white px-4 py-4 my-2 mx-0">
        <div class="flex flex-col grow-0 justify-center items-center px-2">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center px-2 w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
          >
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500">
                <span class="font-semibold">Thêm hình ảnh</span> (ấn hoặc kéo)
              </p>
              <p class="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>

            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={uploadMultipleFiles}
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

      <div class="shrink-0 w-1/2 text-gray-700 bg-white px-4 py-4 my-2">
        <form
          action=""
          className="w-full max-w-lg"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div class="inline-block relative w-64">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Danh mục tin đăng
            </label>
            <select
              onChange={(e) => handleChange(e)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Sách</option>
              <option>Thiết bị số</option>
              <option>Vật dụng khác</option>
            </select>
          </div>

          <h1 className="text-2xl mt-10 mb-5 font-bold">Thông tin chi tiết</h1>

          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Tình trạng hàng
          </label>
          <ul className="grid gap-6 w-full mt-3 mb-5 md:grid-cols-2 mt-2">
            <li>
              <input
                type="radio"
                id="status-new"
                name="status"
                value="new"
                className="hidden peer"
                onChange={(e) => handleChange(e)}
                required
              />
              <label
                for="status-new"
                className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <div className="w-full">Còn mới</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="status-old"
                name="status"
                value="old"
                onChange={(e) => handleChange(e)}
                className="hidden peer"
              />
              <label
                for="status-old"
                className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="block">
                  <div className="w-full">Đã sử dụng</div>
                </div>
              </label>
            </li>
          </ul>

          <div class="mb-6">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Giá
            </label>
            <CurrencyInput
              id="price"
              name="price"
              placeholder="Nhập giá tiền"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={1000}
              decimalsLimit={2}
              onChange={(e) => handleChange(e)}
              suffix="VND"
            />
          </div>

          <div className="mb-6">
            <label
              for="header"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tiêu đề
            </label>
            <input
              type="text"
              id="header"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Tiêu đề cho mặt hàng của bạn"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="desc"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mô tả (dưới 50 từ)
            </label>
            <textarea
              id="desc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => handleChange(e)}
              placeholder="Mô tả mặt hàng..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              for="location"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Địa chỉ nhận hàng
            </label>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ký túc xá Khu A"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="inline-flex">
            <button className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-5 rounded">
              Đăng tin
            </button>
            <a
              href="#"
              className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Hủy thêm
            </a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark"
}
