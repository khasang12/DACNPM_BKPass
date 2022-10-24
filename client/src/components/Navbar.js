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

export function Navbar() {
  const [searchStr, setSearchStr] = useState("");
  const search = (e) => {
    e.preventDefault();
    if (searchStr !== "") {
      window.location.assign(`./search?s=${searchStr}`);
    }
  };

  const onSearchBoxChange = (e) => {
    setSearchStr(e.target.value);
  };


  const onSearchBoxKeyDown = (e) => {
        if (e.key === "Enter"){
            e.preventDefault();
            if (searchStr !== "") {
                window.location.assign(`./search?s=${searchStr}`)
            }
        }
    }
  };

    const onClickMenuBtn = () => {
        const menuList = document.getElementById("menuDropdown");
        if (menuList.classList.contains("hidden")) {
            menuList.classList.remove("hidden");
        }
        else {
            menuList.classList.add("hidden");
        }
    }

    return (
        <div className="navbar w-100 text-center md:text-left bg-white-100 text-black font-medium font-[Inter var] border-b-2 t-2">
            <div className="flex flex-row w-100 justify-between">
                <div>
                    <h6 className="
                        hidden sm:block
                        font-semibold
                        mb-4
                        flex
                        items-center
                        justify-center
                        md:justify-start
                    ">
                        <img src={logo} className="w-20" alt="logo"></img>
                    </h6>
                </div>
                <div className="grow flex flex-col justify-start mr-3 ml-3">
                    <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                        <div class="block md:hidden flex flex-row justify-end ">
                            <button class="relative flex items-center px-3 py-2 border rounded text-teal-200 border-[#030391] text-[#030391] mr-2"
                                id="menuBtn"
                                onClick={onClickMenuBtn}
                            >
                                <FontAwesomeIcon icon={faHome} color="#030391"></FontAwesomeIcon>
                            </button>
                        </div>
                        <div 
                            className="hidden md:flex
                            bg-slate-100 md:bg-white
                            border-[#030391] rounded border-2 md:border-0
                            absolute right-2 md:static
                            md:flex-grow 
                            flex flex-col md:flex-row justify-between 
                            w-80 mt-1 mb-1" 
                            id="menuDropdown"
                        >
                            <button className="text-[#030391] hover:text-[#1488D8] text-end mr-2 mt-4 md:mt-0 md:mr-0 " 
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.location.assign("./")
                                }}
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-2"></FontAwesomeIcon>
                                Trang chủ
                            </button>
                            <button className="text-[#030391] hover:text-[#1488D8] text-end mr-2 mt-4 md:mt-0 md:mr-0">
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2"></FontAwesomeIcon>
                                Đơn hàng
                            </button>
                            <button className="text-[#030391] hover:text-[#1488D8] text-end mr-2 mt-4 md:mt-0 md:mr-0">
                                <FontAwesomeIcon icon={faBell} className="mr-2"></FontAwesomeIcon>
                                Thông báo
                            </button>
                            <button className="text-[#030391] hover:text-[#1488D8] text-end mr-2 mt-4 md:mt-0 md:mr-0">
                                <FontAwesomeIcon icon={faUser} className="mr-2"></FontAwesomeIcon>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-100 mb-2 mt-2">
                        <div className="w-3/4 flex flex-row items-center bg-slate-200 rounded-full pl-2 pr-2 pt-1 pb-1">
                            <input placeholder="Tìm kiếm mặt hàng"
                                className="grow bg-transparent outline-0"
                                type="text"
                                width="40em"
                                onChange={onSearchBoxChange}
                                onKeyDown={onSearchBoxKeyDown}
                            ></input>
                            <div>
                                <button onClick={search}>
                                    <FontAwesomeIcon icon={faSearch} color="#1488D8"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                        <button className="align-middle mr-3 rounded-full bg-[#030391] text-white pl-3 pr-3 ml-2"
                            onClick={(e) => {
                                e.preventDefault()
                                window.location.assign("./add-item")
                            }}
                        >
                            Đăng
                        </button>
                    </div>
                </div>
            </div>
            <button
              className="align-middle mr-3 rounded-full bg-[#030391] text-white pl-3 pr-3 ml-2"
              onClick={(e) => {
                e.preventDefault();
                window.location.assign("./add-item");
              }}
            >
              Đăng bán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
