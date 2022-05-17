import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./FilterNavbar.module.css";

const FilterNavbar = ({ filterNavData, }) => {
  const [selectedFilterId, setSelectedFilterId] = useState("");
  const [selectedFilterType, setSelectedFilterType] = useState("");
  /**@canbe used for API req */
  console.log(selectedFilterId, selectedFilterType);
  return (
    <div className={classes.filter__navbar}>
      {filterNavData?.map((filter_select, index) => (
        <select
          onChange={(e) => {
            /**@value and ids*/
            setSelectedFilterId(index);
            setSelectedFilterType(e.target.value);
          }}
          className={classes.filter__select}
          key={index}
        >
          {filter_select.map((filter_option, index) => (
            <option
              onClick={() => {
                /**@some action*/
              }}
              key={index}
              value={filter_option?.toLowerCase().replace(/\s/g, "")}
            >
              {filter_option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

FilterNavbar.propTypes = {
  filterNavData: PropTypes.array,
};

export default FilterNavbar;
