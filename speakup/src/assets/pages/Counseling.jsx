import React from "react";
import HeroImage from "../../assets/images/counseling-hero.svg";
import icon_check from "../../assets/images/icon_check.svg";
import CounselingItem from "../../items/CounselingItem";
import Header from "../../components/Header";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

class Counseling extends React.Component{

    state = {
        users: [],
    }

    getCounselingAPI = () => {
        fetch("https://speakupapi.herokuapp.com/api/users?role.id=2")
          .then((response) => response.json())
          .then((CounselingAPI) => {
            this.setState({
              kelompok: CounselingAPI,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };

    // getBenefitAPI = () => {
    //     fetch("https://speakupapi.herokuapp.com/api/course-type?id=1")
    //     .then((response) => response.json())
    //     .then((BenefitAPI) => {
    //         this.setState({
    //         kelompok: BenefitAPI,
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    // Sampai difix, uncomment code ini engga bakal munculin apapun
    // componentDidMount() {
    //     this.getCounselingApi();
    //     // this.getBenefitAPI();
    // }
    
    render() {
    return (
        <div>
            <Header />
            <div className="counseling container">
                {/* HERO */}
                <div className="row mb-5">
                    <div className="col-md-6 align-self-center">
                        <h1 className="title">
                            Discover The Best Counseling Experience For You
                        </h1>
                        <form className="mt-5">
                            {/*search  */}
                            <input type="text" placeholder="Search" className="form-control" />
                        </form>
                    </div>
                    <div className="col-md"></div>
                    <div className="col-md-5 d-flex align-self-center">
                        <img src={HeroImage} className="d-block ms-auto img-fluid" alt="" />
                    </div>
                </div>
                {/* POPULAR COURSE */}
                <div className="row popular-counseling md-5">
                    <h1>Popular Counseling</h1>
                <div className="row">
                    {[1,2].map((item) => {
                        return <Counseling key={item.id}, name={item.}
                        })
                    }
                    {/* I think this is the card item? */}
                        {/* <div className="col-md-4 col-sm-6">
                            <div className="card custom-card-course">
                                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top conselor-image" alt="..." />
                                <div className="card-body conseling-body mt-3">
                                    <div className="row">
                                        <div className="col-md">
                                            <h5 className="card-title conselor-name">Amalia Holmes</h5>
                                            <h6 className="conselor-job">Psikolog at Zahair Foundation</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <p className="text-primary text-via">Via: Zoom</p>
                                        </div>
                                    </div> */}
                                    {/* <hr className="my-3" /> */}
                                    {/* BENEFIT */}
                                    {/* <div className="row px-2">
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Catatan Konsultasi</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kesehatan Mental</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Worksheet</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kepribadian</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Lembar hasil psikotes</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes minat karier</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row d-flex align-items-center ps-2 mb-2">
                                        <h3 className="my-auto p-0 mx-0 counseling-price">IDR 450.000</h3>
                                        <div className="col-md d-flex justify-content-end">
                                            <button className="btn btn-primary btn-small">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-4 col-sm-6">
                            <div className="card custom-card-course">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top conselor-image" alt="..." />
                                <div className="card-body conseling-body mt-3">
                                    <div className="row">
                                        <div className="col-md">
                                            <h5 className="card-title conselor-name">Karina Afkarina</h5>
                                            <h6 className="conselor-job">Psikolog at Zahair Foundation</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <p className="text-primary text-via">Via: Zoom</p>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    {/* BENEFIT */}
                                    <div className="row px-2">
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Catatan Konsultasi</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kesehatan Mental</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Worksheet</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kepribadian</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Lembar hasil psikotes</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes minat karier</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row d-flex align-items-center ps-2 mb-2">
                                        <h3 className="my-auto p-0 mx-0 counseling-price">IDR 450.000</h3>
                                        <div className="col-md d-flex justify-content-end">
                                            <button className="btn btn-primary btn-small">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row popular-counseling md-5">
                    <h1>Other Counseling</h1>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="card custom-card-course">
                                <img src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top conselor-image" alt="..." />
                                <div className="card-body conseling-body mt-3">
                                    <div className="row">
                                        <div className="col-md">
                                            <h5 className="card-title conselor-name">Alharia Johansen</h5>
                                            <h6 className="conselor-job">Psikolog at Zahair Foundation</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <p className="text-primary text-via">Via: Zoom</p>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    {/* BENEFIT */}
                                    <div className="row px-2">
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Catatan Konsultasi</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kesehatan Mental</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Worksheet</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kepribadian</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Lembar hasil psikotes</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes minat karier</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row d-flex align-items-center ps-2 mb-2">
                                        <h3 className="my-auto p-0 mx-0 counseling-price">IDR 450.000</h3>
                                        <div className="col-md d-flex justify-content-end">
                                            <button className="btn btn-primary btn-small">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card custom-card-course">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top conselor-image" alt="..." />
                                <div className="card-body conseling-body mt-3">
                                    <div className="row">
                                        <div className="col-md">
                                            <h5 className="card-title conselor-name">Ibnnu Sutio</h5>
                                            <h6 className="conselor-job">Psikolog at Zahair Foundation</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <p className="text-primary text-via">Via: Zoom</p>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    {/* BENEFIT */}
                                    <div className="row px-2">
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Catatan Konsultasi</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kesehatan Mental</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Worksheet</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kepribadian</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Lembar hasil psikotes</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes minat karier</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row d-flex align-items-center ps-2 mb-2">
                                        <h3 className="my-auto p-0 mx-0 counseling-price">IDR 450.000</h3>
                                        <div className="col-md d-flex justify-content-end">
                                            <button className="btn btn-primary btn-small">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card custom-card-course">
                                <img src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top conselor-image" alt="..." />
                                <div className="card-body conseling-body mt-3">
                                    <div className="row">
                                        <div className="col-md">
                                            <h5 className="card-title conselor-name">Roni Hermawan</h5>
                                            <h6 className="conselor-job">Psikolog at Zahair Foundation</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <p className="text-primary text-via">Via: Zoom</p>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    {/* BENEFIT */}
                                    <div className="row px-2">
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Catatan Konsultasi</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kesehatan Mental</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Worksheet</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes Kepribadian</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Lembar hasil psikotes</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="row d-flex align-items-center">
                                                <img src={icon_check} className="icon_check align-self-center" alt="" />
                                                <h5 className="benefit-item my-auto">Tes minat karier</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row d-flex align-items-center ps-2 mb-2">
                                        <h3 className="my-auto p-0 mx-0 counseling-price">IDR 450.000</h3>
                                        <div className="col-md d-flex justify-content-end">
                                            <button className="btn btn-primary btn-small">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faq/>
            <Footer/>
            </div>
    );
    }
}
export default Counseling;