import React from "react";
import logo from "../assets/img/HCMUTLOGO.png";
import "../assets/styles/Footer.css";
export function Footer() {
  return (
    <footer className="text-center lg:text-left bg-white-100 text-black font-medium font-[Inter var]">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
                            <img src={logo} className="w-20 mr-3"></img>
                            <i className="text-2xl font-bold text-[#1488D8]">BKPass</i>
                        </h6>
                        <p>
                            Là một trang web giúp cho người dùng trao đổi các vật dụng đã qua sử dụng với giá cả phải chăng, uy tín.
                        </p>
                    </div>
                    <div>
                        <h6>
                            CSKH
                        </h6>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Hướng dẫn mua hàng</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Hướng dẫn bán hàng</a>
                        </p>
                    </div>
                    <div>
                        <h6>
                            Về chúng tôi
                        </h6>
                        <p class="mb-4">
                            <a href="/dev" class="text-gray-600">Đội phát triển</a>
                        </p>
                        <p class="mb-4">
                            <a href="#!" class="text-gray-600">Liên hệ hỗ trợ</a>
                        </p>
                    </div>
                    <div class="">
                        <h6>
                            Follow us
                        </h6>
                        <p>
                            <a href="https://facebook.com/vnhsngxxx" class="mr-9 text-gray-800">
                                <svg
                                    class="w-6 h-6 text-blue-600 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    />
                                </svg>
                            </a>
                            <a href="https://facebook.com/vnhsngxxx">Facebook</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/sang-nguy%E1%BB%85n-752a2a209/" class="mr-9 text-gray-800">
                                <svg
                                    class="w-6 h-6 text-blue-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sang-nguy%E1%BB%85n-752a2a209/">LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center p-6 bg-gray-200">
                <a class="text-black font-semibold" href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Qu%E1%BB%91c+gia+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+(c%C6%A1+s%E1%BB%9F+2)/@10.880564,106.803188,17z/data=!3m1!4b1!4m5!3m4!1s0x3174d958707f8685:0xd577177b5198597f!8m2!3d10.8805587!4d106.8053767">Địa chỉ: Tầng 6, Trường Đại học Bách Khoa (Cơ sở 2), Phường Đông Hoà, Thành phố Dĩ An, Tỉnh Bình Dương </a>
                <br />
                <a class="text-black font-semibold">Tổng đài hỗ trợ: 1900xxxx - Email: sang.nguyenvinh@hcmut.edu.vn</a>
                <br />
                <br />
                <span>©2022 - Bản quyền thuộc về Công ty Bình Minh</span>
            </div>
        </footer>
    )
}
