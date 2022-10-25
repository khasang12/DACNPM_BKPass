import React from "react";

export default function DisplayItem() {
  return (
    <div className="flex bg-gray-300 border md:px-60">
      <div className=" bg-white px-10 py-10 leading-loose">
        <div
          id="carouselExampleControls"
          className="mb-10 md:w-1/3 carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img
                src="https://www.lib.hcmut.edu.vn/uploads/noidung/giao-trinh-giai-tich-1-0-830.jpg"
                class="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://www.lib.hcmut.edu.vn/uploads/noidung/giao-trinh-giai-tich-1-0-830.jpg"
                class="block w-full"
                alt="Camera"
              />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://www.lib.hcmut.edu.vn/uploads/noidung/giao-trinh-giai-tich-1-0-830.jpg"
                class="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <h1 className="font-bold text-4xl">Giải tích 1</h1>
        <h1 className="font-bold text-3xl text-blue-600 leading-loose">
          15.000 đ
        </h1>
        <h3>
          <span className="flex flex-row items-center">
            <p className="text-gray-500 mr-5">Tag:</p>
            <p className="px-2 py-1 bg-green-300 rounded mr-5 hover:bg-gray-300">
              Giáo trình
            </p>
            <p className="px-2 py-1 bg-green-300 rounded hover:bg-gray-300">
              Năm 1
            </p>
          </span>
        </h3>
        <h3>
          <span className="text-gray-500">Tình trạng:</span> Đã sử dụng
        </h3>
        <h3>
          <span className="text-gray-500">Trạng thái:</span> Đang rao bán
        </h3>
        <h3>
          <span className="text-gray-500">Ngày đăng:</span> 09/10/2022
        </h3>
        <h3>
          <span className="text-gray-500">Địa chỉ giao hàng:</span> Cổng Ký túc
          xá Khu A - ĐHQG TPHCM
        </h3>
        <h3>
          <span className="text-gray-500">Mô tả</span>
        </h3>
        <p className="leading-5 md:pr-10 text-justify">
          Giải tích toán học là bộ môn của toán học liên quan đến những vấn đề
          của biến đổi và chuyển động. Phương tiện chủ yếu của nó là nghiên cứu
          các đại lượng vô cùng bé. Nó đề cập đến chuyện những đại lượng nọ tiến
          đến những đại lượng kia. Hai nhánh chính của giải tích là phép tính vi
          phân và phép tính tích phân được liên hệ với nhau bởi định lý cơ bản
          của giải tích.
        </p>
        <div className="inline-flex">
          <button
            className="bg-blue-300 focus:outline-none text-gray-800 font-bold py-2 px-5 md:px-10 mr-5 rounded"
            disabled
          >
            Đánh dấu
          </button>
          <a
            href="#"
            className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 md:px-10 rounded"
          >
            Thay trạng thái
          </a>
        </div>

        <h3 className="text-gray-500 mt-5">Người bán</h3>
        <span className="flex flex-row items-center">
          <i className="mr-5 p-4 border-2 rounded-full border-sky-500 fas fa-user-tie"></i>
          Kha Sang
        </span>
        <button
          disabled
          className="bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-5 mr-5 mt-2 rounded"
        >
          Xem thông tin
        </button>
      </div>
    </div>
  );
}
