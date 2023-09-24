import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import share from "../../assets/img/share.png";
import bookmark from "../../assets/img/book-mark.png";
import love from "../../assets/img/love.png";
import star from "../../assets/img/star.png";
import message from "../../assets/img/message.png";
import cart from "../../assets/img/icon-cart.png";
import deliveryIcon from "../../assets/img/delivery.png";
import returnIcon from "../../assets/img/return.png";
import color1 from "../../assets/img/Group 5.png";
import color2 from "../../assets/img/Group 6.png";
import color3 from "../../assets/img/Group 7.png";
import color4 from "../../assets/img/Group 8.png";
import color5 from "../../assets/img/Group 9.png";
import Rectangle4 from "../../assets/img/Rectangle4.png";
import Rectangle5 from "../../assets/img/Rectangle 5.png";
import Rectangle6 from "../../assets/img/Rectangle 6.png";
import Rectangle7 from "../../assets/img/Rectangle 7.png";
import Rectangle8 from "../../assets/img/Rectangle 8.png";
import RelatedProduct from "../RelatedProduct";

const cx = classNames.bind(styles);

function Product() {
    return(
        <div className={cx("wrap")}>
            <div className={cx("content")}>
                <div className={cx("left")}>
                    <img src={Rectangle4} alt="product-img" className={cx("img")}/>
                    <div className={cx("wrap-product-imgs")}>
                        <img src={Rectangle5} alt="img-detail" className={cx("other-img")}/>
                        <img src={Rectangle6} alt="img-detail" className={cx("other-img")}/>
                        <img src={Rectangle7} alt="img-detail" className={cx("other-img")}/>
                        <img src={Rectangle8} alt="img-detail" className={cx("other-img")}/>
                    </div>
                </div>
                <div className={cx("right")}>
                    <div className={cx("info")}>
                        <div className={cx("wrap-name-desc")}>
                            <h2 className={cx("title")}>Embrace Sideboard</h2>
                            <p className={cx("desc")}>Teixeira Design Studio</p>
                        </div>
                        <div className={cx("group")}>
                            <div className={cx("like")}>
                                <img src={love} className={cx("love-icon")} alt="icon"/>
                                <span className={cx("number")}>109</span>
                            </div>
                            <button className={cx("btn-bookmark")}>
                                <img src={bookmark} className={cx("icon")} alt="icon"/>
                            </button>
                            <button className={cx("btn-share")}>
                                <img src={share} className={cx("icon")} alt="icon"/>
                            </button>
                        </div>
                    </div>
                    <div className={cx("wrapper")}>
                        <div className={cx("wrap-price")}>
                            <span className={cx("price")}>$71.56</span>
                            <span className={cx("unused-price")}>$71.56</span>
                        </div>
                        <div className={cx("wrap-reviews")}>
                            <div className={cx("wrap-reviews-message")}>
                                <div className={cx("reviews-star")}>
                                    <img src={star} alt="" className={cx("reviews-icon")}/>
                                    <span className={cx("reviews-number")}>4.8</span>
                                </div>
                                <div className={cx("reviews-message")}>
                                    <img src={message} alt="" className={cx("reviews-icon")}/>
                                    <span className={cx("reviews-number-message")}>67 Reviews</span>
                                </div>
                            </div>
                            <div className={cx("recommended")}>
                                <span className={cx("recommended-number")}>93% </span>
                                <span className={cx("recommended-text")}>of buyers have recommended this.</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("wrap-colors")}>
                        <p className={cx("colors-text")}>Choose a color</p>
                        <div className={cx("list-colors")}>
                            <img src={color1} alt="" className={cx("color-item")}/>
                            <img src={color2} alt="" className={cx("color-item")}/>
                            <img src={color3} alt="" className={cx("color-item")}/>
                            <img src={color4} alt="" className={cx("color-item")}/>
                            <img src={color5} alt="" className={cx("color-item")}/>
                        </div>
                    </div>
                    <div className={cx("wrap-size")}>
                        <p className={cx("size-text")}>Choose a size</p>
                        <div className={cx("group-radio")}>
                            <div className={cx("radio-item")}>
                                <input type="radio" className={cx("radio-input")}/>
                                <span className={cx("radio-text")}>Small</span>
                            </div>
                            <div className={cx("radio-item")}>
                                <input type="radio" className={cx("radio-input")}/>
                                <span className={cx("radio-text")}>Medium</span>
                            </div>
                            <div className={cx("radio-item")}>
                                <input type="radio" className={cx("radio-input")}/>
                                <span className={cx("radio-text")}>Large</span>
                            </div>
                            <div className={cx("radio-item")}>
                                <input type="radio" className={cx("radio-input")}/>
                                <span className={cx("radio-text")}>Extra Large</span>
                            </div>
                            <div className={cx("radio-item")}>
                                <input type="radio" className={cx("radio-input")}/>
                                <span className={cx("radio-text")}>XXL</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("wrap-btn")}>
                        <div className={cx("btn-quantity")}>
                            <span className={cx("btn-decrease")}>-</span>
                            <span className={cx("quantity-number")}>5</span>
                            <span className={cx("btn-increase")}>+</span>
                        </div>
                        <div className={cx("btn-addToCart")}>
                            <img src={cart} alt="" className={cx("icon-cart")}/>
                            <span className={cx("cart-text")}>Add To Cart</span>
                        </div>
                    </div>
                    <div className={cx("wrap-policy")}>
                        <div className={cx("policy-item")}>
                            <img src={deliveryIcon} alt="" className={cx("policy-icon")}/>
                            <div className={cx("policy-content")}>
                                <h3 className={cx("policy-title")}>Free Delivery</h3>
                                <p className={cx("policy-text")}>Enter your Postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className={cx("policy-item")}>
                            <img src={returnIcon} alt="" className={cx("policy-icon")}/>
                            <div className={cx("policy-content")}>
                                <h3 className={cx("policy-title")}>Return Delivery</h3>
                                <p className={cx("policy-text")}>Free 30 days Delivery Return. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </div>
    )
}

export default Product;