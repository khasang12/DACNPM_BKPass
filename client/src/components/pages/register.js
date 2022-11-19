import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../../api/APIRoutes";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate()
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [register, setRegister] = useState(false)
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", registerRoute);
      const { name, email, password, image, gender, phoneNum } = values;
      console.log(values)
      const { data } = await axios.post(registerRoute, {
        name,
        email,
        password,
        image,
        gender,
        phoneNum,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else {
        localStorage.setItem("bkpass-user", JSON.stringify(data.user));
        setRegister(true)
        toast.success("Đăng kí tài khoản thành công", toastOptions);
        navigate("/login")
      }
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
            data-bs-toggle={register ? "modal" : ""}
            data-bs-target={register ? "#popup-modal" : ""}
            onClick={handleValidation}
          >
            Đăng kí
          </button>
        </div>
        <span className="ml-3 reg-change">
          Đã có tài khoản ?{" "}
          <Link className="text-blue-800" to="/login">
            Đăng nhập
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export default Register;
