import "../assets/styles/navbar.css";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotiData } from "./notiData";
import {
  faHome,
  faSearch,
  faBell,
  faBriefcase,
  faUser,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export function Navbar() {
  const userLogin = JSON.parse(localStorage.getItem("bkpass-user"));
  const [searchStr, setSearchStr] = useState("");
  const [dropDown, setDropDown] = useState({
    items: false,
    noti: false,
    acc: false,
    user: false,
  });

  const search = (e) => {
    e.preventDefault();
    if (searchStr !== "") {
      window.location.assign(`./search?s=${searchStr}`);
    }
  };

  const handleDropdown = (e) => {
    if (!userLogin && (e.target.name == "noti" || e.target.name == "items")) {
      window.location.assign(`./403`);
    }
    const updatedValues = { [e.target.name]: !dropDown[e.target.name] };
    setDropDown({ ...dropDown, ...updatedValues });
  };

  const onSearchBoxChange = (e) => {
    setSearchStr(e.target.value);
  };

  const onSearchBoxKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchStr !== "") {
        window.location.assign(`./search?s=${searchStr}`);
      }
    }
  };

  const onClickMenuBtn = () => {
    const menuList = document.getElementById("menuDropdown");
    if (menuList.classList.contains("hidden")) {
      menuList.classList.remove("hidden");
    } else {
      menuList.classList.add("hidden");
    }
  };

  return (
    <div className="navbar w-100 text-center md:text-left bg-white-100 text-black font-medium font-[Inter var] border-b-2 t-2">
      <div className="flex flex-col md:flex-row w-100 justify-between">
        <div>
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
            <img src={logo} className="w-20 h-20" alt="logo"></img>
          </h6>
        </div>
        <div className="grow flex flex-row md:flex-col justify-start mr-3 ml-3">
          <div className="w-auto my-1 flex md:block md:flex md:items-center md:w-auto">
            <div className="block md:hidden flex flex-row flex-1 md:justify-end ">
              <button
                className="relative flex items-center px-3 py-2 border rounded text-teal-200 border-[#030391] text-[#030391] mr-2"
                id="menuBtn"
                onClick={onClickMenuBtn}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  color="#030391"
                ></FontAwesomeIcon>
              </button>
            </div>
            <div
              className="hidden md:flex
                            bg-slate-100 md:bg-white
                            top-32
                            md:top-0
                            border-[#030391] rounded border-2 md:border-0
                            absolute left-2 md:right-2 md:static
                            md:flex-grow 
                            flex flex-col md:flex-row justify-between 
                            md:w-50 lg:w-72 mt-1 mb-1 z-10"
              id="menuDropdown"
            >
              <button
                className="text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.assign("./");
                }}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-2"
                ></FontAwesomeIcon>
                Trang chủ
              </button>
              <button
                name="items"
                className="text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
                onClick={handleDropdown}
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-2"
                ></FontAwesomeIcon>
                Đơn hàng
                {userLogin && dropDown["items"] && <DropdownSection />}
              </button>

              <button
                name="noti"
                onClick={handleDropdown}
                className="relative text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className="mr-2"
                ></FontAwesomeIcon>
                Thông báo
                <span class="invisible md:visible text-sm absolute top-0 lg:left-1/3 translate-middle rounded-full p-1 bg-red-500 text-white">
                  +1 <span class="visually-hidden">unread messages</span>
                </span>
                {userLogin && dropDown["noti"] && <DropdownNotification />}
              </button>

              {userLogin ? (
                <button
                  name="user"
                  type="button"
                  onClick={(e) => handleDropdown(e)}
                  className="uppercase text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
                >

                    <FontAwesomeIcon
                      icon={faUserAstronaut}
                      className="mr-2"
                    ></FontAwesomeIcon>
                      {userLogin ? userLogin["name"] : "JFF"}

                  {dropDown["user"] && <DropdownUser />}
                </button>
              ) : (
                <button
                  name="acc"
                  onClick={(e) => handleDropdown(e)}
                  className="text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Tài khoản
                  {dropDown["acc"] && <DropdownUser />}
                </button>
              )}
            </div>
          </div>
          <div className="flex grow md:grow-0 git lg:flex-row justify-between w-100 mb-2 mt-2">
            <div className="w-3/4 flex flex-1 flex-row items-center bg-slate-200 rounded-full pl-2 pr-2 pt-1 pb-1">
              <input
                placeholder="Tìm kiếm mặt hàng"
                className="grow bg-transparent outline-0"
                type="text"
                width="40em"
                onChange={onSearchBoxChange}
                onKeyDown={onSearchBoxKeyDown}
              ></input>
              <div>
                <button onClick={search}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#1488D8"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <button
              className="align-middle mr-3 rounded-full bg-[#030391] text-white pl-3 pr-3 ml-2"
              onClick={(e) => {
                e.preventDefault();
                window.location.assign("./add-item");
              }}
            >
              Đăng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const DropdownSection = () => {
  return (
    <div
      id="dropdown"
      class="left-28 bottom-10 md:bottom-auto md:left-auto absolute md:justify-end z-50 w-full md:w-auto lg:w-44 bg-white rounded divide-y divide-gray-100 shadow"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="/buy-history"
            class="block py-2 px-4 hover:bg-gray-100 hover:text-[#1488D8] text-[#030391]"
          >
            Đơn mua
          </a>
        </li>
        <li>
          <a
            href="/sell-history"
            class="block py-2 px-4 hover:bg-gray-100 hover:text-[#1488D8] text-[#030391]"
          >
            Đơn bán
          </a>
        </li>
      </ul>
    </div>
  );
};

