import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import CurrencyInput, {formatValue} from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadItem } from "../../api/itemApi";
import {userContext} from "../../context/userContext";

export default function AddItemForm() {
  const navigate = useNavigate();
  const user = useContext(userContext).user;
  const [values, setValues] = useState(
    sessionStorage.getItem("item")
      ? JSON.parse(sessionStorage.getItem("item"))
      : {
          category: "",
          status: "",
          price: "",
          title: "",
          description: "",
          image: [],
          isSelling: true,
        }
  );
  const [imgBuffer, setImgbuffer] = useState([])
  // FOR EACH SUBMISSION
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  // FOR FILES UPLOADING....
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("bkpass-user");
    if (!user) {
      navigate("/403");
    }
  }, []);

  useEffect(() => {
    const { price, header, image, category, status } = values;
    if (category === "Chọn danh mục" || category === "") {
      setDone({ status: false, msg: "Vui lòng chọn danh mục" });
    } else if (imgBuffer.length === 0) {
      setDone({ status: false, msg: "Vui lòng thêm ít nhất 1 ảnh" });
    } else if (status === "") {
      setDone({
        status: false,
        msg: "Vui lòng chọn trạng thái hàng (Mới/Đã sử dụng)",
      });
    } else if (price.match(/^\d+(?:[,]\d+)*VND$/)) {
      setDone({ status: false, msg: "Giá tiền không hợp lệ" });
    } else if (header === "") {
      setDone({ status: false, msg: "Vui lòng điền tên mặt hàng" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

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

  const uploadImageToCloud = async () => {
    try {
      const dataArr = []
      for (let i = 0; i < imgBuffer.length; i++) {
        const blob = await fetch(imgBuffer[i]).then(r => r.blob());
        const image = await pFileReader(blob).then(data => data);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "BK_Pass");
        const res = await axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, data, {});
        dataArr.push(res.data.url)
      }
      console.log(dataArr)
      const newValue = {...values, image: dataArr}
      setValues(newValue)
      return newValue
    } catch (error) {
      console.log(error)
    }
  }

  // FOR FINAL SUBMISSION....
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      if (event.target.name === "viewitem") {
        const redirectID = JSON.parse(localStorage.getItem("bkpass-lastitem"))["data"]
        navigate({ pathname: "/demo-item", search: `?id=${redirectID}` });
      } else if (event.target.name === "homepage") navigate("/");
      else if (event.target.name === "submit") {
        const newItem = await uploadImageToCloud();
        await uploadItem(user.token, newItem, () => {
          toast.success("Đăng bài thành công", toastOptions);
        })
      }
    }
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    let number;
    if (event.target.name === "price") {
      const regex = /([,.])/g
      number = event.target.value.replace(regex, "");
      setValues({
        ...values,
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

  return (
    <div className="flex flex-col lg:flex-row bg-blue-50 md:px-40">
      <div className="flex-end lg:flex-auto justify-center items-center text-gray-700 bg-white px-4 py-7 mx-0">
        <h1 className="lg:hidden text-2xl mt-10 mb-5 font-bold">
          Thông tin sản phẩm
        </h1>
        <div className="lg:flex flex-row lg:flex-col grow-0 justify-center items-center px-2">
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
                <span className="font-semibold">Thêm hình ảnh (*)</span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
            {(files || []).map((url) => (
              <img className="w-full p-2" src={url} key={url} alt="..." />
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 lg:w-2/3 text-gray-700 bg-white px-4 py-7">
        <form
          action=""
          className="w-full"
          onSubmit={(event) => handleSubmit(event)}
          data-modal-toggle="defaultModal"
        >
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
              className="block appearance-none md:w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={values.category}
            >
              <option value="">Chọn danh mục</option>
              <option value="book">Sách</option>
              <option value="electronics">Thiết bị số</option>
              <option value="other">Vật dụng khác</option>
            </select>
          </div>

          <h1 className="hidden lg:block text-2xl mt-10 mb-5 font-bold">
            Thông tin chi tiết
          </h1>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Tình trạng hàng (*)
          </label>
          <ul className="flex w-2/3 mt-3 mb-5 md:grid-cols-2 mt-2">
            <li className="flex-1">
              <input
                type="radio"
                id="status-new"
                name="status"
                value="new"
                checked={values.status == "new"}
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
                name="status"
                value="used"
                checked={values.status == "used"}
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
              Tiêu đề (*)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Tiêu đề cho mặt hàng của bạn"
              onChange={(e) => handleChange(e)}
              value={values.title}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Giá (*)
            </label>
            <CurrencyInput
              id="price"
              name="price"
              placeholder="Nhập giá tiền"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={values.price}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mô tả (dưới 100 từ)
            </label>
            <textarea
              id="description"
              rows="4"
              name="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              value={values.description}
              onChange={(e) => handleChange(e)}
              placeholder="Mô tả mặt hàng..."
            ></textarea>
          </div>

          <div className="inline-flex">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalXl"
            >
              Xem thông tin
            </button>

            <button
              type="submit"
              name="need-confirmation"
              className="ml-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle={done["status"] ? "modal" : ""}
              data-bs-target={done["status"] ? "#popup-modal" : ""}
              onClick={handleValidation}
            >
              Xác nhận đăng bài
            </button>
            {/* View Item Modal */}
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalXl"
              tabIndex="-1"
              aria-labelledby="exampleModalXlLabel"
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalXlLabel"
                    >
                      Demo sản phẩm
                    </h5>

                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body relative p-4 leading-loose">
                    <div className="flex flex-row">
                      {files
                        ? files.map((item) => (
                            <img
                              src={item}
                              alt="item"
                              className="block w-1/5 h-full"
                              key={item}
                            />
                          ))
                        : ""}
                    </div>
                    <h1 className="font-bold text-4xl">{values.title}</h1>
                    <h1 className="font-bold text-3xl text-blue-600 leading-loose">
                      {formatValue({
                        value: values.price,
                        groupSeparator: ".",
                      })}
                    </h1>
                    <h3>
                      <span className="flex flex-row items-center">
                        <p className="text-gray-500 mr-5">Tag:</p>
                        <p className="px-2 py-1 bg-green-300 rounded mr-5 hover:bg-gray-300">
                          {values.category}
                        </p>
                      </span>
                    </h3>
                    <h3>
                      <span className="text-gray-500">Tình trạng:</span>{" "}
                      {values.status}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Trạng thái:</span>{" "}
                      {!values.isSelling ? "Đã bán" : "Đang rao bán"}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Ngày đăng:</span>{" "}
                      {new Date().toUTCString()}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Mô tả</span>
                    </h3>
                    <p className="leading-5 pr-10 text-justify">
                      {values.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation Modal */}
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="popup-modal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="popup-modalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="relative bg-white rounded-lg shadow">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="p-6 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Xác nhận đăng hàng ?
                      </h3>
                      <button
                        data-modal-toggle="popup-modal"
                        type="submit"
                        onClick={handleSubmit}
                        name="submit"
                        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        data-bs-toggle="modal"
                        data-bs-target="#success-modal"
                      >
                        Đăng bài
                      </button>
                      <button
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Quay lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="success-modal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="success-modalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="relative justify-center bg-white rounded-lg shadow">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="p-6 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                      </svg>

                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Đăng hàng thành công
                      </h3>
                      <button
                        data-bs-dismiss="modal"
                        type="submit"
                        onClick={handleSubmit}
                        name="viewitem"
                        className="text-white mb-5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-1 sm:mr-2"
                      >
                        Xem mặt hàng
                      </button>
                      <button
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        type="submit"
                        onClick={handleSubmit}
                        name="homepage"
                        className="text-gray-500 mb-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Trở về trang chính
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <ToastContainer />
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
