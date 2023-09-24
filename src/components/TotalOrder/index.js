import styles from "./TotalOrder.module.scss";
import classNames from "classnames/bind";
import ticketVoucher from "../../assets/img/carbon_ticket.png";

const cx = classNames.bind(styles);

function TotalOrder({...props}) {
  const {setIsClickPlaceOrder} = props;
  const handlePlaceOrder = () => {
    setIsClickPlaceOrder(true)
  }

  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>
        <h4 className={cx("title")}>Pricing & shipping fee</h4>
        <div className={cx("wrapper")}>
          <div className={cx("item")}>
            <span className={cx("name")}>Subtotal (3 items)</span>
            <span className={cx("price")}>$300</span>
          </div>
          <div className={cx("item")}>
            <span className={cx("name")}>Shipping fee</span>
            <span className={cx("price")}>$1</span>
          </div>
          <div className={cx("item")}>
            <span className={cx("name")}>Discount</span>
            <span className={cx("price")}>-$15</span>
          </div>
          <div className={cx("item")}>
            <div className={cx("voucher")}>
              <img
                src={ticketVoucher}
                className={cx("icon-voucher")}
                alt="icon-voucher"
              />
              <span className={cx("name")}>Add voucher</span>
              <span className={cx("code-voucher")}>CS 445</span>
            </div>
            <span className={cx("price")}>-$15</span>
          </div>
          <div className={cx("item")}>
            <span className={cx("name")}>Total</span>
            <span className={cx("price")}>$283</span>
          </div>
        </div>
      </div>
      <div className={cx("wrap-button")}>

      <button className={cx("btn-placeOrder")} onClick={handlePlaceOrder}>Place order</button>
      </div>
    </div>
  );
}

export default TotalOrder;
