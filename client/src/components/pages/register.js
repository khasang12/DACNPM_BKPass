import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    image: "",
    gender: "",
    phoneNum: "",
  });

  // form validation after each modification
  useEffect(() => {
    const { name, email, password, repassword, image, gender, phoneNum } =
      values;
    console.log(gender);
    if (name === "") {
      setDone({ status: false, msg: "Vui lòng nhập họ tên" });
    } else if (gender === "Chọn giới tính") {
      setDone({ status: false, msg: "Vui lòng chọn giới tính" });
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setDone({ status: false, msg: "Vui lòng nhập lại email do sai cú pháp" });
    } else if (password.length < 8 || password.length > 30) {
      setDone({ status: false, msg: "Độ dài password từ 8 đến 30" });
    } else if (!phoneNum.match(/^\d+$/)) {
      setDone({
        status: false,
        msg: "Vui lòng điền số điện thoại đúng cú pháp",
      });
    } else if (password === "") {
      setDone({ status: false, msg: "Vui lòng nhập mật khẩu" });
    } else if (repassword === "") {
      setDone({ status: false, msg: "Vui lòng xác nhận mật khẩu" });
    } else if (repassword !== password) {
      setDone({ status: false, msg: "Xác nhận mật khẩu không trùng khớp" });
    } else if (
      !image.match(
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
      )
    ) {
      setDone({
        status: false,
        msg: "Vui lòng nhập đường dẫn hợp lệ",
      });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validation", registerRoute);
      // const { password, username, email } = values;
      // const { data } = await axios.post(registerRoute, {
      //   username,
      //   email,
      //   password,
      // });
      // if (data.status === false) {
      //   toast.error(data.msg, toastOptions);
      // } else {
      //   localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      //   navigate("/");
      // }
      console.log("OK");
    }
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleValidation = () => {
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    if (done["status"] === false) {
      toast.error(done["msg"], toastOptions);
      return false;
    }
    return true;
  };
  return (
    <div className="flex flex-col bg-blue-50 px-5 md:px-40 pb-10">
      <h1 className="text-2xl mt-10 mb-5 font-bold">Đăng ký tài khoản</h1>
      <form
        action=""
        className="w-full"
        onSubmit={(event) => handleSubmit(event)}
        data-modal-toggle="defaultModal"
        noValidate
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Họ và tên (*)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập họ tên..."
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="inline-block mb-7 relative w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="gender"
          >
            Giới tính
          </label>
          <select
            name="gender"
            onChange={(e) => handleChange(e)}
            className="block appearance-none md:w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Chọn giới tính</option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Không tiết lộ</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email (*)
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập email..."
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phoneNum"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Số điện thoại (*)
          </label>
          <input
            type="text"
            id="phoneNum"
            name="phoneNum"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập số điện thoại..."
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu (*)
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập mật khẩu..."
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="repassword"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Xác nhận mật khẩu (*)
          </label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập lại mật khẩu của bạn..."
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Link ảnh đại diện
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập đường dẫn hình ảnh..."
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="inline-flex">

          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle={done["status"] ? "modal" : ""}
            data-bs-target={done["status"] ? "#popup-modal" : ""}
            onClick={handleValidation}
          >
            Đăng kí
          </button>
        </div>
        <span className="ml-3 reg-change">
          Đã có tài khoản ? <Link className="text-blue-800" to="/login">Đăng nhập</Link>
        </span>
      </form>
      {/* Confirmation */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="popup-modal"
        data-bs-backdrop="static"
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
                  Xác nhận đăng kí ?
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#success-modal"
                >
                  Đăng kí
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

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="success-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="success-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="relative justify-center bg-white rounded-lg shadow">
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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                >
                  <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>

                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Đăng kí thành công
                </h3>
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  onClick={handleSubmit}
                  name="profile"
                  className="text-white mb-5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-1 sm:mr-2"
                >
                  Xem tài khoản
                </button>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="submit"
                  onClick={handleSubmit}
                  name="homepage"
                  className="text-gray-500 mb-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Trở về trang chính
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
