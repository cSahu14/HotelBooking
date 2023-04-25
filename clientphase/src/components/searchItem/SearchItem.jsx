import React from "react";
import Styles from "../../Styles/searchItem/SearchItem.module.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className={Styles.searchItem}>
      <img
        src={item.photos[0]}
        alt=""
        className={Styles.siImg}
      />
      <div className={Styles.siDesc}>
      <h1 className={Styles.siTitle}>{item.name}</h1>
        <span className={Styles.siDistance}>{item.distance}m from center</span>
        <span className={Styles.siTaxiOp}>Free airport taxi</span>
        <span className={Styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={Styles.siFeatures}>
          {item.desc}
        </span>
        <span className={Styles.siCancelOp}>Free cancellation </span>
        <span className={Styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={Styles.siDetails}>
       {item.rating && <div className={Styles.siRating}>
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className={Styles.siDetailsTexts}>
            <span className={Styles.siPrice}>${item.cheapestPrice}</span>
            <span className={Styles.siTaxOp}>Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className={Styles.siCheckButton}>See availability</button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default SearchItem;
