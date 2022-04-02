import React from "react";

const PopularCourseItem = (props) => {
  return (
    <div className="col-lg-5 col-md-5 col-sm-5">
      <div className="card custom-card">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5">
            <img src={props.img} className="square" alt="" />
          </div>
          <div className="col">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text giveMeEllipsis">{props.desc}</p>
            <button className="btn btn-primary btn-small mt-4">
              Learn Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseItem;
