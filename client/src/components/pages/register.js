import { useState} from "react";
const Register = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('nu');
  return (
    <div className="create">
      <h2>Đăng ký tài khoản </h2>
      <form>
        <label>Họ và tên (*)</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Email(*):</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Số điện thoại (*)</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Mã số sinh viên</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <label>Mật khẩu (*)</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Giới tính (*) </label>
        <select
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="nam">Nam</option>
          <option value="nu">Nữ</option>
          <option value="secret">Không muốn tiết lộ</option>
        </select>
       <uploadAvatar> </uploadAvatar>
        <button>Huỷ đăng ký</button>
        <button>Đăng ký</button>
      </form>
    </div>
  );
}
 
export default Register;