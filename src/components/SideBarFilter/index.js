import styles from "./SideBarFilter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBarFilter() {
    return (
        <div className={cx("sidebar")}>
            <div className={cx("prices")}>
                <h4 className={cx("title")}>PRICES</h4>
                <div className={cx("range")}>
                    <span className={cx("text")}>Range</span>
                    <span className={cx("number")}>$120-$300</span>
                </div>
            </div>
            <div className={cx("check-boxes")}>
                <h4 className={cx("title")}>FILTERS</h4>
                <div className={cx("wrapper")}>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Women</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Men</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Women's jewelry</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Men's jewelry</span>
                    </div>
                </div>
            </div>
            <div className={cx("check-boxes")}>
                <h4 className={cx("title")}>BRANDS</h4>
                <div className={cx("wrapper")}>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>H&M</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Mark & Spencer</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Victoria’s Secret</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Dior</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Gucci</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Fendi</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Prada</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Versace</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Dolce & Gabbana</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Zara</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Chanel</span>
                    </div>
                </div>
            </div>
            <div className={cx("check-boxes")}>
                <h4 className={cx("title")}>CATEGORIES</h4>
                <div className={cx("wrapper")}>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Dresses</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Tops</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Lingerie & Lounge Wear</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Blouse</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Vintage</span>
                    </div>
                </div>
            </div>
            <div className={cx("check-boxes")}>
                <h4 className={cx("title")}>SIZE</h4>
                <div className={cx("wrapper")}>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Medium</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Large</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Plus Size</span>
                    </div>
                    <div className={cx("item")}>
                        <input type="checkbox" className={cx("input")}/>
                        <span className={cx("name")}>Sexy Plus Size</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarFilter;