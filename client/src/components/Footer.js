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
          "
            >
              <img src={logo} className="w-20 mr-3"></img>
              <i className="text-2xl font-bold text-[#1488D8]">BKPass</i>
            </h6>
            <p>
              Là một trang web giúp cho người dùng trao đổi các vật dụng đã qua
              sử dụng với giá cả phải chăng, uy tín.
            </p>
          </div>
          <div>
            <h6>CSKH</h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Hướng dẫn mua hàng
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Hướng dẫn bán hàng
              </a>
            </p>
          </div>
          <div>
            <h6>Về chúng tôi</h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Đội phát triển
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Liên hệ hỗ trợ
              </a>
            </p>
          </div>
          <div className="">
            <h6>Follow us</h6>
            <p>
              <a href="#!" className="mr-9 text-gray-800">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="svg-inline--fa fa-facebook-f w-2.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="https://facebook.com/vnhsngxxx">Facebook</a>
            </p>
            <p>
              <a href="#!" className="mr-9 text-gray-800">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="svg-inline--fa fa-instagram w-2.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/svnation__/">Instagram</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <a
          className="text-black font-semibold"
          href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Qu%E1%BB%91c+gia+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+(c%C6%A1+s%E1%BB%9F+2)/@10.880564,106.803188,17z/data=!3m1!4b1!4m5!3m4!1s0x3174d958707f8685:0xd577177b5198597f!8m2!3d10.8805587!4d106.8053767"
        >
          Địa chỉ: Tầng 6, Trường Đại học Bách Khoa (Cơ sở 2), Phường Đông Hoà,
          Thành phố Dĩ An, Tỉnh Bình Dương{" "}
        </a>
        <br />
        <a className="text-black font-semibold">
          Tổng đài hỗ trợ: 1900xxxx - Email: sang.nguyenvinh@hcmut.edu.vn
        </a>
        <br />
        <br />
        <span>©2022 - Bản quyền thuộc về Công ty Bình Minh</span>
      </div>
    </footer>
  );
}
