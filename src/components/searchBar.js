import React from "react";
function SearchBar(props) {
  return (
    
    <>
    <input
    // class="input-field"
      type="text"
      onChange={(e) => props.onSearch(e.target.value)}
      placeholder="search"
      value={props.value}
    />
                                {/* <i className="fa fa-search icon input_img " ></i> */}
    </>

    
    
  );
}
export default SearchBar;