import React from "react";

import CoursesImage from "../../assets/images/course-hero.svg";
import IconPlay from "../../assets/icon/light/Play.svg";
import IconUser from "../../assets/icon/light/User.svg";

import icon_lifetime_access from "../../assets/images/icon_lifetime_access.png";
import icon_online_counseling from "../../assets/images/icon_online_counseling.png";
import icon_diary from "../../assets/images/icon_diary.png";
import icon_mentorship from "../../assets/images/icon_mentor.png";

const Courses = () => {
    return (
        <div className="courses">
            {/* HERO */}
            <div className="row ">
                <div className="col-md-6 align-self-center">
                    <h1 className="title">
                        Discover The Best Course According To Your Needs
                    </h1>
                    <form action="">
                        <div className="row">
                            <div className="col-md-7">
                                <input type="text" className="form-control" placeholder="Search for a course" />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" aria-label="Default select example">
                                    <option value="Productivity">Productivity</option>
                                    <option value="Relationship">Relationship</option>
                                    <option value="Career">Career</option>
                                    <option value="Mental Health">Mental Health</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md"></div>
                <div className="col-md-5 d-flex align-self-center">
                    <img src={CoursesImage} className="ms-auto d-flex  img-fluid" alt="" />
                </div>
            </div>

            {/* FEATURE */}
            <div className="row d-flex justify-content-center feature">
                <div className="col-md feature-item d-flex">
                    <img src={icon_lifetime_access} className="feature_icon" />
                    <h3 className="feature_title my-auto">Lifetime Access</h3>
                </div>
                <div className="col-md feature-item">
                    <img src={icon_online_counseling} className="feature_icon" />
                    <h3 className="feature_title">Online Counseling</h3>
                </div>
                <div className="col-md feature-item">
                    <img src={icon_diary} className="feature_icon" />
                    <h3 className="feature_title">Diary Maker</h3>
                </div>
                <div className="col-md feature-item">
                    <img src={icon_mentorship} className="feature_icon" />
                    <h3 className="feature_title">Expert Mentor</h3>
                </div>
            </div>

            {/* LIST OF COURSE */}
            <div className="row courses">
                <h1 className="mb-5">List Of Course</h1>

                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="card custom-card-course">
                            <img src="https://images.unsplash.com/photo-1475609471617-0ef53b59cff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFyZW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top course-image" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md">
                                        <h5 className="card-title">Know Yourself And Maximize</h5>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="rounded-circle circle-image" alt="" />
                                    </div>
                                </div>
                                <p className="card-text giveMeEllipsis col-md-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row d-flex align-items-center ps-2 mb-2">
                                    <div className="col-md-7 p-0">
                                        <img src={IconPlay} className="card-icon align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline ms-2">121 Videos</h4>

                                        <img src={IconUser} className="card-icon ms-2 align-self-center" width={21} alt="" />
                                        <h4 className="mount">1,565 Users</h4>
                                    </div>
                                    <div className="col-md d-flex justify-content-end">
                                        <button className="btn btn-primary btn-small">Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card custom-card-course">
                            <img src="https://image-cdn.medkomtek.com/yVRi6D4lI1YfnifOOXI6Vxe1iH8=/673x373/smart/filters:quality(75):strip_icc():format(jpeg)/klikdokter-media-buckets/medias/1942229/original/007616500_1519724219-Kesehatan-Mental-By-Africa-Studio-shutterstock.jpg" className="card-img-top course-image" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md">
                                        <h5 className="card-title">Know Yourself And Maximize</h5>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="rounded-circle circle-image" alt="" />
                                    </div>
                                </div>
                                <p className="card-text giveMeEllipsis col-md-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row d-flex align-items-center ps-2 mb-2">
                                    <div className="col-md-7">
                                        <img src={IconPlay} className="card-icon align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline ms-2">121 Videos</h4>

                                        <img src={IconUser} className="card-icon ms-2 align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline">1,565 Users</h4>
                                    </div>
                                    <div className="col-md d-flex justify-content-end">
                                        <button className="btn btn-primary btn-small">Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card custom-card-course">
                            <img src="https://i.ytimg.com/vi/8nIWRH_FEic/maxresdefault.jpg" className="card-img-top course-image" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md">
                                        <h5 className="card-title">Know Yourself And Maximize</h5>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="rounded-circle circle-image" alt="" />
                                    </div>
                                </div>
                                <p className="card-text giveMeEllipsis col-md-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row d-flex align-items-center ps-2 mb-2">
                                    <div className="col-md-7">
                                        <img src={IconPlay} className="card-icon align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline ms-2">121 Videos</h4>

                                        <img src={IconUser} className="card-icon ms-2 align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline">1,565 Users</h4>
                                    </div>
                                    <div className="col-md d-flex justify-content-end">
                                        <button className="btn btn-primary btn-small">Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card custom-card-course">
                            <img src="https://travelspromo.com/wp-content/uploads/2021/05/Sate-Ayam-Happy-Day-e1621504955721-1024x768.jpg" className="card-img-top course-image" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md">
                                        <h5 className="card-title">Know Yourself And Maximize</h5>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="rounded-circle circle-image" alt="" />
                                    </div>
                                </div>
                                <p className="card-text giveMeEllipsis col-md-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row d-flex align-items-center ps-2 mb-2">
                                    <div className="col-md-7">
                                        <img src={IconPlay} className="card-icon align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline ms-2">121 Videos</h4>

                                        <img src={IconUser} className="card-icon ms-2 align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline">1,565 Users</h4>
                                    </div>
                                    <div className="col-md d-flex justify-content-end">
                                        <button className="btn btn-primary btn-small">Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card custom-card-course">
                            <img src="https://expoupdate.se/wp-content/uploads/2021/09/Universal-Childrens-Day.jpg" className="card-img-top course-image" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md">
                                        <h5 className="card-title">Know Yourself And Maximize</h5>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="rounded-circle circle-image" alt="" />
                                    </div>
                                </div>
                                <p className="card-text giveMeEllipsis col-md-8">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="row d-flex align-items-center ps-2 mb-2">
                                    <div className="col-md-7">
                                        <img src={IconPlay} className="card-icon align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline ms-2">121 Videos</h4>

                                        <img src={IconUser} className="card-icon ms-2 align-self-center" width={21} alt="" />
                                        <h4 className="mount d-inline">1,565 Users</h4>
                                    </div>
                                    <div className="col-md d-flex justify-content-end">
                                        <button className="btn btn-primary btn-small">Join Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default Courses;