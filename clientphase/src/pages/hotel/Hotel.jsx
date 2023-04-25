import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Styles from "../../Styles/hotel/Hotel.module.css";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);
    const {dates, options} = useContext(SearchContext)


    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
  
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    console.log(days)
      const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
      }

      const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === "l"){
          newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        }else {
          newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
      }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "Loading" : <>

      <div className={Styles.hotelContainer}>
        {open && <div className={Styles.slider}>
            <FontAwesomeIcon icon={faCircleXmark} className={Styles.close} onClick={() => setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className={Styles.arrow} onClick={() => handleMove("l")}/>
            <div className={Styles.sliderWrapper}>
              <img src={data.photos[slideNumber]} alt="" className={Styles.sliderImg}/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className={Styles.arrow} onClick={() => handleMove("r")}/>
        </div>}
        <div className={Styles.hotelWrapper}>
            <button className={Styles.bookNow}>Reserver or Book Now!</button>
          <h1 className={Styles.hotelTitle}>{data.name}</h1>
          <div className={Styles.hotelAddress}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className={Styles.hotelDistance}>
            Excellent location – {data.distance}m from center
          </span>
          <span className={Styles.hotelPriceHighlight}>
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className={Styles.hotelImages}>
            {data.photos?.map((photo, i) => (
                <div className={Styles.hotelImgWrapper}>
                    <img onClick={() => handleOpen(i)} src={photo} alt="" className={Styles.hotelImg}/>
                </div>
            ))}
          </div>
          <div className={Styles.hotelDetails}>
            <div className={Styles.hotelDetailsTexts}>
            <h1 className={Styles.hotelTitle}>{data.title}</h1>
            <p className={Styles.hotelDesc}>
                {data.desc}
              </p>
            </div>
            <div className={Styles.hotelDetailsPrice}>
            <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
      </>
      }
    </div>
  );
};

export default Hotel;
