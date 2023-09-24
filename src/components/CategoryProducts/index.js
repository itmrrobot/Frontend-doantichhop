import styles from "./CategoryProducts.module.scss";
import classNames from "classnames/bind";
import Rectangle1389 from "../../assets/img/Rectangle1389.png";
import { useState } from "react";

const cx = classNames.bind(styles);

function CategoryProducts() {
    const [isBlur,setIsBlur] = useState(false);
    const handleBlur = (e) => {
        
        setIsBlur(true);
    }

    return (
        <div className={cx("category-products")}>
            <h4 className={cx("title")}>Danh mục sản phẩm</h4>
            <div className={cx("wrap")}>
                <div className={cx("item")} onBlur={handleBlur}>
                    <img src={Rectangle1389} className={cx("img")} alt="Rectangle 1389"/>
                    <div style={isBlur?{display:"block"}:{display:"none"}}>Clothes</div>
                </div>
                <div className={cx("item")}>
                    <img src={Rectangle1389} className={cx("img")} alt="Rectangle 1389"/>
                    <div className={cx("name")}>Shoes</div>
                </div>
                <div className={cx("item")}>
                    <img src={Rectangle1389} className={cx("img")} alt="Rectangle 1389"/>
                </div>
                <div className={cx("item")}>
                    <img src={Rectangle1389} className={cx("img")} alt="Rectangle 1389"/>
                </div>
            </div>
        </div>  
    )
}

export default CategoryProducts;