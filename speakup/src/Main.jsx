import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Counseling from "./assets/pages/Counseling";
import Courses from "./assets/pages/Courses";
import DetailCourse from "./assets/pages/DetailCourse";
import DetailDiary from "./assets/pages/DetailDiary";
import Diaries from "./assets/pages/Diaries";
import Home from "./assets/pages/Home";

const Main = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/diaries" element={<Diaries />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/counseling" element={<Counseling />} />
                    <Route path="/courses/:id" element={<DetailCourse />} />
                    <Route path="/diaries/:id" element={<DetailDiary />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Main;