import styles from "./PopularProducts.module.scss";
import classNames from "classnames/bind";
import Rectangle1394 from "../../assets/img/Rectangle1394.png";

const cx = classNames.bind(styles);

function PopularProducts() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("wrapper")}>
            <h4 className={cx("title")}>SẢN PHẨM NỔI BẬT</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="2" viewBox="0 0 58 2" fill="none">
  <path d="M1 1H57" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>
            </div>
            
            <div className={cx("nav")}>
                <div className={cx("nav-item")}>NỔI BẬT</div>
                <div className={cx("nav-item")}>ĐẶC BIỆT</div>
                <div className={cx("nav-item")}>BÁN CHẠY</div>
            </div>
            <div className={cx("products")}>
                <div className={cx("item")}>

                <img src={Rectangle1394} alt="Rectangle-1394" className={cx("img")}/>
                </div>
                <div className={cx("item")}>

                <img src={Rectangle1394} alt="Rectangle-1394" className={cx("img")}/>
                </div>
                <div className={cx("item")}>

                <img src={Rectangle1394} alt="Rectangle-1394" className={cx("img")}/>
                </div>
                <div className={cx("item")}>

                <img src={Rectangle1394} alt="Rectangle-1394" className={cx("img")}/>
                </div>
            </div>
        </div>
    )
}

export default PopularProducts;