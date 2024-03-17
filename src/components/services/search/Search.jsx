import React from "react";
import "./search.css";
import { useState } from "react"; 
const Search = () => {

  const [ showProperties,setShowProperties ] = useState(false);

  const showPropertiesClickButton=()=>{
    setShowProperties(!showProperties)
  }

  return (
    <div className="container">
      <div className="search-bar" onClick={showPropertiesClickButton}>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Enter the property to search...."
        />
        <input
          type="submit"
          name="searchProperty"
          id="searchProperty"
          value="SENT"
        />
        {/*  <div className="filtered-container"> */}
        <div className={ `filtered-container ${showProperties ? 'active' : null}`} >
          <ul className="filtered-items">
            <li>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
