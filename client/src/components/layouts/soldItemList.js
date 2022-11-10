import { timeAgo } from "../../service/timeAgo";
//import {seller} from '../../components/profile'
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    if (event.target.name === "view") {
      navigate("/demo-item");
    } else if (event.target.name === "edit") {
      navigate("/add-item");
    } else if (event.target.name === "homepage") {
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col h-200 m-3 p-3 border-2 rounded-2 border-blue-200">
      <div className="flex w-130 h-50">
        <div className="block w-1/5 h-full p-3">
          <img
            alt="item"
            src={item.image}
            className="block w-120 h-120 content--blur align-middle"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-row flex-1 mb-1/5 lg:mb-0">
            <div className="flex-col w-7/10" style={{ minWidth: "200px" }}>
              <div className="mb-1 text-xl font-bold ">{item.name}</div>
              <div className="md:mt-5 text-lg text-[#030981] font-semibold h-3/10">
                Giá:
              </div>
              <div className="text-sm text-[#1488D8] font-semibold h-2/10">
                Đánh dấu đã bán gần nhất: {timeAgo(item.time)}
              </div>
            </div>
            <div
              className="flex-col flex-1"
              style={{ minWidth: "120px", textAlign: "right" }}
            >
              <div
                className="mb-1 right-0 font-italic"
                style={{ textAlign: "right" }}
              >
                {/* x{item.count} */}x1
              </div>
              <div className="md:mt-6 text-lg text-[#030981] font-italic h-3/10">
                {item.cost} VNĐ
              </div>
            </div>
          </div>
          <div className="align-middle mt-auto lg:w-4/5 flex flex-row flex-end space-x-4">
            <button
              name="view"
              onClick={handleSubmit}
              className="flex-auto bg-green-400 hover:bg-gray-700 text-white border border-blue-700 rounded h-10"
            >
              Xem mặt hàng
            </button>
            <button
              name="edit"
              onClick={handleSubmit}
              className="flex-auto bg-[#030981] hover:bg-gray-700 text-white border border-blue-700 rounded h-10"
            >
              Sửa thông tin
            </button>
            <button
              name="delete"
              onClick={handleSubmit}
              data-modal-toggle="popup-modal"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="flex-auto bg-red-500 hover:bg-gray-700 text-white border border-blue-700 rounded h-10"
            >
              Xóa mặt hàng
            </button>
            {/* Delete-Item Modal */}
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="delete-modal"
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
                        Xác nhận xóa mặt hàng "{item.name}" ?
                      </h3>
                      <button
                        data-modal-toggle="popup-modal"
                        type="submit"
                        onClick={handleSubmit}
                        className="text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
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
                        Xóa mặt hàng thành công
                      </h3>
                      <a
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        type="submit"
                        onClick={handleSubmit}
                        name="homepage"
                        className="text-gray-500 mb-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Trở về trang chính
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ItemsList() {
  const items = [
    {
      id: 1,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "30.000",
      // state: ""
      time: new Date() - 1000000,
    },
    {
      id: 2,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 4000000,
    },
    {
      id: 3,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 6000000,
    },
    {
      id: 4,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 10000000,
    },
    {
      id: 5,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 20000000,
    },
    {
      id: 6,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 40000000,
    },
    {
      id: 7,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 80000000,
    },
    {
      id: 8,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 100000000,
    },
    {
      id: 9,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 150000000,
    },
    {
      id: 10,
      owner: "Nguyễn Văn A",
      image:
        "https://thumbs.dreamstime.com/b/hand-opened-book-global-network-connection-knowledge-education-e-booking-learning-concept-elements-imag-116592659.jpg",
      name: "Item 1",
      cost: "300.000",
      // state: ""
      time: new Date() - 200000000,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col flex-wrap justify-center w-full">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
      <div className="mt-6">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              1
            </button>
          </li>
          <li>
            <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              2
            </button>
          </li>
          <li>
            <button
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </button>
          </li>
          <li>
            <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              4
            </button>
          </li>
          <li>
            <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              5
            </button>
          </li>
          <li>
            <button className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
