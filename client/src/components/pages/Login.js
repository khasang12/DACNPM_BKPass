import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../api/APIRoutes";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate()
  const [done, setDone] = useState({ status: false, msg: "empty form" });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // form validation after each modification
  useEffect(() => {
    const { email, password } = values;
    if (email === "") {
      setDone({ status: false, msg: "Vui lòng nhập email" });
    } else if (password === "") {
      setDone({ status: false, msg: "Vui lòng nhập mật khẩu" });
    } else {
      setDone({ status: true, msg: "validated form" });
    }
  }, [values]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", loginRoute);
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else {
        localStorage.setItem("bkpass-user", JSON.stringify(data.user));
        toast.success("Đăng nhập thành công", toastOptions);
        window.location.assign("/");
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
      <h1 className="text-2xl mt-10 mb-5 font-bold">Đăng nhập</h1>
      <form
        action=""
        className="w-full"
        onSubmit={(event) => handleSubmit(event)}
        data-modal-toggle="defaultModal"
        noValidate
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
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
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
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

        <div className="inline-flex">
          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleValidation}
          >
            Đăng nhập
          </button>
        </div>
        <span className="ml-3 reg-change">
          Chưa có tài khoản ?{" "}
          <Link className="text-blue-800" to="/register">
            Đăng kí
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
