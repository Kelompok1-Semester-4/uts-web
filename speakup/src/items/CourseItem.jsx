import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import IconPlay from "../assets/icon/light/Play.svg";
import IconUser from "../assets/icon/light/User.svg";
import HeroImage from "../assets/images/hero.png";

const CourseItem = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card custom-card-course">
        <img
          src={props.image}
          className="card-img-top course-image"
          alt="..."
        />
        <div className="card-body">
          <div className="row">
            <div className="col-md">
              <h5 className="card-title">{props.title}</h5>
            </div>
            <div className="col-md-4 text-end">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                className="rounded-circle circle-image"
                alt=""
              />
            </div>
          </div>
          <p className="card-text giveMeEllipsis col-md-8">
            {props.description}
          </p>
          <div className="row d-flex align-items-center ps-2 mb-2">
            <div className="col-md-7">
              <img
                src={IconPlay}
                className="card-icon align-self-center"
                width={21}
                alt=""
              />
              <h4 className="mount d-inline ms-2">121 Videos</h4>

              <img
                src={IconUser}
                className="card-icon ms-2 align-self-center"
                width={21}
                alt=""
              />
              <h4 className="mount d-inline">{props.users} Users</h4>
            </div>
            <div className="col-md d-flex justify-content-end">
              <button className="btn btn-primary btn-small">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
