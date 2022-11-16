import React from "react";


function SearchBar() {
    return(
        <div className="row">
            <div className="col-11 position-relative">
                <input placeholder="Search Tuiter"
                       className="form-control rounded-pill ps-5"/>
            </div>
            <div className="col-1">
                <i className="wd-nudge-up text-primary float-end bi bi-search fs-2 position-relative"></i>
            </div>
        </div>
    );
}
export default SearchBar;