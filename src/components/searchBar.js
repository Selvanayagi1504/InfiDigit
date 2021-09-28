import React from "react";
function SearchBar(props) {
  return (
    
    <div class="input-icons">
        
        <input
        class="input-field"
          type="text"
          onChange={(e) => props.onSearch(e.target.value)}
          placeholder="search"
          value={props.value}
        />
        <i className="fa fa-search icon  pt-1" ></i>
    </div>
    
    
  );
}
export default SearchBar;