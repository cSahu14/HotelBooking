import React, { useState } from "react";
import Styles from "../../Styles/header/Header.module.css";
import {
  faBed,
  faCalendar,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCalenderDays } from "@fortawesome/free-solid-svg-icons";
// import { faPerson } from "@fortawesome/free-solid-svg-icons";
// import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {state : {destination, date, options}})
  }

  return (
    <div className={Styles.header}>
      <div
        className={
          type === "list"
            ? `${Styles.headerContainer} ${Styles.listMode}`
            : Styles.headerContainer
        }
      >
        <div className={Styles.headerList}>
          <div className={`${Styles.headerListItem} ${Styles.active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={Styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={Styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className={Styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className={Styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className={Styles.headerTitle}>
              A lifetime of discounts? It's Genius.
            </h1>
            <p className={Styles.headerDesc}>
              Get rewards for your travels - unlock instant savings of 10% or
              more with a free csbookings account
            </p>
            <button className={Styles.headerBtn}>Sign in / Register</button>
            <div className={Styles.headerSearch}>
              <div className={Styles.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={Styles.headerIcon} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className={Styles.headerSearchInput}
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className={Styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className={Styles.headerIcon}
                />
                <span
                  className={Styles.headerSearchText}
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={Styles.date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className={Styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faPerson}
                  className={Styles.headerIcon}
                />
                <span
                  className={Styles.headerSearchText}
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>
                {openOptions && (
                  <div className={Styles.options}>
                    <div className={Styles.optionItem}>
                      <span className={Styles.optionText}>Adult</span>
                      <div className={Styles.optionCounter}>
                        <button
                          disabled={options.adult <= 1}
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className={Styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={Styles.optionItem}>
                      <span className={Styles.optionText}>Children</span>
                      <div className={Styles.optionCounter}>
                        <button
                          disabled={options.children <= 0}
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className={Styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={Styles.optionItem}>
                      <span className={Styles.optionText}>Room</span>
                      <div className={Styles.optionCounter}>
                        <button
                          disabled={options.room <= 1}
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className={Styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={Styles.optionCounterButton}
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              s
              <div className={Styles.headerSearchItem}>
                <button className={Styles.headerBtn} onClick={handleSearch}>Search</button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
