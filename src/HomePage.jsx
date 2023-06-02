import React from "react";

export const HomePage = () => {

    return (
        <>
        <div id="myCarousel" className="carousel slide">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
            <div className="item active">
                <div className="fill" ></div>
                <div className="carousel-caption">
                    <h2>Caption 1</h2>
                </div>
            </div>
            <div className="item">
                <div className="fill" ></div>
                <div className="carousel-caption">
                    <h2>Caption 2</h2>
                </div>
            </div>
            <div className="item">
                <div className="fill" ></div>
                <div className="carousel-caption">
                    <h2>Caption 3</h2>
                </div>
            </div>
        </div>

        {/* <!-- Controls --> */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="icon-prev"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="icon-next"></span>
        </a>
    </div>
      </>
    );
};
