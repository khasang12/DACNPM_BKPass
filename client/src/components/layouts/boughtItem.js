import React, { useContext} from "react";
import { unmarkItem } from "../../api/itemApi";
import { userContext } from "../../context/userContext";
import {timeAgo} from '../../service/timeAgo';
const BoughtItem = ({ item }) => {
  console.log(item);
  const user = useContext(userContext).user;
  const handleSubmit = (event) => {
    if (event.target.name === "comment") {
      window.location.assign(`./user/${item.idAuthor}/add-comment`);
    } else if (event.target.name === "toAcc") {
      window.location.assign(`./user/${item.idAuthor}`);
    }
  };
  const handleUnmark = (e) => {
    const event = e.target.name;
    if(event === "toUnmark") {
      unmarkItem(
        user.token,
        item._id,
        () => {
          window.location.reload()
        }
      );
    }
  }
  return (
  <div className="max-w-[700px] w-full flex flex-col border-b-2 md:border-2 m-1 py-2 border-[#1488D8] rounded-2 relative">
    <div className="w-full mb-1 text-black font-bold indent-2 border-b-2">
      Người bán: {item.authorName}
    </div>
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
          <div className="text-sm text-[#1488D8] font-semibold h-2/10">
            {"Đã bán vào lúc "}
            {timeAgo(Date.parse(item.date))}
          </div>
        </div>
        <div className="flex flex-row relative">
          <div className="text-lg text-[#030981] font-italic h-2/10 bottom-0"> 
            
          </div>
        </div>    
      </div>
      <div className="w-full relative hidden md:flex md:flex-col">
        <button 
          name = "toAcc"
          onClick={handleSubmit} 
          className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1'>Liên hệ</button>
        <button 
          name = "comment"
          onClick={handleSubmit}
          className='bg-[#030391] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1'>Đánh giá</button>
        <button
        name="unmark"
        data-bs-toggle="modal"
        data-bs-target={"#checkModal" + item._id}
        className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1">
          Huỷ đánh dấu
        </button>

        <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id={"checkModal" + item._id}
              tabIndex="-2"
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

                  <div className="modal-body relative py-5 mx-10 items-center justify-center text-center font-semibold">
                    Xác nhận huỷ đánh dấu mặt hàng {item.title}?
                  </div>
                  <div className="modal-footer flex flex-row items-center justify-center">
                    <button
                      type="button"
                      className="bg-white text-bleck right-0 w-[120px] rounded-md border-2 font-medium mt-1 md:mx-8 mx-0 scale-90 mb-4 py-1"
                      data-bs-dismiss="modal"
                    >
                      Quay lại
                    </button>
                    <button
                      type="button"
                      className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium mt-1 md:mx-8 mx-0 mb-4 py-1"
                      onClick={handleUnmark}
                      name="toUnmark"
                    >
                      Đồng ý
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div className="w-full flex flex-row items-start md:hidden">
      <button 
        name = "toAcc"
        onClick={handleSubmit} 
        className='bg-[#1488D8] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Liên hệ</button>
      <button 
        name = "comment"
        onClick={handleSubmit}
        className='bg-[#030391] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto py-1'>Đánh giá</button>
      <button
      name="unmark"
      data-bs-toggle="modal"
      data-bs-target={"#checkModal" + item._id}
      className="bg-[#E95959] text-white right-0 w-[120px] rounded-md font-medium my-1 mx-auto md:mx-0 px-1 py-1">
        Huỷ đánh dấu
      </button>
    </div>
  </div>
);
}; export default BoughtItem;