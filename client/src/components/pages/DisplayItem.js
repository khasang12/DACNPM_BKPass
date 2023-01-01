import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemDetail, markItem, unmarkItem, updateStatus } from "../../api/itemApi";
import { userContext } from "../../context/userContext";
import {formatValue} from "react-currency-input-field";

export default function DisplayItem() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const {itemId} = useParams();
  const user = useContext(userContext).user;

  useEffect(() => {
    getItemDetail(user? user.token:null, itemId, (data) => {
      setItem(data);
    })
  }, [user, itemId]);

  const handleSubmit = async (event) => {
    if (event.target.name === "profile") navigate(`../user/${item.idAuthor}`);
    else if (event.target.name === "homepage") window.location.assign(`${process.env.REACT_APP_FRONTEND_ROOT}`);
    else if (event.target.name === "status") {
      await updateStatus(user.token, itemId, !item.isSelling, () => {
        setItem({...item, isSelling: !item.isSelling})
      })
    } else if (event.target.name === "track") {
      if (item.isMarked) {
        await unmarkItem(user.token, itemId, () => {
          setItem({...item, isMarked: false})
        })
      }
      else {
        await markItem(user.token, itemId, () => {
          setItem({...item, isMarked: true})
        })
      }
    }
  };
  return (
    <div className="flex w-full bg-blue-50 border md:px-60">
      <div className=" bg-white w-full px-10 py-10 leading-loose">
        <div
          id="carouselExampleControls"
          className="mb-10 md:w-1/2 h-80 carousel slide relative"
          data-bs-ride="carousel"
        >
          {item.image? (
            <div className="carousel-inner relative w-full overflow-hidden">
              {item.image.map((img) => {
                if (img === item.image[0]) {
                  return (
                    <div className="carousel-item relative active float-left w-full h-80" key={img}>
                      <img
                        src={img}
                        className="block w-full h-80 object-contain"
                        alt="..."
                      />
                    </div>
                  )
                }
                return (
                  <div className="carousel-item relative float-left w-full h-80" key={img}>
                    <img
                      src={img}
                      className="block w-full h-80 object-contain"
                      alt="..."
                    />
                  </div>
                )
              })}
            </div>
          ) : null}
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-slate-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-slate-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h1 className="font-bold text-4xl">{item.title}</h1>
        <h1 className="font-bold text-3xl text-blue-600 leading-loose">
          {formatValue({
            value: item.price,
            groupSeparator: '.'
          })} VND
        </h1>
        <h3>
          <span className="flex flex-row items-center">
            <p className="text-gray-500 mr-5">Tag:</p>
            <p className="px-2 py-1 bg-green-300 rounded mr-5 hover:bg-gray-300">
              {item.category}
            </p>
            {/* <p className="px-2 py-1 bg-green-300 rounded hover:bg-gray-300">
              Năm 1
            </p> */}
          </span>
        </h3>
        <h3>
          <span className={`text-gray-500`}>Trạng thái mặt hàng:</span>{" "}
          {!item.isSelling ? (
            <span className="font-bold text-lg text-red-700">Đã bán</span>
          ) : (
            <span className="font-bold text-lg text-[#030391]">
              Đang rao bán
            </span>
          )}
        </h3>

        <h3>
          <span className="text-gray-500">Tình trạng sản phẩm:</span>{" "}
          {(item.status === "new")? "Mới" : "Cũ"}
        </h3>

        <h3>
          <span className="text-gray-500">Ngày đăng:</span> {(new Date(item.date)).toUTCString()}
        </h3>
        <h3>
          <span className="text-gray-500">Mô tả</span>
        </h3>
        <p className="leading-5 md:pr-10 text-justify whitespace-pre-line">
          {item.description? item.description : (
            <span className="italic">Sản phẩm này chưa có mô tả</span>
          )}
        </p>
        <div className="inline-flex">
          {(user && (user._id !== item.idAuthor))? (
            <button
              className="bg-blue-300 focus:outline-none text-gray-800 font-bold py-2 px-5 md:px-10 mr-5 rounded"
              data-bs-toggle="modal"
              data-bs-target="#change-tracking-modal"
            >
              {!item.isMarked ? "Đánh dấu" : "Hủy đánh dấu"}
            </button>
          ) : null}
          {(user && (user._id === item.idAuthor))? (
            <button
              className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 md:px-10 rounded"
              data-bs-toggle="modal"
              data-bs-target="#change-status-modal"
            >
              Thay trạng thái
            </button>
          ) : null}
        </div>

        <h3 className="text-gray-500 mt-5">Người bán</h3>
        <span className="flex flex-row items-center">
          <div className="mr-5">
            <img src={item.authorImage} className="object-fit w-16 h-16 rounded-full border-2 border-sky-500"></img>
          </div>
          <div>
            {item.authorName}
          </div>
        </span>
        <button
          onClick={(e) => {
            window.location.assign(`${process.env.REACT_APP_FRONTEND_ROOT}/user/${item.idAuthor}`)
          }}
          name="profile"
          className="bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-5 mr-5 mt-2 rounded"
        >
          Xem thông tin
        </button>
      </div>

      {/* Toogle Status Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="change-status-modal"
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
                  Thay đổi trạng thái sang {!item.isSelling ? "Đang rao bán" : "Đã bán"}{" "}
                  ?
                </h3>
                <button
                  data-modal-toggle="change-status-modal"
                  name="status"
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
      {/* Toogle Tracking Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="change-tracking-modal"
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
                  Xác nhận {item.isMarked ? " hủy" : ""} đánh dấu ?
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
                  Thay đổi thành công
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
  );
}
