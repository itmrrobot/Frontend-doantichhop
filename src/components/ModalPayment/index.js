import styles from "./ModalPayment.module.scss";
import classNames from "classnames/bind";
import vnpayLogo from "../../assets/img/vnpay.png";
import cashLogo from "../../assets/img/nhanhang.png";

const cx = classNames.bind(styles);

function ModalPayment({...props}) {
    const {setIsClickPlaceOrder} = props;

    const handleCliclModal = (e) => {
        e.stopPropagation();
        setIsClickPlaceOrder(false);
    }
  return (
    <div className={cx("modal-wrap")}>
      <div className={cx("modal")} onClick={handleCliclModal}></div>
      <div className={cx("modal-content")}>
        <div className={cx("item")}>
          <img src={vnpayLogo} alt="vnpay" className={cx("img")} />
          <span className={cx("text")}>Thanh toán bằng vnpay</span>
        </div>
        <div className={cx("item")}>
          <img src={cashLogo} alt="vnpay" className={cx("img")} />
          <span className={cx("text")}>Thanh toán khi nhận hàng</span>
        </div>
      </div>
    </div>
  );
}

export default ModalPayment;
