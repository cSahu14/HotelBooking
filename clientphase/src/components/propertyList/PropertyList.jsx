import React from "react";
import Styles from "../../Styles/propertyList/propertyList.module.css"
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const {data, loading, error} = useFetch("/hotels/countByType")
  const images = [
    "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
  ]
  return (
    <div className={Styles.pList}>
      { loading ? "loading" : <>
      {data && images.map((img, index) => (<div className={Styles.pListItem} key={index}>
        <img
          src={img}
          alt=""
          className={Styles.pListImg}
        />
        <div className={Styles.pListTitles}>
            <h1>{data[index]?.type}</h1>
            <h2>{data[index]?.count} {data[index]?.type}</h2>
        </div>
      </div>
      ))
      }
      </>}
    </div>
  );
};

export default PropertyList;
