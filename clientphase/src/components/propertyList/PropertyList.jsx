import React from "react";
import Styles from "../../Styles/propertyList/propertyList.module.css"

const PropertyList = () => {
  return (
    <div className={Styles.pList}>
      <div className={Styles.pListItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>Hotels</h1>
            <h2>333 hotels</h2>
        </div>
      </div>
      <div className={Styles.pListItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>Hotels</h1>
            <h2>333 hotels</h2>
        </div>
      </div>
      <div className={Styles.pListItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>Hotels</h1>
            <h2>333 hotels</h2>
        </div>
      </div>
      <div className={Styles.pListItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>Apartments</h1>
            <h2>333 hotels</h2>
        </div>
      </div>
      <div className={Styles.pListItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>Resturants</h1>
            <h2>333 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
