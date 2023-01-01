import "../../assets/styles/Guide.css";
import selling from "../../assets/img/selling.png";
import fillingInfo from "../../assets/img/fillingInfo.png";
import success from "../../assets/img/success.png";
import success1 from "../../assets/img/success1.png";

export default function SellingGuide() {
  return (
    <div className="content">
      <div className="title">Hướng dẫn đăng bán mặt hàng</div>
      <ul className="guide-page">
        Bên cạnh thanh tìm kiếm, bạn có thể thấy nút <strong>"Đăng"</strong> ở
        góc phải trên cùng của trang web. Bấm vào nút này để đăng sản phẩm của
        bạn lên trang web.
        <li>
          Lúc này, bạn sẽ được chuyển đến trang đăng sản phẩm. Bạn cần điền đầy
          đủ thông tin về sản phẩm của mình vào các miền.
          <img src={selling}></img>
        </li>
        <li>
          Sau khi điền đầy đủ thông tin, trang web sẽ tự động kiểm tra xem bạn
          đã điền đầy đủ thông tin chưa. Dưới đây là hình ảnh hợp lệ sau khi
          điền đầy đủ thông tin.
          <img src={fillingInfo}></img>
        </li>
        <li>
          Tiếp theo, tiến hành đăng sản phẩm lên trang web. Và đây là hình ảnh
          thể hiện việc đăng sản phẩm thành công.
          <img src={success}></img>
          <img src={success1}></img>
        </li>
      </ul>
      Như vậy là bạn đã biết được cách đăng sản phẩm lên trang web. Niceee ❤️
      <h6>Vẫn còn thắc mắc? Hãy liên hệ với chúng tôi&ensp;<a href="/dev">tại đây</a> </h6>

    </div>
  );
}
