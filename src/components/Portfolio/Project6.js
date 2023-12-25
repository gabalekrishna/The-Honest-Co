import React,{useEffect} from "react";
import InnerHeader from "../InnerHeader.js";
import "./../../App.css";
import "./Portfolio.css";
import "./project.css";
import Slider from "react-slick";
import Footer from "./../Footer";
import Filter from "./Filter";
import ProjectCards from "../ProjectCards";
import { NextArrow, PrevArrow } from "../Story/Story";
import Banner from "../../images/pro6Banner.jpg";
import Grid from "../../images/GIftly/Grid/Mobile Grid Giftly.jpg";
import Grid2 from '../../images/GIftly/Grid/Mobile Grid 2 Giftly.jpg'
import mob1 from '../../images/GIftly/Mobile Grid 1 a.jpg'
// import mob2 from '../../images/GIftly/Mobile Grid 1 b.jpg'
import mob3 from '../../images/GIftly/Mobile Grid 1 c.jpg'
// import mob4 from '../../images/GIftly/Mobile Grid 1 d.jpg'
import mob5 from '../../images/GIftly/Web Grid a.jpg'
import mob6 from '../../images/GIftly/Web Grid b.jpg'
import mob7 from '../../images/GIftly/Web Grid c.jpg'
import mob8 from '../../images/GIftly/Web Grid d.jpg'
import secondGrid from "../../images/pro6SecondaryBanner.jpg";
import webGrid from "../../images/GIftly/Web/Web Grid Giftly.jpg";
import conclusion from "../../images/GIftly/Conclusion.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import myFooterLogo from "../../images/footer-logo.png";
import Arrow from "../../images/White_Arrow.json";
import Lottie from "lottie-react";

