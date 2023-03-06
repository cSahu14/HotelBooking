import React from "react";
import Styles from "../../Styles/searchItem/SearchItem.module.css";

const SearchItem = () => {
  return (
    <div className={Styles.searchItem}>
      <img
        src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
        alt=""
        className={Styles.siImg}
      />
      <div className={Styles.siDesc}>
      <h1 className={Styles.siTitle}>Tower Street Apartments</h1>
        <span className={Styles.siDistance}>500m from center</span>
        <span className={Styles.siTaxiOp}>Free airport taxi</span>
        <span className={Styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={Styles.siFeatures}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className={Styles.siCancelOp}>Free cancellation </span>
        <span className={Styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={Styles.siDetails}>
        <div className={Styles.siRating}>
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className={Styles.siDetailsTexts}>
            <span className={Styles.siPrice}>$123</span>
            <span className={Styles.siTaxOp}>Includes taxes and fees</span>
            <button className={Styles.siCheckButton}>See availability</button>
        </div>

      </div>
    </div>
  );
};

export default SearchItem;
