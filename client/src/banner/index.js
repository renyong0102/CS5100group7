import React from "react";

function Banner() {
    return(
        <div>
            <div className="position-relative mb-2">
                <img src="/images/banner.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
        </div>
    );
}
export default Banner;