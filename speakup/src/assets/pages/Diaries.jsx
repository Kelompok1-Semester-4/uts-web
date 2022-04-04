import React, { Component } from "react";
import Diary from "../../items/DiaryItems";
class Diaries extends Component{
    state = {
        diary: [],
    };
    getDataApi = () => {
        fetch("https://speakupapi.herokuapp.com/api/diaries")
            .then((response) => response.json())
            .then((jsonHasilAmbilDariAPI) => {
                this.setState({
                    diary: jsonHasilAmbilDariAPI,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    getDataApi2 = (id) => {
        fetch("https://speakupapi.herokuapp.com/api/diaries")
        fetch("?detail_user.user_id=" + id, { method: "GET" })
            .then((response) => response.json())
            .then((jsonHasilAmbilDariAPI) => {
                this.setState({
                    diary: jsonHasilAmbilDariAPI,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    

    componentDidMount() {
        this.getDataApi();
    }
    render(){
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
                    <button className="btn btn-primary" onClick={() => this.getDataApi2(7)}>Productivity</button>
                </div>
                <div className="col-md text-center">
                <button className="btn btn-default" onClick={() => this.getDataApi2(8)}>Relationship</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default" onClick={() => this.getDataApi2(10)}>Mental Health</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default" onClick={() => this.getDataApi2(2)}>Life Plan</button>
                </div>
                <div className="col-md text-center">
                    <button className="btn btn-default" onClick={() => this.getDataApi()}>Other</button>
                </div>
            </div>

            <div className="row list-diary">
                <h1>List Of Diary</h1>

                <div className="row diary-items">
                    {this.state.diary.map((diary) => {
                        return(
                            <Diary 
                            key={diary.id}
                            title={diary.title}
                            gambar={diary.cover_image}
                            nama={diary.detail_user.name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        )
    }
}


export default Diaries;