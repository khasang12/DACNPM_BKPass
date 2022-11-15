import avatar from "../../assets/img/avatar.png";
import ReactStars from "react-rating-stars-component";

import comment from "./comment.json";
export function Info() {
  let averageStar = 0;
  for (let index = 0; index < comment.length; index++) {
    let star = comment[index].star;
    averageStar += star;
  }
  averageStar = averageStar / comment.length;
  return (
    <div class="bg-blue-50 relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl pt-16 mt-5">
      <div class="px-6 lg:my-5">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div class="relative">
              <img
                src="https://www.pngitem.com/pimgs/m/576-5768680_avatar-png-icon-person-icon-png-free-transparent.png"
                class="shadow-xl rounded-full align-middle border-none w-auto h-auto max-w-[150px]"
              />
            </div>
          </div>
          <div class="w-full text-center md:mt-10">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {comment.length}
                </span>
                <span class="text-sm text-slate-400">Đánh giá</span>
              </div>
            </div>
            <div class="grid place-items-center">
              <ReactStars
                class="flex"
                count={5}
                value={Math.round(averageStar)}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </div>
        <div class="text-center mt-2">
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
            Sang Vinh Nguyen
          </h3>
          <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
            HCMUT, CS2
          </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <p class="font-light leading-relaxed text-slate-600 mb-4">
                Số điện thoại: 0379890021
              </p>
              <p class="font-light leading-relaxed text-slate-600 mb-4">
                Contact me:
              </p>
              <div className="flex lg:justify-center mb-5 gap-5">
                <svg
                  class="w-6 h-6 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg
                  class="w-6 h-6 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg
                  class="w-6 h-6 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
          </div>
          <button
            className="align-middle p-3 mr-3 rounded-md  bg-blue-500 hover:bg-blue-700 text-white ml-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.assign("./add-comment");
            }}
          >
            Thêm đánh giá
          </button>
        </div>
      </div>
    </div>
  );
}