function Project6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: true, // Add this line to enable arrows
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section>
      {/* Header */}
      <InnerHeader />
      <Helmet>
        <title>Online Photo Sharing with E-Commerce </title>
        <meta
          name="description"
          content="Celebrate every moment with our exclusive photo-sharing app integrated with e-commerce capabilities, allowing users to cherish and share memories seamlessly."
        />
        <meta
          name="keywords"
          content="D2C & E-Commerce · Custom Softwares · Image Sharing · Payment Gateways"
        ></meta>
        <meta property="og:image" content={Banner} />
        <meta name="author" content="Karthik Nath"></meta>
      </Helmet>
      {/* mian content */}
      <section>
        <div className="container-fluid main-container">
          <ul className="breadcrumb-navigation pt-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="current">Online Photo Sharing with E-Commerce</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7 pb-3">
                <div className="top-heading">
                   Community Driver
                  <br />
                  Content Sharing & E-Commerce
                  <br />
                  Platform
                  <img
                    alt=""
                    className="blog-logo blog-hide mx-3 d-none d-md-block"
                    src={`https://thehonestco.in/react.svg`}
                  ></img>
                </div>
              </div>
              <div className="col-12 col-md-5 d-none d-sm-block">
                <div className="py-4">
                  <ul className="top-works">
                    <li className="pt-4"> Image Sharing</li>
                    <li className="pt-4">
                    Payment Gateways{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li className="d-inline-block mb-2 mb-md-0 mr-md-2">
                    <a>D2C & E-Commerce</a>
                  </li>
                  <li className="px-4 d-inline-block">
                    <a>Custom Softwares</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img src={Banner} alt="" className="img-fluid w-100 my-md-4 my-0 py-md-3 py-0" />
        {/* section 1 */}
        <section className="container main-container">
          <div className="row py-5">
            <div className="col-12 col-md-6 pb-4">
              <div className="proj-heading">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content pb-4">
              An exclusive invite only social media platform for families to
                better share memories and moments and make the best of
                technology to stay connected via online gifting. .
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob1}
              ></img>
              {/* <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob2}
              ></img> */}
            </div>
            <div className="col-12 col-md-6 px-3">
              <div className="proj-heading paddingLeft-even">
                Solution
                <hr className="w-50" />
              </div>
              <div className="proj-content pb-4 w-100 paddingLeft-even">
              Creation of a mobile application with an e-commerce and
                community based content sharing module which allows the users to
                interact with their friends and and purchase or gift products
                listed over the platform.
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob3}
              ></img>
              {/* <img
                alt=""
                className="d-block d-md-none w-100 py-2"
                src={mob4}
              ></img> */}
            </div>
            <div className="col-12">
              <img src={Grid} alt="" className="w-100 py-5 d-none d-md-block" />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 d-flex">
              <div className="proj-heading" style={{ paddingTop: "0px" }}>
              Social E-Commerce
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="content_text">
              Our team created an invite only community modules which allows
                the user to personally invite users to join their family tree.
                Once invited, the users would have the ability to gift products
                available on the platform
              </div>
            </div>
            <div className="col-12 Image_size d-none d-md-block">
              <img src={secondGrid} alt="" className="w-100 py-5 Image_baner" />
            </div>
            <div className="col-12 pt-4 d-block d-md-none">
              <img src={secondGrid} alt="" className="w-100" />
            </div>
          </div>
          {/* section2 */}
          <div className="row py-md-5 py-4 pb-md-3 pb-0">
            <div className="col-12 col-md-6 d-md-none d-flex">
              <div className="proj-heading" style={{ paddingTop: "0px" }}>
              Dutch & Gift Together
              </div>
            </div>
            <div className="col-12 col-md-6 py-md-5 py-0">
              <div className="custom_left_text">
              Once the user has been invited to a family tree, the users on
                the platform would have the ability to create a new gifting
                request wihich would allow the respective users to dutch & gift
                products available off the platform
                <br />
              </div>
            </div>
            {/* desktop only */}
            <div className="col-12 col-md-6 d-none d-md-flex">
              <div className="proj-heading d-flex align-items-center ml-auto py-5">
              Make Moments Count
              </div>
            </div>
            <div className="col-12 d-none d-md-block">
              <img src={Grid} alt="" className="w-100 py-5" />
            </div>
            {/* mobile only */}
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob5} alt="" className="w-100" />
            </div>
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob6} alt="" className="w-100" />
            </div>
          </div>
          {/* section3 */}
          <div className="row py-4 d-none">
            <div className="col-12 text-align-center mobile-text-align-left">
              <div className="proj-heading">
                 Management Made Easy Via Dashboards
              </div>
              <div className="proj-sub-heading py-3">
              There exists a lot of applications which allows the users to
                share, like and interact with the media but few of them offers a
                private circle where one can decide whom to invite and then
                gift. The user would have the ability to select from the
                different category section and link the purchase request to a
                moment.
              </div>
            </div>
            {/* desktop */}
            <div className="col-12 d-none d-md-flex">
            <img src={webGrid} alt="" className="w-100 py-5" />
            </div>
            {/* mobile */}
            <div className="col-12 d-block d-md-none py-2">
              <img src={mob8} alt="" className="w-100" />
            </div>
          </div>
        </section>
      </section>
      {/* section 3 */}
      <section className="container main-container custom_padding">
        <div className="row">
          <div className="col-12">
            <div className="proj-heading">The Conclusion</div>
            <hr className="heading_line" />
          </div>
          <div className="col-12 col-md-5 py-2">
            <div className="w-100">
            Our Electronic Health platform, with its user-friendly mobile
              application, empowers individuals to take control of their health
              by efficiently managing medications and consultations all via an
              intitutive mobile application.
            </div>
          </div>
          <div className="col-12">
            <img src={conclusion} alt="" className="w-100 pt-3" />
          </div>
        </div>
      </section>
      <section className="other__work__container border-white">
        <div className="container main-container pb-5 pt-md-7">
          <div className="heading__wrapper">
            <h5>
              Our Other <strong>Work</strong>
            </h5>
            <span>View All of Our Work</span>
          </div>

          <div className="row custom-row">
            <Slider {...settings}>
              {Filter.map((data, index) => {
                const { name, logo, image, description } = data;
                const cardClass = index % 2 === 0 ? "odd-card" : "even-card";
                const marginTopClass =
                  index === 0 || index === 1 ? "" : "margin-port";

                const newImageUrl = `../${image}`;
                const newLogoUrl = `../${logo}`;

                return (
                  <ProjectCards
                    description={description}
                    marginTopClass={marginTopClass}
                    cardClass={cardClass}
                    name={name}
                    logo={newLogoUrl}
                    image={newImageUrl}
                    key={index}
                    width={12}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        {/* <Footer/> */}
        {/* footer */}
        <div className="container pt-5">
          <div className="row py-md-5 align-items-end">
            <div className="col-12 col-md-6 col-lg-6">
              <img className="w-50 pb-4 d-md-none d-block" alt="Footer Logo" />
              <article className="c-article">
                <header className="c-article__header">
                  <h2 className="c-article__title footer-title">
                    <span className="footer-title">Honest Edge.</span>
                  </h2>
                </header>
              </article>
              <h5 className="footer-content cool-link text-white">
                <a href="" className="text-white">
                  Click here to start elevating your physical and digital
                  customer experiences.
                  <div
                  className="col-12 col-md-8 col-lg-3 d-flex justify-content-start"
                  style={{ marginLeft: "110px", marginTop: "-22px" }}
                >
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 footerArrow"
                  />
                </div>
                </a>
              </h5>
            </div>
            <div className="col-12 col-md-3 col-lg-3"></div>
            <div className="col-12 col-md-3 col-lg-3">
              <img
                className="w-90 d-md-block d-none"
                src={myFooterLogo}
                alt="Footer Logo"
              />
            </div>
          </div>
          <div className="row pt-md-6 pb-4">
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">About</div>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">
                Application Development{" "}
              </div>
              <ul>
                <li>
                  <a href="#">Custom Software Development</a>
                </li>
                <li>
                  <a href="#">Mobile Application Development</a>
                </li>
                <li>
                  <a href="#">AI & ML solutions</a>
                </li>
                <li>
                  <a href="#">Web3 & Blockchain</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Content Creation </div>
              <ul>
                <li>
                  <a href="#">Motion Graphics</a>
                </li>
                <li>
                  <a href="#">2D/ 3D Graphics Design</a>
                </li>
                <li>
                  <a href="#">Advertisements</a>
                </li>
                <li>
                  <a href="#">Branding & Identify Design</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Industrial Design </div>
              <ul>
                <li>
                  <a href="#">Product Design</a>
                </li>
                <li>
                  <a href="#">Concept Development & Development</a>
                </li>
                <li>
                  <a href="#">Manufacturing Support</a>
                </li>
                <li>
                  <a href="#">Merchandizing & Packaging Designe</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Industrial </div>
              <ul>
                <li>
                  <a href="#">D2C& E-Commerce</a>
                </li>
                <li>
                  <a href="#">Banking & Finance</a>
                </li>
                <li>
                  <a href="#">Healthcare Technology</a>
                </li>
                <li>
                  <a href="#">Staffing & Recruitment</a>
                </li>
                <li>
                  <a href="#">Educational Technology</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Resources </div>
              <ul>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Articles</a>
                </li>
                <li>
                  <a href="#">White Papers</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Infographics</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">Portfolio</div>
              <ul>
                <li>
                  <a href="#">Application Development</a>
                </li>
                <li>
                  <a href="#">Content Creation</a>
                </li>
                <li>
                  <a href="#">Industrial Design</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Connect With Us</div>
              <ul>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">WhatsApp</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Get in touch</a>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">Get In Touch </div>
              <ul>
                <li>
                  <a href="#">Are you a Customer</a>
                </li>
                <li>
                  <a href="#">Are you a creator?</a>
                </li>
              </ul>
            </div>

            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> hello@thehonestco.in </div>
              <div className="footer-heading mb-2"> Terms & Conditions </div>
            </div>
          </div>
          <p className="post-footer pt-3 border-top text-center">
            &copy; 2023 - The Honest Company
          </p>
        </div>
      </section>
    </section>
  );
}

export default Project6;
