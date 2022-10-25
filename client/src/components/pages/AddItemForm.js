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
    is_sold: false,
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

  // FOR EACH SUBMISSION
  const [done, setDone] = useState(false);

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
      //navigate(`/add-item/${values.id}`,{state:values})
      console.log(values);
      setDone(true);
      return true;
    }
    return false;
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    let number
    if (event.target.name=="price"){
      number = event.target.value.replaceAll(',', '')
      setValues({
        ...values,
        "price": number,
      });
    }
    
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
    if (category === "Chọn danh mục" || category === "") {
      toast.error("Vui lòng chọn danh mục", toastOptions);
      return false;
    } else if (item_status === "") {
      toast.error(
        "Vui lòng chọn trạng thái hàng (Mới/Đã sử dụng)",
        toastOptions
      );
      return false;
    } else if (!price.match(/^\d+(?:[,]\d+)*VND$/)) {
      toast.error("Giá tiền không thể là số âm", toastOptions);
      return false;
    } else if (img.length === 0) {
      toast.error("Vui lòng thêm ít nhất 1 ảnh", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 md:px-40 border">
      <div className="flex-end lg:flex-auto justify-center items-center text-gray-700 bg-white px-4 py-7 mx-0">
        <h1 className="lg:hidden text-2xl mt-10 mb-5 font-bold">Thông tin sản phẩm</h1>
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
            >
              <option>Chọn danh mục</option>
              <option>Sách</option>
              <option>Thiết bị số</option>
              <option>Vật dụng khác</option>
            </select>
          </div>

          <h1 className="hidden lg:block text-2xl mt-10 mb-5 font-bold">Thông tin chi tiết</h1>

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
              type="button"
              class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalXl"
            >
              Xem thông tin
            </button>

            <button
              type="submit"
              class="ml-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#popup-modal"
              onClick={handleValidation}
            >
              Xác nhận đăng bài
            </button>
            {/* View Item Modal */}
            <div
              class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalXl"
              tabindex="-1"
              aria-labelledby="exampleModalXlLabel"
              aria-modal="true"
              role="dialog"
            >
              <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      class="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalXlLabel"
                    >
                      Demo sản phẩm
                    </h5>

                    <button
                      type="button"
                      class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body relative p-4 leading-loose">
                    <div className="flex flex-row">
                      {values.img[0]
                        ? values.img[0].map((item) => (
                            <img src={item} className="block w-1/5 h-full" />
                          ))
                        : ""}
                    </div>
                    <h1 className="font-bold text-4xl">{values.header}</h1>
                    <h1 className="font-bold text-3xl text-blue-600 leading-loose">
                      {values.price}
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
                      {values.item_status}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Trạng thái:</span>{" "}
                      {values.is_sold ? "Đã bán" : "Đang rao bán"}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Ngày đăng:</span>{" "}
                      09/10/2022
                    </h3>
                    <h3>
                      <span className="text-gray-500">Địa chỉ giao hàng:</span>{" "}
                      {values.addr}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Mô tả</span>
                    </h3>
                    <p className="leading-5 pr-10 text-justify">
                      {values.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation Modal */}
            {done ? (
              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="popup-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="popup-modalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="relative bg-white rounded-lg shadow">
                      <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div class="p-6 text-center">
                        <svg
                          aria-hidden="true"
                          class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Xác nhận đăng hàng ?
                        </h3>
                        <button
                          data-modal-toggle="popup-modal"
                          type="submit"
                          onClick={handleSubmit}
                          class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                          data-bs-toggle="modal"
                          data-bs-target="#success-modal"
                        >
                          Đăng bài
                        </button>
                        <button
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Quay lại
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="success-modal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="success-modalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="relative justify-center bg-white rounded-lg shadow">
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div class="p-6 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                      </svg>

                      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Đăng hàng thành công
                      </h3>
                      <a
                        data-modal-toggle="success-modal"
                        type="submit"
                        onClick={handleSubmit}
                        class="text-white mb-5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-1 sm:mr-2"
                        data-bs-toggle="modal"
                        data-bs-target="#success-modal"
                        href="/"
                      >
                        Mặt hàng đang bán
                      </a>
                      <a
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        type="button"
                        class="text-gray-500 mb-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Trở về trang chính
                      </a>
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
