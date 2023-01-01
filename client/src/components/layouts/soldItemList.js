// import { timeAgo } from "../../../service/timeAgo";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input-field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { updateStatus, updateItem } from "../../api/itemApi";

export default function SellingItem({ item }) {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState(item);
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
    let number;
    if (event.target.name === "price") {
      const regex = /([,.])/g;
      number = event.target.value.replace(regex, "");
      setNewItem({
        ...newItem,
        price: number,
      });
    }
  };

  function handleSubmit(e) {
    const ev = e.target.name;
    if (ev === "toggleStatus") {
      updateStatus(
        JSON.parse(localStorage.getItem("bkpass-user"))["token"],
        item._id,
        false,
        () => {
          window.location.reload();
        }
      );
    } else if (ev === "edit") {
      if (done) {
        const packed = {
          _id: item._id,
          title: newItem["title"],
          description: newItem["description"],
          price: newItem["price"],
          status: newItem["status"],
          category: newItem["category"],
        };
        console.log(packed)
        updateItem(
          JSON.parse(localStorage.getItem("bkpass-user"))["token"],
          item._id,
          packed,
          () => {window.location.reload();}
        );
      } else {
        alert("Thông tin thay đổi không hợp lệ hoặc đầy đủ");
      }
    }
  }

  useEffect(() => {
    const { price, title, category, status, desc } = newItem;
    if (category === "Chọn danh mục" || category === "") {
      setDone({ status: false, msg: "Vui lòng chọn danh mục" });
    } else if (status === "") {
      setDone({
        status: false,
        msg: "Vui lòng chọn trạng thái hàng (Mới/Đã sử dụng)",
      });
    } else if (price.match(/^\d+(?:[,]\d+)*VND$/)) {
      setDone({ status: false, msg: "Giá tiền không hợp lệ" });
    } else if (title === "") {
      setDone({ status: false, msg: "Vui lòng điền tên mặt hàng" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
    console.log(newItem);
  }, [newItem]);

  return (
    <div className="max-w-[700px] w-full flex flex-col border-b-2 md:border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
      <div
        className="w-full md:grid md:grid-cols-2"
        style={{ gridTemplateColumns: "4fr 1fr" }}
      >
        <div className="w-full flex flex-row">
          <div className="block w-[120px] h-full px-2">
            <img
              alt="item"
              src={item.image[0]}
              className="align-middle w-[120px]"
            />
          </div>
          <div className="flex flex-col">
            <div
              className="pb-2 h-1/2 text-[20px]"
              style={{ minHeight: "28px" }}
            >
              {item.title}
            </div>
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
            name="view"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#viewModal" + item._id}
            // onClick={handleSubmit}
            className="bg-[#1FC432] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1"
          >
            Xem mặt hàng
          </button>
          <button
            name="edit"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#editModal" + item._id}
            className="bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1"
          >
            Sửa mặt hàng
          </button>
          <button
            name="suspend"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#popupModal" + item._id}
            // onClick={handleSubmit}
            className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1"
          >
            Ngừng bán
          </button>
        </div>
        {/* <ViewModal> */}
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id={"viewModal" + item._id}
          tabIndex="-1"
          aria-labelledby="exampleModalXlLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
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
                <h1 className="font-bold text-3xl">{item.title}</h1>
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
                  {item.status === "used" ? "Đã sử dụng" : "Còn mới"}
                </h3>
                <h3>
                  <span className="text-gray-500">Trạng thái:</span>{" "}
                  {!item.isSelling ? "Đã bán" : "Đang rao bán"}
                </h3>
                <h3>
                  <span className="text-gray-500">Ngày đăng:</span>{" "}
                  {(new Date(item.date)).toUTCString()}
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
          id={"editModal" + item._id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
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
                      <div className="inline-block mb-6 relative w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Danh mục tin đăng
                        </label>
                        <select
                          name="category"
                          value={newItem.category}
                          className="block appearance-none md:w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                          onChange={handleChange}
                        >
                          <option value="book">Sách</option>
                          <option value="electronics">Thiết bị số</option>
                          <option value="other">Vật dụng khác</option>
                        </select>
                      </div>

                      <ul className="flex mt-3 mb-3 md:grid-cols-2">
                        <li className="flex-1">
                          <input
                            className="mr-2 peer"
                            type="radio"
                            id="status-new"
                            name="status"
                            value="new"
                            defaultChecked={item.status == "new"}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="status-new"
                            className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600"
                          >
                            <div className="block">
                              <div className="w-full">Hàng mới</div>
                            </div>
                          </label>
                        </li>
                        <li className="flex-1">
                          <input
                          className="peer"
                          type="radio"
                          id="status-old"
                          name="status"
                          value="used"
                          defaultChecked={item.status == "used"}
                          onChange={handleChange}
                          />
                          <label
                             htmlFor="status-old"
                             className="inline-flex justify-center items-center p-2 md:w-1/2 text-gray-500 bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600"
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
                                    id="title"
                                    name="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    defaultValue={item.title}
                                    placeholder="Tiêu đề cho mặt hàng của bạn"
                                    onChange={handleChange}
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
                                    defaultValue={item.price}
                                    onChange={handleChange}
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
                                    defaultValue={newItem.description}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    onChange={handleChange}
                                    placeholder="Mô tả mặt hàng..."
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                  </div>
                  <div className="modal-footer flex items-center justify-center">
                    <button type="button"
                    data-bs-dismiss="modal"
                    aria-label="close"
                    className="bg-white border-2 rounded-lg text-black active:scale-95 mx-3 my-2 px-2 py-1 md:mx-auto md:my-4">
                      Quay lại
                    </button>
                    <button type="button"
                        name="edit"
                        onClick={handleSubmit}
                        className="bg-blue-500 border-2 border-blue-500 rounded-lg text-black active:scale-95 mx-3 my-2 px-2 py-1 md:mx-auto md:my-4"
                        data-bs-dismiss="modal">
                      Lưu thay đổi
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <PopupModel/> */}
            
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id={"popupModal"+ item._id}
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
                    name="toggleStatus"
                    onClick={handleSubmit}>
                      Đồng ý
                    </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className="w-full flex flex-row items-start md:hidden">
        <button
          name="view"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={"#viewModal" + item._id}
          // onClick={handleSubmit} 
          className='bg-[#1FC432] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>
            <FontAwesomeIcon icon={faEye} color="#fff"></FontAwesomeIcon>
          </button>
        <button 
          name = "edit"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={"#editModal" + item._id}
          // onClick={handleSubmit}
          className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>
            <FontAwesomeIcon icon={faPenToSquare} color="#fff"></FontAwesomeIcon>
          </button>
        <button 
          name = "suspend"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={"#popupModal" + item._id}
          // onClick={handleSubmit}
          className='bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>
            <FontAwesomeIcon icon={faTrashCan} color="#fff"></FontAwesomeIcon>
          </button>
      </div>
    </div>
  );
}
