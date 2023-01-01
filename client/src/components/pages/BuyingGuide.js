import "../../assets/styles/Guide.css";
import pic1 from "../../assets/img/buying1.png"
import pic2 from "../../assets/img/buying2.png"
export default function BuyingGuidePage() {
    return (
        <div className="content">
            <div className="title">
                Hướng dẫn mua hàng
            </div>
            <div>
                <div className="guide">
                    <ul>
                        <li>
                            Để lựa chọn được món hàng cần mua, khách hàng nhập vào thanh tìm kiếm món hàng mình muốn mua.

                        </li>
                        <li>
                            Ví dụ, khách hàng muốn mua một cuốn sách đại cương, khách hàng nhập vào thanh tìm kiếm <strong>"đại cương".</strong>

                        </li>
                        <li>
                            Kết quả tìm kiếm sẽ hiển thị ra các món hàng liên quan đến từ khóa <strong>"đại cương".</strong>
                            <img src={pic1}></img>

                        </li>
                        <li>
                            Sau đó, người dùng bấm vào mặt hàng mình muốn lựa chọn. Màn hình sẽ hiển thị ra thông tin chi tiết của mặt hàng đó.
                            <img src={pic2}></img>

                        </li>

                        <li>
                            Để mua hàng, người dùng bấm vào nút <strong>"Đánh dấu"</strong> để lưu lại sản phẩm, sau đó vào phần "Xem thông tin"
                            để xem thông tin chi tiết của người bán, bao gồm tên, thông tin liên lạc online.

                        </li>
                        <li>
                            Sau khi đã có thông tin của người bán, người dùng có thể liên hệ với người bán để thỏa thuận về giá cả và thời gian giao hàng.
                        </li>
                    </ul>
                    <h6>Vẫn còn thắc mắc? Hãy liên hệ với chúng tôi&ensp;<a href="/dev">tại đây</a> </h6>
                </div>
            </div>
        </div>

    )
}