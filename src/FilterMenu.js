import React from "react";
import { useGlobalContext } from "./Context";

const FilterMenu = () => {
  const {
    clearTag,
    filters,
    clearFilteredList,
  } = useGlobalContext();
  return (
    <section className="filter-con">
      <div className="tags">
        {
          filters.map((item) => {
            return (
              <div className="tag-con">
                <p className="tag">{item}</p>
                <button className='remove-btn' onClick={() => clearTag(item)}>
                  <img src="./images/icon-remove.svg" alt='remove-icon'/>
                </button>
              </div>
            );
          })}
      </div>
      <button className="clear-btn" onClick={clearFilteredList}>
        clear
      </button>
    </section>
  );
};

export default FilterMenu;