const DropdownUser = () => {
  let login = localStorage.getItem("bkpass-user");
  return (
    <div
      id="dropdown"
      className={`${
        login ? "md:top-16" : ""
      } md:bottom-auto -bottom-10 left-28 md:left-auto absolute md:justify-end z-50 w-full md:w-auto lg:w-44 bg-white rounded divide-y divide-gray-100 shadow`}
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href={login ? "/comment" : "/register"}
            class="block py-2 px-4 hover:bg-gray-100 hover:text-[#1488D8] text-[#030391]"
          >
            {login ? "Tài khoản" : "Đăng kí"}
          </a>
        </li>
        <li>
          <a
            href={login ? "#" : "/login"}
            type="button"
            class="block py-2 px-4 hover:bg-gray-100 hover:text-[#1488D8] text-[#030391]"
            data-bs-toggle={login ? "modal" : ""}
            data-bs-target={login ? "#popup-modal" : ""}
          >
            {login ? "Đăng xuất" : "Đăng nhập"}
          </a>
        </li>
      </ul>
      {/* Logout */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="popup-modal"
        data-bs-backdrop="false"
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
                  Xác nhận đăng xuất ?
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="submit"
                  onClick={() => {
                    localStorage.clear();
                    window.location.assign("/login");
                  }}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#success-modal"
                >
                  Đăng xuất
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
    </div>
  );
};

const DropdownNotification = () => {
  return (
    <div
      id="dropdown"
      style={{ minWidth: "250px" }}
      class="left-28 md:left-1/2 top-1 md:top-auto md:left-0 md:bottom-auto md:left-auto absolute md:justify-end z-50 md:w-full bg-white rounded divide-y divide-gray-100 shadow"
    >
      <div class="block py-2 px-4 font-medium text-start text-gray-700 bg-gray-50">
        Thông báo mới nhất
      </div>
      <div class="divide-y divide-gray-100 overflow-auto h-72">
        {NotiData.map((noti) => (
          <a
            href="#"
            class="flex py-3 px-4 hover:bg-gray-100"
            key={noti.id}
            onClick={(e) => {
              e.preventDefault();
              window.location.assign("./demo-item");
            }}
          >
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src={noti.img}
                alt="Jese image"
              />
            </div>
            <div class="pl-3 w-full text-start">
              <div class="overflow-visible text-gray-500 text-sm mb-1.5">
                <span class="font-semibold text-gray-900">{noti.name}</span>
              </div>
              <div class="text-sm text-[#030391] mb-1">
                <span class="font-bold text-gray-900">Nội dung:</span>{" "}
                {noti.msg}
              </div>

              <div class="text-xs text-[#030391]">
                <span class="font-semibold text-gray-900">Người bán:</span>{" "}
                {noti.vendor}
              </div>
              <div class="text-xs text-blue-600">
                <span class="font-semibold text-gray-900">Cập nhật từ:</span>{" "}
                {noti.time}
              </div>
            </div>
          </a>
        ))}
      </div>

      <a class="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
        <div class="inline-flex items-center ">
          <svg
            class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Xem tất cả
        </div>
      </a>
    </div>
  );
};
