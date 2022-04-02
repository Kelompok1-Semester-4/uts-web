import React from "react";
import HeroImage from "../../assets/images/hero.png";
import icon_lifetime_access from "../../assets/images/icon_lifetime_access.png";
import icon_online_counseling from "../../assets/images/icon_online_counseling.png";
import icon_diary from "../../assets/images/icon_diary.png";
import icon_mentorship from "../../assets/images/icon_mentor.png";
import ConselorItems from "../../items/ConselorItems";
import PopularCourseItem from "../../items/PopularCourseItem";

class Home extends React.Component {
  state = {
    kelompok: [],
    conselor: [],
  };

  getDataApi = () => {
    fetch("http://localhost:3001/courses?rate.id=3")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          kelompok: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  gwtApiConselor = () => {
    fetch("http://localhost:3001/detail_user?users.role.name=conselor")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          conselor: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getDataApi();
    this.gwtApiConselor();
  }

  render() {
    return (
      <div className="home">
        {/* HERO */}
        <div className="row ">
          <div className="col-md-5 align-self-center">
            <h1 className="title">Consultation Is Easier With Speak UP</h1>
            <p className="desc">
              Speak Up is a digital counseling service provider platform that
              aims to help people solve mental health problems
            </p>
            <button className="btn btn-primary mt-3">Get Started →</button>
          </div>
          <div className="col-md"></div>
          <div className="col-md-5 d-flex align-self-center">
            <img src={HeroImage} className="ml-auto img-fluid" alt="" />
          </div>
        </div>

        {/* FEATURE */}
        <div className="row mx-4 feature">
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

        {/* POPULAR COURSE */}
        <div className="row d-flex justify-content-between align-items-center popular-course">
          <h1>Popular Course</h1>
          <h3>See all →</h3>

          <div className="row popular-course-items mt-4 flex-row flex-nowrap flex-row flex-nowrap overflow-scroll">
            {this.state.kelompok.map((kelompok) => {
              return (
                <PopularCourseItem
                  key={kelompok.id}
                  img={kelompok.image}
                  title={kelompok.title}
                  desc={kelompok.description}
                />
              );
            })}
          </div>
        </div>

        <div className="row d-flex justify-content-between align-items-center popular-course">
          <div className="col-md-5 ">
            <h1>Our Best Conselor</h1>
            <p className="text-secondary mt-3">
              We have a wide network of relationships so that we can meet the
              various needs of our customers and partners.
            </p>
          </div>
          <h3>See all →</h3>
        </div>

        {/* CONSELOR LIST */}
        <div className="row conselor">
          {/* {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <ConselorItems />;
        })} */}

          {this.state.conselor.map((conselor) => {
            return (
              <ConselorItems
                key={conselor.id}
                img={conselor.photo}
                name={conselor.name}
                position={conselor.position}
              />
            );
          })}
        </div>

        {/* FAQ */}
        <div className="row faq-list justify-content-center">
          <div className="col-md-6 text-center col-sm faq-header">
            <h1 className="d-inline-block">Frequently Asked Questions</h1>
            <p className="text-secondary mt-3">
              We have a wide network of relationships so that we can meet the
              various needs of our customers and partners.
            </p>
          </div>
        </div>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h2 className="accordion-header" id="headingOne">
                Why are mental health issues still taboo in Indonesia?
              </h2>
            </button>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <h2 className="accordion-header" id="headingTwo">
                What are the things that determine the success of cooperatives?
              </h2>
            </button>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <h2 className="accordion-header" id="headingThree">
                What are the things that determine the success of cooperatives?
              </h2>
            </button>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
