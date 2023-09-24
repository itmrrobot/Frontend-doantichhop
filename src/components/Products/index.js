import styles from "./Products.module.scss";
import classNames from "classnames/bind";
import arrowDown from "../../assets/img/Vector 9.png";
import SideBarFilter from "../SideBarFilter";
import Rectangle53 from "../../assets/img/Rectangle53.png";
import axios from "axios";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Products() {
    const [data,setData] = useState([]);
    useEffect(() => {
        const control = new AbortController();
        const fetchData = async() => {
            try {
                const respone = await axios.get("",{
                    signal: control.signal
                });
                setData(respone.data);
            } catch(e) {
                throw new Error(e);
            }
        }
        //fetchData();
        return () => {
            control.abort();
        }
    },[])
    return (
        <div className={cx("wrap")}>
            <div className={cx("wrapper")}>
                <div className={cx("number-wrap")}>
                    <span className={cx("pages")}>Showing 1 - 20 </span>
                    <span className={cx("products")}>out of 2,356 Products</span>
                </div>
                <div className={cx("sort-wrap")}>
                    <span className={cx("text")}>Sort by:</span>
                    <div className={cx("category")}>
                        <span className={cx("name")}>New Arrivals</span>
                        <img src={arrowDown} alt="arrow-down" className={cx("icon")}/>
                        <div className={cx("drop-down")}>
                            <div className={cx("item")}></div>
                            <div className={cx("item")}></div>
                            <div className={cx("item")}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                <SideBarFilter/>
                <div className={cx("wrap-products")}>
                    
                        <div className={cx("products-list")}>
                        <div className={cx("product")}>
                        <a href="/" className={cx("product-link")}>
                            <img src={Rectangle53} alt="product" className={cx("img")}/>
                            <p className={cx("desc")}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                            <div className={cx("wrap-all")}>

                            <div className={cx("wrap-price")}>
                                <span className={cx("price")}>$120.23</span>
                                <span className={cx("unused-price")}>$120.23</span>
                            </div>
                            <div className={cx("wrap-orders-category")}>
                                <span className={cx("order-number")}>24 Orders</span>
                                <span className={cx("category-name")}>New Arrivals</span>
                            </div>
                            </div>
                            <div className={cx("icon-like")}></div>
                        </a>
                    </div>
                    <div className={cx("product")}>
                        <a href="/" className={cx("product-link")}>
                            <img src={Rectangle53} alt="product" className={cx("img")}/>
                            <p className={cx("desc")}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                            <div className={cx("wrap-all")}>
                            <div className={cx("wrap-price")}>
                                <span className={cx("price")}>$120.23</span>
                                <span className={cx("unused-price")}>$120.23</span>
                            </div>
                            <div className={cx("wrap-orders-category")}>
                                <span className={cx("order-number")}>24 Orders</span>
                                <span className={cx("category-name")}>New Arrivals</span>
                            </div>
                            </div>
                            
                            <div className={cx("icon-like")}></div>
                        </a>
                    </div>
                    <div className={cx("product")}>
                        <a href="/" className={cx("product-link")}>
                            <img src={Rectangle53} alt="product" className={cx("img")}/>
                            <p className={cx("desc")}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                            <div className={cx("wrap-all")}>
                            <div className={cx("wrap-price")}>
                                <span className={cx("price")}>$120.23</span>
                                <span className={cx("unused-price")}>$120.23</span>
                            </div>
                            <div className={cx("wrap-orders-category")}>
                                <span className={cx("order-number")}>24 Orders</span>
                                <span className={cx("category-name")}>New Arrivals</span>
                            </div>
                            </div>
                            
                            <div className={cx("icon-like")}></div>
                        </a>
                    </div>
                    <div className={cx("product")}>
                        <a href="/" className={cx("product-link")}>
                            <img src={Rectangle53} alt="product" className={cx("img")}/>
                            <p className={cx("desc")}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                            <div className={cx("wrap-all")}>
                            <div className={cx("wrap-price")}>
                                <span className={cx("price")}>$120.23</span>
                                <span className={cx("unused-price")}>$120.23</span>
                            </div>
                            <div className={cx("wrap-orders-category")}>
                                <span className={cx("order-number")}>24 Orders</span>
                                <span className={cx("category-name")}>New Arrivals</span>
                            </div>
                            </div>
                            
                            <div className={cx("icon-like")}></div>
                        </a>
                    </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Products;