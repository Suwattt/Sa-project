import React from "react";
import "./Banner.css";

let bannerData = {
    title: "Welcom to SiriLerGrand",
    desc: "Discover the epitome of relaxation: Your ultimate retreat awaits, where every moment is a masterpiece of serenity and comfort.",
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        {/* <a href="#" className="banner-btn">Learn More</a> */}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Banner;
