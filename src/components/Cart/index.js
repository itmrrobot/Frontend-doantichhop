import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import imgProduct from "../../assets/img/img-in-cart.png";
import TotalOrder from "../TotalOrder";
import ModalPayment from "../ModalPayment";
import { useState } from "react";

const cx = classNames.bind(styles);

function Cart() {
    const [isClickPlaceOrder,setIsClickPlaceOrder] = useState(false);
    return(
        <div className={cx("wrap")}>
            <h3 className={cx("title")}>Cart</h3>
            <div className={cx("list")}>
                <div className={cx("item")}>
                    <img src={imgProduct} alt="" className={cx("img")}/>
                    <div className={cx("wrapper")}>
                        <div className={cx("wrap-name-desc")}>
                            <h5 className={cx("name")}>Nike Air Max 95</h5>
                            <span className={cx("category")}>Men’s Shoes</span>
                            <span className={cx("desc")}>1 Colour</span>
                        </div>
                        <div className={cx("wrap-price-button")}>
                            <span className={cx("price")}>$71.56</span>
                            <div className={cx("btn-quantity")}>
                                <span className={cx("btn-decrease")}>-</span>
                                <span className={cx("quantity-number")}>5</span>
                                <span className={cx("btn-increase")}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isClickPlaceOrder&&<ModalPayment setIsClickPlaceOrder={setIsClickPlaceOrder}/>}
            <TotalOrder setIsClickPlaceOrder={setIsClickPlaceOrder}/>
        </div>
    )
}

export default Cart;