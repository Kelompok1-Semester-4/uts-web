import React, { Component, useEffect } from "react";

import Header from "../../components/Header";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import DiaryItems from "../../items/DiaryItems";

import axios from "axios";
import { useState } from "react";

const Diaries = (props) => {
    // get all data from diaries api
    const [diaries, setDiaries] = React.useState([]);
    useEffect(() => {
        axios.get('https://speakupapi.herokuapp.com/api/diaries')
            .then(res => {
                setDiaries(res.data);
            })
    });

    // get all date diary type
    const [diaryTypes, setDiaryType] = useState([]);
    useEffect(() => {
        axios.get('https://speakupapi.herokuapp.com/api/diary-types')
            .then(res => {
                setDiaryType(res.data);
            });
    });

    // get search data
    const [searchTerm, setSearch] = useState("");

    return (
        <div>
            <Header />
            <div className="container diaries">
                <div className="row diary-header justify-content-center">
                    <h1>Browse Your Favorite Diary</h1>
                    <p className="text-center">The best diaries are made by users for other users to enjoy</p>

                    <form className="col-md-6 mt-3">
                        <input type="text" placeholder="Search" className="form-control" onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                    </form>
                </div>

                <center>
                    <ul className="nav nav-pills mb-5 flex-column flex-sm-row" id="pills-tab" role="tablist">
                        {
                            diaryTypes.map((diaryType, index) => {
                                return (
                                    <li className="nav-item flex-sm-fill" role="presentation" key={diaryType.id}>
                                        <button className="nav-link btn" id={diaryType.id} data-bs-toggle="pill" data-bs-target="#pills-tips" type="button" role="tab" aria-controls="pills-tips" aria-selected="false">{diaryType.name}</button>
                                    </li>
                                );
                            })
                        }
                        <li className="nav-item flex-sm-fill" role="presentation">
                            <button className="nav-link btn" id="pills-tips-tab" data-bs-toggle="pill" data-bs-target="#pills-tips" type="button" role="tab" aria-controls="pills-tips" aria-selected="false">All</button>
                        </li>
                    </ul>
                </center>

                <div className="row list-diary">
                    <h1>List Of Diary</h1>

                    <div className="row diary-items">
                        {
                            diaries?.filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                } else if (val.detail_user.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                }
                            }).map((diary) => {
                                return (
                                    <DiaryItems
                                        key={diary.id}
                                        id={diary.id}
                                        title={diary.title}
                                        gambar={diary.cover_image}
                                        nama={diary.detail_user?.name}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Faq />
            <Footer />
        </div>
    )
}

export default Diaries;