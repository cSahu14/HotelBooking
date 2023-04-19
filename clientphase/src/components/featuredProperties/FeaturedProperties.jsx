import React from 'react'
import Styles from "../../Styles/featuredProperties/FeaturedProperties.module.css"
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {
    const {data, loading, error} = useFetch("/hotels/countByType")

  return (
    <div className={Styles.fp}>
        <div className={Styles.fpItem}>
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className={Styles.fpImg}/>
            <span className={Styles.fpName}>Apratment Hotel</span>
            <span className={Styles.fpCity}>Pune</span>
            <span className={Styles.fpPrice}>Starting from $100</span>
            <div className={Styles.fpRating}>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className={Styles.fpItem}>
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className={Styles.fpImg}/>
            <span className={Styles.fpName}>Apratment Hotel</span>
            <span className={Styles.fpCity}>Pune</span>
            <span className={Styles.fpPrice}>Starting from $100</span>
            <div className={Styles.fpRating}>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className={Styles.fpItem}>
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className={Styles.fpImg}/>
            <span className={Styles.fpName}>Apratment Hotel</span>
            <span className={Styles.fpCity}>Pune</span>
            <span className={Styles.fpPrice}>Starting from $100</span>
            <div className={Styles.fpRating}>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className={Styles.fpItem}>
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className={Styles.fpImg}/>
            <span className={Styles.fpName}>Apratment Hotel</span>
            <span className={Styles.fpCity}>Pune</span>
            <span className={Styles.fpPrice}>Starting from $100</span>
            <div className={Styles.fpRating}>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties