import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import Styles from "../../Styles/list/List.module.css";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={Styles.listContainer}>
        <div className={Styles.listWrapper}>
          <div className={Styles.listSearch}>
            <h1 className={Styles.lsTitle}>Search</h1>
            <div className={Styles.lsItem}>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={Styles.lsItem}>
              <label>Check-in-dates</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className={Styles.lsItem}>
                <div className={Styles.lsOptions}>
                    <label>Options</label>
                    <div className={Styles.lsOptionItem}>
                        <span className={Styles.lsOptionText}>
                            Min price <small>per night</small>
                        </span>
                        <input type="text" className={Styles.lsOptionInput}/>
                    </div>
                    <div className={Styles.lsOptionItem}>
                        <span className={Styles.lsOptionText}>
                            Max price <small>per night</small>
                        </span>
                        <input type="text" className={Styles.lsOptionInput}/>
                    </div>
                    <div className={Styles.lsOptionItem}>
                        <span className={Styles.lsOptionText}>
                            Adult 
                        </span>
                        <input type="number" min={1} className={Styles.lsOptionInput} placeholder={options.adult}/>
                    </div>
                    <div className={Styles.lsOptionItem}>
                        <span className={Styles.lsOptionText}>
                            Children 
                        </span>
                        <input type="number" min={0} className={Styles.lsOptionInput} placeholder={options.children}/>
                    </div>
                    <div className={Styles.lsOptionItem}>
                        <span className={Styles.lsOptionText}>
                            Room
                        </span>
                        <input type="number" min={1} className={Styles.lsOptionInput} placeholder={options.room}/>
                    </div>
                </div>
            </div>
            <button>Search</button>
          </div>
          <div className={Styles.listResult}>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
