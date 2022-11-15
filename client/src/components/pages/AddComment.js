import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function AddComment() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    star: 0,
    comment: "",
  });
  const [done, setDone] = useState({ status: false, msg: "Empty Form !!" });

  useEffect(() => {
    const { comment, star } = values;
    console.log("values:", values);
    if (star == 0 || star == undefined) {
      setDone({ status: false, msg: "Rating tối thiểu 1 sao" });
    } else if (comment === "" || comment == undefined) {
      setDone({ status: false, msg: "Vui lòng nhập comment" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

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
    console.log("ok");
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("Good");
    }
  };
  const handleComment = (event) => {
    if (event.target.value) {
      console.log(values);
      setValues({
        ...values,
        comment: event.target.value,
      });
    }
  };
  const rateStars = {
    size: 60,
    value: 0,
    edit: true,
    onChange: (newValue) => {
      setValues({
        star: newValue,
      });
    },
  };
  return (
    <div className="my-5 flex justify-center items-center min-h-0 bg-blue-50">
      <div className="my-10 justify-center px-7 w-[700px] rounded-[12px] bg-white p-4">
        <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
          Thêm đánh giá cho người bán
        </p>
        <ReactStars {...rateStars} />
        <textarea
          className="h-40 px-3 text-sm py-1 mt-5 outline-none border-pink-300 w-full resize-none border rounded-lg placeholder:text-sm required"
          placeholder="Vui lòng không để trống trường này!"
          onChange={(e) => handleComment(e)}
        ></textarea>
        <div className="flex justify-end mt-2">
          <div className="pr-6">
            <button
              onClick={(e) => handleSubmit(e)}
              name="confirm"
              type="submit"
              className="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
              data-bs-toggle={done["status"] ? "modal" : ""}
              data-bs-target={done["status"] ? "#add-comment-modal" : ""}
            >
              Xác nhận
            </button>
          </div>
          <button
            onClick={() => navigate(-1)}
            name="exit"
            className="h-12 w-[150px] bg-red-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-red-600"
          >
            Huỷ
          </button>
        </div>
      </div>
      <ToastContainer />

      {/* Add Comment Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="add-comment-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Xác nhận đánh giá ?
                </h3>
                <button
                  data-modal-toggle="change-tracking-modal"
                  name="track"
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#success-modal"
                >
                  Xác nhận
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
      {/* Success Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="success-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
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
                  Thay đổi thành công
                </h3>
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  onClick={()=>navigate(-1)}
                  name="viewitem"
                  className="text-white mb-5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-1 sm:mr-2"
                >
                  Xem bình luận
                </button>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="submit"
                  onClick={()=>navigate("/")}
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
  );
}
