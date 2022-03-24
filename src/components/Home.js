import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home page</title>
        <link rel="icon" type="image/png" href="/logo1.jpg" />
      </Helmet>
      {/* <!-- page-header --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-caption">
                <h1 className="page-title">New Brand Teck</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header-->
    <!-- news --> */}
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- section-title --> */}
                <div className="section-title mb-0">
                  <h2>All about Technology. We share our knowledge on blog</h2>
                  <p>
                    Our approach is very simple:we analyze your need, we define
                    your problem and give the best solution.{" "}
                  </p>
                </div>
                {/* <!-- /.section-title --> */}
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="my-5">Our Coming events ...</h1>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">MSC</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-primary">
                        <span className="widget-49-date-day">09</span>
                        <span className="widget-49-date-month">Apr</span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">Bootcamp Js</span>
                        <span className="widget-49-meeting-time">
                          14:00 to 18.30 Hrs
                        </span>
                      </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                      <li className="widget-49-meeting-item">
                        <span>Expand module is removed</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Data migration is in scope</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Session timeout increase to 30 minutes</span>
                      </li>
                    </ol>
                    <div className="widget-49-meeting-action">
                      <a
                        href="#"
                        className="btn btn-sm btn-flash-border-primary"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">BSC</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-primary">
                        <span className="widget-49-date-day">14</span>
                        <span className="widget-49-date-month">Apr</span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">
                          React Hooks Launch
                        </span>
                        <span className="widget-49-meeting-time">
                          12:00 to 15.30 Hrs
                        </span>
                      </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                      <li className="widget-49-meeting-item">
                        <span>Expand module is removed</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Data migration is in scope</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Session timeout increase to 30 minutes</span>
                      </li>
                    </ol>
                    <div className="widget-49-meeting-action">
                      <a
                        href="#"
                        className="btn btn-sm btn-flash-border-primary"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">BBT</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-primary">
                        <span className="widget-49-date-day">27</span>
                        <span className="widget-49-date-month">apr</span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title">
                          The Introduction to CS.50
                        </span>
                        <span className="widget-49-meeting-time">
                          10:00 to 13.30 Hrs
                        </span>
                      </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                      <li className="widget-49-meeting-item">
                        <span>Desctruct the chapter into sub-modules</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Explanation of major fields</span>
                      </li>
                      <li className="widget-49-meeting-item">
                        <span>Beginner project on DS</span>
                      </li>
                    </ol>
                    <div className="widget-49-meeting-action">
                      <a
                        href="#"
                        className="btn btn-sm btn-flash-border-primary"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="hero py-5">
        <div className="content ">
          <h2>More and More is coming !!</h2>
          <p className="">
            Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
            fringilla sed, vestibulum id, eleifend justo vel bibendum sapien
            massa ac turpis faucibus orci luctus non
          </p>
        </div>
        <div className="waves"></div>
      </section>
      <div className="container">
        <h1 className="my-5">Our trusted partners ...</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350"
                          alt="card image"
                        />
                      </p>
                      <h4 className="card-title">DigiTeck</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, corrupti?.
                      </p>
                      <a
                        href="https://www.fiverr.com/share/qb8D02"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-4">
                      <h4 className="card-title">DigiTeck</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus facilis praesentium veniam porro earum
                        recusandae asperiores perferendis beatae vitae sed
                        libero architecto impedit, illo aliquam consectetur.
                        Dolor et sunt quae!
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-skype"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src="https://images.pexels.com/photos/3541388/pexels-photo-3541388.jpeg?auto=compress&cs=tinysrgb&h=350"
                          alt="card image"
                        />
                      </p>
                      <h4 className="card-title">Kuti-Design</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, corrupti?.
                      </p>
                      <a
                        href="https://www.fiverr.com/share/qb8D02"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-4">
                      <h4 className="card-title">Kuti-Design</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus facilis praesentium veniam porro earum
                        recusandae asperiores perferendis beatae vitae sed
                        libero architecto impedit, illo aliquam consectetur.
                        Dolor et sunt quae!
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-skype"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src="https://images.pexels.com/photos/11519125/pexels-photo-11519125.jpeg?auto=compress&cs=tinysrgb&h=350"
                          alt="card image"
                        />
                      </p>
                      <h4 className="card-title">Magnetaa 4k</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, corrupti?.
                      </p>
                      <a
                        href="https://www.fiverr.com/share/qb8D02"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-4">
                      <h4 className="card-title">Magnetaa 4k</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus facilis praesentium veniam porro earum
                        recusandae asperiores perferendis beatae vitae sed
                        libero architecto impedit, illo aliquam consectetur.
                        Dolor et sunt quae!
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-skype"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            className="social-icon text-xs-center"
                            target="_blank"
                            href="https://www.fiverr.com/share/qb8D02"
                          >
                            <i className="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
