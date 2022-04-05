import React from "react";
import { useParams } from "react-router-dom";
const DetailCourse = () => {
    let {id} = useParams();
    return(
        <div>
            <h1>Detail Course page {id}</h1>
        </div>
    );
}

export default DetailCourse;