import "../assets/styles/navbar.css"
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export function Navbar() {
    const [searchStr, setSearchStr] = useState("");
    const search = (e) => {
        e.preventDefault();
        if (searchStr !== "") {
            window.location.assign(`./search?s=${searchStr}`)
        }
    }

    const onSearchBoxChange = (e) => {
        setSearchStr(e.target.value);
    }

    const onSearchBoxKeyDown = (e) => {
        if (e.key == "Enter"){
            e.preventDefault();
            if (searchStr !== "") {
                window.location.assign(`./search?s=${searchStr}`)
            }
        }
    }

    return (
        <div className="navbar w-100 text-center lg:text-left bg-white-100 text-black font-medium font-[Inter var] border-b-2">
            <div className="flex flex-row w-100 justify-between">
                <div>
                    <h6 className="
                        font-semibold
                        mb-4
                        flex
                        items-center
                        justify-center
                        md:justify-start
                    ">
                        <img src={logo} className="w-20" alt="logo"></img>
                        <i className="text-xl font-bold text-[#1488D8]">BKPass</i>
                    </h6>
                </div>
                <div className="grow flex flex-col justify-start mr-3 ml-3">
                    <nav className="flex flex-row justify-between w-100 mt-1 mb-2">
                        <button className="text-[#030391] hover:text-[#1488D8]" 
                            onClick={(e) => {
                                e.preventDefault()
                                window.location.assign("./")
                            }}
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-2"></FontAwesomeIcon>
                            Trang chủ
                        </button>
                        <button className="text-[#030391] hover:text-[#1488D8]">
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2"></FontAwesomeIcon>
                            Đơn hàng
                        </button>
                        <button className="text-[#030391] hover:text-[#1488D8]">
                            <FontAwesomeIcon icon={faBell} className="mr-2"></FontAwesomeIcon>
                            Thông báo
                        </button>
                        <button className="text-[#030391] hover:text-[#1488D8]">
                            <FontAwesomeIcon icon={faUser} className="mr-2"></FontAwesomeIcon>
                            Đăng nhập
                        </button>
                    </nav>
                    <div className="flex flex-row justify-between w-100">
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
                            Đăng bán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}