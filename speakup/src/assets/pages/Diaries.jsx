import React from "react";

function Diaries(props) {
    return(
        <div className="container diaries">
            <div className="row diary-header justify-content-center">
                <h1>Browse Your Favorite Diary</h1>
                <p className="text-center">The best diaries are made by users for other users to enjoy</p>

                <form className="col-md-6 mt-3">
                    <input type="text" placeholder="Search" className="form-control" />
                </form>
            </div>

            <div className="row justify-content-center category-button">
                <div className="col-md text-center">
                    <button className="btn btn-primary">Productivity</button>
                </div>
                <div className="col-md text-center">
                <button className="btn btn-default">Relationship</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default">Mental Health</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default">Life Plan</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default">Other</button>
                </div>
            </div>

            <div className="row list-diary">
                <h1>List Of Diary</h1>

                <div className="row diary-items">
                    <div className="col-md-3 col-sm-6">
                        <img src="https://images.unsplash.com/photo-1648793633175-f3635585014b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" className="diary-item" alt="" />

                        <h3 className="diary-title">How To Study With Music</h3>
                        <p className="diary-body giveMeEllipsis">These findings suggest certain types of music can help boost memorization abilities and other cognitive functions ...</p>

                        <div className="row mt-4 d-flex align-items-end">
                            <div className="col-md-4 d-flex diary-info">
                                <span className="d-inline-block text-truncate" style={{maxWidth: 80}}>Robie Holms</span>
                                <p className="created-at">22 April 2022</p>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-primary btn-sm">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="https://images.unsplash.com/photo-1648900925554-dbe87a647154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" className="diary-item" alt="" />

                        <h3 className="diary-title">See What I See ? </h3>
                        <p className="diary-body giveMeEllipsis">These findings suggest certain types of music can help boost memorization abilities and other cognitive functions ...</p>

                        <div className="row mt-4 d-flex align-items-end">
                            <div className="col-md-4 d-flex diary-info">
                                <span className="d-inline-block text-truncate" style={{maxWidth: 80}}>Annie Hai</span>
                                <p className="created-at">22 April 2022</p>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-primary btn-sm">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" className="diary-item" alt="" />

                        <h3 className="diary-title">Global & My Phone</h3>
                        <p className="diary-body giveMeEllipsis">These findings suggest certain types of music can help boost memorization abilities and other cognitive functions ...</p>

                        <div className="row mt-4 d-flex align-items-end">
                            <div className="col-md-4 d-flex diary-info">
                                <span className="d-inline-block text-truncate" style={{maxWidth: 80}}>Jhon State Hams</span>
                                <p className="created-at">22 April 2022</p>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-primary btn-sm">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="https://images.unsplash.com/photo-1648840151800-aa9670869156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" className="diary-item" alt="" />

                        <h3 className="diary-title">My Life is My Book</h3>
                        <p className="diary-body giveMeEllipsis">These findings suggest certain types of music can help boost memorization abilities and other cognitive functions ...</p>

                        <div className="row mt-4 d-flex align-items-end">
                            <div className="col-md-4 d-flex diary-info">
                                <span className="d-inline-block text-truncate" style={{maxWidth: 80}}>Jhon State Hams</span>
                                <p className="created-at">22 April 2022</p>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-primary btn-sm">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diaries;