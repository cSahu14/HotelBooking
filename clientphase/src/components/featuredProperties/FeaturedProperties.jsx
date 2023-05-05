import React from "react";
import Styles from "../../Styles/featuredProperties/FeaturedProperties.module.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");

  return (
    <div className={Styles.fp}>
      {loading ? (
        "Loading"
      ) : (
        <>
          {data?.map((item) => (
            <div className={Styles.fpItem} key={item._id}>
              <img src={item.photos[0]} alt="" className={Styles.fpImg} />
              <span className={Styles.fpName}>{item.name}</span>
              <span className={Styles.fpCity}>{item.city}</span>
              <span className={Styles.fpPrice}>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className={Styles.fpRating}>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
