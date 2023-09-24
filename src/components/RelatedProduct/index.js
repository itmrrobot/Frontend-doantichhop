import styles from "./RelatedProduct.module.scss";
import classNames from "classnames/bind";
import productImg from "../../assets/img/image 4.png";
import starIcon from "../../assets/img/star-vote.png"

const cx = classNames.bind(styles);

function RelatedProduct() {
    return (
        <div className={cx("wrap")}>
            <h3 className={cx("title")}>Similar Items You Might Also Like</h3>
            <div className={cx("list")}>
                <div className={cx("item")}>
                    <img src={productImg} alt="" className={cx("img")}/>
                    <h5 className={cx("product-title")}>TDX Sinkers</h5>
                    <p className={cx("price")}>$ 65.00</p>
                    <p className={cx("quantity")}>5 types of shoos available</p>
                    <div className={cx("vote")}>
                        <div className={cx("vote-star")}>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                        </div>
                        <span className={cx("vote-number")}>(121)</span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <img src={productImg} alt="" className={cx("img")}/>
                    <h5 className={cx("product-title")}>TDX Sinkers</h5>
                    <p className={cx("price")}>$ 65.00</p>
                    <p className={cx("quantity")}>5 types of shoos available</p>
                    <div className={cx("vote")}>
                        <div className={cx("vote-star")}>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                        </div>
                        <span className={cx("vote-number")}>(121)</span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <img src={productImg} alt="" className={cx("img")}/>
                    <h5 className={cx("product-title")}>TDX Sinkers</h5>
                    <p className={cx("price")}>$ 65.00</p>
                    <p className={cx("quantity")}>5 types of shoos available</p>
                    <div className={cx("vote")}>
                        <div className={cx("vote-star")}>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                        </div>
                        <span className={cx("vote-number")}>(121)</span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <img src={productImg} alt="" className={cx("img")}/>
                    <h5 className={cx("product-title")}>TDX Sinkers</h5>
                    <p className={cx("price")}>$ 65.00</p>
                    <p className={cx("quantity")}>5 types of shoos available</p>
                    <div className={cx("vote")}>
                        <div className={cx("vote-star")}>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                        </div>
                        <span className={cx("vote-number")}>(121)</span>
                    </div>
                </div>
                <div className={cx("item")}>
                    <img src={productImg} alt="" className={cx("img")}/>
                    <h5 className={cx("product-title")}>TDX Sinkers</h5>
                    <p className={cx("price")}>$ 65.00</p>
                    <p className={cx("quantity")}>5 types of shoos available</p>
                    <div className={cx("vote")}>
                        <div className={cx("vote-star")}>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                            <img src={starIcon} alt="star-icon" className={cx("icon")}/>
                        </div>
                        <span className={cx("vote-number")}>(121)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct;