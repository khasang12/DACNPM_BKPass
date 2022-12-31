// import { timeAgo } from "../../../service/timeAgo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"

const DoneModal = () => {
  <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div class="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                  <form class="space-y-6" action="#">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                      </div>
                      <div class="flex justify-between">
                          <div class="flex items-start">
                              <div class="flex items-center h-5">
                                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                              </div>
                              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div> 
}
          

export default function SellingItem ({ item }) {
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [newItem, setNewItem] = useState(item);
  // console.log(newItem);

  const handleChange = (event) => {
    setNewItem({
        ...newItem,
        [event.target.name]: event.target.value,
    });
    let number;
    if (event.target.name === "price") {
        const regex = /([,.])/g
        number = event.target.value.replace(regex, "");
        setNewItem({
        ...newItem,
        price: number,
        });
    }
  };
  return (
    <div className="max-w-[700px] w-full flex flex-col border-b-2 md:border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
      <div className="w-full md:grid md:grid-cols-2" style={{"gridTemplateColumns":"4fr 1fr"}}>
        <div className="w-full flex flex-row">
          <div className="block w-[120px] h-full px-2">
            <img
              alt="item"
              src={item.image[0]}
              className="align-middle w-[120px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-2 h-1/2 text-[20px]" style={{minHeight: "28px"}}>{item.title}</div>
            <div className="flex flex-row text-lg text-[#030981] h-3/10 relative"> 
              <div className="text-left font-semibold text-[16px]">
                {"Giá: "}
                {item.price}
              </div>
            </div>
          </div>  
        </div>
        <div className="w-full relative hidden md:flex md:flex-col">
          <button 
            name = "view"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#viewModal"
            // onClick={handleSubmit} 
            className='bg-[#76EA84] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1'>
              Xem mặt hàng
          </button>
          <button 
            name="edit"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() =>{setNewItem(item); console.log(newItem)} }
            className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1'>Sửa mặt hàng</button>
          <button 
            name ="suspend"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#popupModal"
            // onClick={handleSubmit}
            className='bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1'>Ngừng bán</button>
          </div>
          {/* <ViewModal> */}
          <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="viewModal"
              tabIndex="-1"
              aria-labelledby="exampleModalXlLabel"
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalXlLabel"
                    >
                      Xem thông tin mặt hàng
                    </h5>

                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body relative p-4 leading-loose">
                    <div className="flex flex-row">

                    </div>
                    <h1 className="font-bold text-4xl">{item.header}</h1>
                    <h1 className="font-bold text-3xl text-blue-600 leading-loose">

                    </h1>
                    <h3>
                      <span className="flex flex-row items-center">
                        <p className="text-gray-500 mr-5">Tag:</p>
                        <p className="px-2 py-1 bg-green-300 rounded mr-5 hover:bg-gray-300">
                          {item.category}
                        </p>
                      </span>
                    </h3>
                    <h3>
                      <span className="text-gray-500">Tình trạng:</span>{" "}
                      {item.status === "used" ? "Đã sử dụng": "Còn mới"}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Trạng thái:</span>{" "}
                      {!item.isSelling ? "Đã bán" : "Đang rao bán"}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Ngày đăng:</span>{" "}
                      {new Date().toUTCString()}
                    </h3>
                    <h3>
                      <span className="text-gray-500">Mô tả</span>
                    </h3>
                    <p className="leading-5 pr-10 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* <EditModal /> */}
          <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="editModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalXlLabel"
                    >
                      Sửa thông tin mặt hàng
                    </h5>
                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body relative p-4 leading-loose">
                    {/* <div className="w-4/5 flex flex-row">
                        {newItem.image.map((image) => 
                          {
                            return(
                              <img className="max-w-[125px] mx-2 my-2"
                              src={image} alt="ssa" />
                          )})
                        }
                    </div> */}
                    <div className="w-full">
                        <div className="w-full px-2">
                            <form className="w-full">
                                <div className="inline-block mb-7 relative w-full">
                                    <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                    >
                                    Danh mục tin đăng
                                    </label>
                                    <select
                                    name="category"
                                    // onChange={(e) => handleChange(e)}
                                    value={newItem.category}
                                    className="block appearance-none md:w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    >
                                    <option>Sách</option>
                                    <option>Thiết bị số</option>
                                    <option>Vật dụng khác</option>
                                    </select>
                                </div>
                                <ul className="flex w-2/3 mt-3 mb-5 md:grid-cols-2">
                                    <li className="flex-1">
                                    <input
                                        type="radio"
                                        id="status-new"
                                        name="item_status"
                                        value={newItem.status === "used"? "Đã sử dụng":"Hàng mới"}
                                        className="hidden peer"
                                        // onChange={(e) => handleChange(e)}
                                        required
                                    />
                                    <label
                                        htmlFor="status-new"
                                        className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                                    >
                                        <div className="block">
                                        <div className="w-full">Hàng mới</div>
                                        </div>
                                    </label>
                                    </li>
                                    <li className="flex-1">
                                    <input
                                        type="radio"
                                        id="status-old"
                                        name="item_status"
                                        value="Đã sử dụng"
                                        // onChange={(e) => handleChange(e)}
                                        className="hidden peer"
                                    />
                                    <label
                                        htmlFor="status-old"
                                        className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                                    >
                                        <div className="block">
                                        <div className="w-full">Đã sử dụng</div>
                                        </div>
                                    </label>
                                    </li>
                                </ul>

                                <div className="mb-6">
                                    <label
                                    htmlFor="header"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                    Tiêu đề (*)
                                    </label>
                                    <input
                                    type="text"
                                    id="header"
                                    name="header"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={newItem.title}
                                    onClick={console.log(newItem)}
                                    placeholder="Tiêu đề cho mặt hàng của bạn"
                                    onChange={(e) => handleChange(e)}
                                    required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                    Giá (*)
                                    </label>
                                    <CurrencyInput
                                    id="price"
                                    name="price"
                                    placeholder="Nhập giá tiền"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    decimalsLimit={2}
                                    // value={parseFloat(item.price)}
                                    value={newItem.price}
                                    onChange={(e) => handleChange(e)}
                                    suffix=" VND"
                                    />
                                </div>  

                                <div className="mb-6">
                                    <label
                                    htmlFor="desc"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                    Mô tả (dưới 100 từ)
                                    </label>
                                    <textarea
                                    id="desc"
                                    rows="4"
                                    name="desc"
                                    value={newItem.description}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Mô tả mặt hàng..."
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <PopupModel/> */}
            
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="popupModal"
              tabIndex="-1"
              aria-labelledby="exampleModalXlLabel"
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body relative py-5 items-center justify-center text-center font-semibold">
                    Xác nhận ngừng bán sản phẩm {item.title}?
                  </div>
                  <div className="modal-footer flex flex-row items-center justify-center">
                    <button type="button" 
                    className="bg-white text-bleck right-0 w-[120px] rounded-md border-2 font-medium my-1 md:mx-8 mx-0 scale-90" 
                    data-bs-dismiss="modal">
                      Quay lại
                    </button>
                    <button type="button" 
                    className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 md:mx-8 mx-0"
                    >
                      Đồng ý
                    </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className="w-full flex flex-row items-start md:hidden">
        <button 
          name = "view"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#viewModal"
          // onClick={handleSubmit} 
          className='bg-[#76EA84] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>
            Xem mặt hàng
          </button>
        <button 
          name = "edit"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          // onClick={handleSubmit}
          className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Sửa mặt hàng</button>
        <button 
          name = "suspend"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#popupModal"
          // onClick={handleSubmit}
          className='bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Ngừng bán</button>
      </div>
    </div>
  );
}
