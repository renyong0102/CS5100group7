import React from "react";


function SearchBar() {
    return(
        <div className="row mb-2">
            <div className="col-11 p-0 mt-1">
                <input placeholder="Search Stock"
                       className="form-control rounded-pill ps-3"/>
            </div>
            <div className="col-1 ps-0">
                <a href="https://www.google.com/"><i className="text-primary float-end bi bi-search fs-2"></i></a>

            </div>
        </div>
    );
}
export default SearchBar;