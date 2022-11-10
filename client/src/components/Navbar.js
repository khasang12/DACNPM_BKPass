import "../assets/styles/navbar.css";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBell,
  faBriefcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export function Navbar() {
  const [searchStr, setSearchStr] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const search = (e) => {
    e.preventDefault();
    if (searchStr !== "") {
      window.location.assign(`./search?s=${searchStr}`);
    }
  };

  const handleDropdown = () => {
    setDropDown((dropDown) => !dropDown);
    console.log(dropDown);
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
              {/* <Dropdown
                className="text-[#030391] hover:text-[#1488D8] text-start pr-2 pt-4 md:pt-0 md:pr-0 w-full"
                autoClose="outside"
                align="end"
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-2"
                ></FontAwesomeIcon>
                <Dropdown.Toggle>Đơn hàng</Dropdown.Toggle>
                <Dropdown.Menu className="w-72 bg-white rounded border border-[#1488d8]">
                  <Dropdown.Item
                    href="/buy-history"
                    className="w-full bg-white pr-2 mt-3 mb-3"
                  >
                    Đơn mua
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/sell-history"
                    className="w-full bg-white pr-2 mt-3 mb-3"
                  >
                    Đơn bán
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <button
                className="text-[#030391] hover:text-[#1488D8] p-1 md:text-start lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full"
                onClick={handleDropdown}
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-2"
                ></FontAwesomeIcon>
                Đơn hàng
                {dropDown && <DropdownSection />}
              </button>

              <button className="text-[#030391] hover:text-[#1488D8] p-1 md:text-center lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full">
                <FontAwesomeIcon
                  icon={faBell}
                  className="mr-2"
                ></FontAwesomeIcon>
                Thông báo
              </button>
              <button className="text-[#030391] hover:text-[#1488D8] p-1 md:text-center lg:pr-2 lg:pt-4 md:pt-0 md:pr-0 w-full">
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-2"
                ></FontAwesomeIcon>
                Tài khoản
              </button>
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
      class="left-28 bottom-10 md:bottom-auto md:left-auto absolute md:justify-end z-50 w-full lg:w-44 bg-white rounded divide-y divide-gray-100 shadow"
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
            Đơn bán
          </a>
        </li>
        <li>
          <a
            href="/sell-history"
            class="block py-2 px-4 hover:bg-gray-100 hover:text-[#1488D8] text-[#030391]"
          >
            Đơn mua
          </a>
        </li>
      </ul>
    </div>
  );
};
