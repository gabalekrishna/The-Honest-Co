import React, { useEffect } from "react";
import InnerHeader from "../InnerHeader.js";
import "./../../App.css";
import "./Portfolio.css";
import "./project.css";
import Slider from "react-slick";
import Filter from "./Filter";
import myFooterLogo from "../../images/footer-logo.png";
import mob1 from "../../images/TranXat2/Mobile/mob1.webp";
import mob2 from "../../images/TranXat2/Mobile/mob2.webp";
import mob3 from "../../images/TranXat2/Mobile/mob3.webp";
import mob4 from "../../images/TranXat2/Mobile/mob4.webp";
import mob5 from "../../images/TranXat2/Mobile/mob5.webp";
import mob6 from "../../images/TranXat2/Mobile/mob6.webp";
import mob7 from "../../images/TranXat2/Mobile/mob7.webp";
import mob8 from "../../images/TranXat2/Mobile/mob8.webp";
import ProjectCards from "../ProjectCards";
import { NextArrow, PrevArrow } from "../Story/Story";
import Banner from "../../images/TranXat2/Web/Banner.webp";
import Grid from "../../images/TranXat2/Web/Grid 1.webp";
import Grid2 from "../../images/TranXat2/Web/Grid2Project.webp";
import secondGrid from "../../images/TranXat2/banner2.webp";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Arrow from "../../images/White_Arrow.json";
import Lottie from "lottie-react";
import mobwork1 from '../../images/Portfolio/Portfolio/Portfoliolisting/Frame 2.webp'
import GoogleTagManager from "../../GoogleTagManager.js";
import ChatComponent from "../ChatComponent.js";

function Project2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobileView = window.innerWidth <= 768;
  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: true, // Add this line to enable arrows
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
    infinite: false,
    slidesToScroll: 1,
  };
  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1;
  } else {
    settings.slidesToShow = 2;
  }
  return (
    <section>
      {/* Header */}
      <InnerHeader />
      <Helmet>
        <title>P2P Money Remittance Mobile Application </title>
        <GoogleTagManager />
        <meta
          name="description"
          content="Experience seamless P2P money transfer and utility payments with our intuitive mobile app, providing a hassle-free financial solution for users."
        />
        <meta
          name="keywords"
          content="Banking & Finance · Mobile Apps · P2P Payments · Utilities Payment"
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
            <li className="current">P2P Money Remittance Mobile Application</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7 pb-3">
                <div className="top-heading">
                  Peer To Peer Payments <br />
                  Through Money Remittance
                  <br />
                  Platforms.
                </div>
              </div>
              <div className="col-12 col-md-5 d-none d-sm-block">
                <div className="py-4">
                  <ul className="top-works">
                    <li className="pt-4">P2P Payments</li>
                    <li className="pt-4">Mobile Wallet Applications </li>
                  </ul>
                </div>
              </div>
              <div className="py-4">
                <ul className="top-topics">
                  <li className="d-inline-block mb-2 mb-md-0 mr-md-2">
                    <a>Banking & Finance</a>
                  </li>
                  <li className="px-4 d-inline-block">
                    <a>Mobile Apps</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Banner}
          alt=""
          className="img-fluid w-100 my-md-4 my-0 py-md-3 py-3 d-none d-md-block"
        />
        {/* mobile Banner */}
        <img
          className="w-100 d-block d-md-none"
          src={mobwork1} 
        />
        {/* section 1 */}
        <section className="container main-container">
          <div className="row mt-md-5 mt-4">
            <div className="col-12 col-md-6 mt-md-0 mt-4">
              <div className="proj-heading mt-md-4 mt-3">
                Scope
                <hr className="w-40" />
              </div>
              <div className="proj-content mt-md-4 mt-3">
                A single platform allowing users to send money and execute
                utility payments via an online mobile application to enhance
                day-to-day transactions and better track bill payments and
                finances.
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 mt-md-3 mt-4"
                src={mob1}
              />
              <img
                alt=""
                className="d-block d-md-none w-100 mt-md-3 mt-3"
                src={mob2}
              />
            </div>
            <div className="col-12 col-md-6 py-md-3 py-5 mt-md-0 mt-2">
              <div className="proj-heading paddingLeft-even">
                Solution
                <hr className="w-50" />
              </div>
              <div className="proj-content pb-4 w-100 paddingLeft-even mt-md-4 mt-3">
                Development of a cutting-edge mobile-based platform allowing
                users to seamlessly transfer money and effortlessly manage their
                finances, enhancing the overall user experience and
                satisfaction.
              </div>
              <img
                alt=""
                className="d-block d-md-none w-100 mt-md-0 mt-4"
                src={mob3}
              />
              <img
                alt=""
                className="d-block d-md-none w-100 mt-md-0 mt-3"
                src={mob4}
              />
            </div>
            <div className="col-12">
              <img src={Grid} alt="" className="w-100 py-5 d-none d-md-block" />
            </div>
          </div>
          <div className="row py-md-5 py-2">
            <div className="col-12 col-md-6 d-flex mt-md-3 mt-0">
              <div className="proj-heading" style={{ paddingTop: "0px" }}>
                One For All
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="proj-content paddingLeft-even mt-md-3 mt-2">
                A unique mobile application allowing users to pay almost all of
                their online bills. The platform enables online payments through
                multiple gateways and service channels, offering a one-for-all
                bills payment solution for hassle-free utility bill settlement.
              </div>
            </div>
            <div className="col-12 Image_size d-none d-md-block">
              <img src={secondGrid} alt="" className="w-100 py-5 Image_baner" />
            </div>
            <div className="col-12 pt-4 d-block d-md-none mt-md-0 mt-1">
              <img src={mob5} alt="" className="w-100" />
            </div>
          </div>
          {/* section2 */}
          <div className="row py-md-5 py-5 pb-md-3 pb-0">
            <div className="col-12 col-md-6 d-md-none d-flex">
              <div
                className="proj-heading mt-md-1"
                style={{ paddingTop: "0px" }}
              >
                Order and Reorder
              </div>
            </div>
            <div className="col-12 col-md-6 py-md-5">
              <div className="proj-content mt-md-5 mt-2">
                The enhanced order purchsing and cart payment flow allows the
                user to easily add multiple products and single click re-order
                from the list of previous orders placed.
                <br />
              </div>
            </div>
            {/* desktop only */}
            <div className="col-12 pt-5 col-md-6 d-none d-md-flex">
              <div className="proj-heading d-flex align-items-end ml-auto py-5">
                Seamless User Experience
              </div>
            </div>
            <div className="col-12 d-none d-md-block position-relative pt-0">
              <img src={Grid2} alt="" className="w-100 pt-4" />
            </div>
            {/* mobile only */}
            <div className="col-12 d-block d-md-none py-2 mt-md-0 mt-3">
              <img src={mob6} alt="" className="w-100" />
            </div>
            <div className="col-12 d-block d-md-none py-2 mt-md-0 mt-3">
              <img src={mob7} alt="" className="w-100" />
            </div>
          </div>
          {/* section3 */}
          <div className="row py-4 d-none">
            <div className="col-12 text-align-center mobile-text-align-left">
              <div className="proj-heading">Seamless User Experience</div>
              <div className="proj-sub-heading py-3">
                The mobile application not only facilitates comprehensive
                payment management but also allows users to make payments from
                multiple banks. This transforms the application into a
                convenient one-stop platform for handling all their bills and
                utilities, offering a simplified and efficient user experience.
              </div>
            </div>
            {/* desktop */}
            {/* <div className="col-12 d-none d-md-flex">
              <img src={webGrid} alt="" className="w-100 py-5" />
            </div> */}
            {/* mobile */}
            <div className="col-12 d-block d-md-none pb-3">
              <img src={mob8} alt="" className="w-100" />
            </div>
          </div>
        </section>
      </section>
      {/* section 3 */}
      <section className="container main-container custom_padding">
          
          <div className="col-12 py-md-2 text-center">
            <div className="w-100">
              Our team was able to successfully deliver this application for the
              African Market where special attention was given to the security
              and compliance measures with a swift customer support ticketing
              module to solve user querries.
            </div>
          </div>
          
        
      </section>
      <section className="other__work__container border-white">
        <div className="container main-container pb-5 pt-md-7">
          <div className="heading__wrapper">
            <h5>
              Our Other <strong>Work</strong>
            </h5>
            <span class="d-none d-md-inline-block">View All of Our Work</span>
          </div>

          <div className="row custom-row">
            <Slider {...settings}>
              {Filter.map((data, index) => {
                const { name, logo, image, description, url } = data;
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
                    image={image}
                    key={index}
                    width={12}
                    url={url}
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
              <img className="w-50 pb-4 d-md-none d-block" src={myFooterLogo} alt="Footer Logo" style={{ marginLeft: isMobileView ? '7px' : 'auto' }}/>
              <article className="c-article">
                <header className="c-article__header">
                  <h2 className="c-article__title footer-title">
                    <span className="footer-title">Honest Edge.</span>
                  </h2>
                </header>
              </article>
              <h5 className="footer-content cool-link text-white">
                <Link
                  to="/get-in-touch/customer-inquiry"
                  className="text-white"
                >
                  Click here to start elevating your physical and digital
                  customer experiences.
                  <Lottie
                    animationData={Arrow}
                    autoplay
                    loop
                    className="w-xs-100 w-md-12 projectFooterArrow"
                  />
                </Link>
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
                  <Link to="/portfolio">Custom Software Development</Link>
                </li>
                <li>
                  <Link to="/portfolio">Mobile Application Development</Link>
                </li>
                <li>
                  <Link to="/portfolio">AI & ML Solutions</Link>
                </li>
                <li>
                  <Link to="/portfolio">Web3 & Blockchain</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Content Creation </div>
              <ul>
                <li>
                  <Link to="/portfolio">Motion Graphics</Link>
                </li>
                <li>
                  <Link to="/portfolio">2D & 3D Graphics Design</Link>
                </li>
                <li>
                  <Link to="/portfolio">Advertisements</Link>
                </li>
                <li>
                  <Link to="/portfolio">Branding & Identify Design</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Industrial Design </div>
              <ul>
                <li>
                  <Link to="/portfolio">Product Design</Link>
                </li>
                <li>
                  <Link to="/portfolio">Concept & Prototyping</Link>
                </li>
                <li>
                  <Link to="/portfolio">Manufacturing Support</Link>
                </li>
                <li>
                  <Link to="/portfolio">Merchandising & Packaging</Link>
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
                  <Link to="/resources">Case Studies</Link>
                </li>
                <li>
                  <Link to="/resources">Articles</Link>
                </li>
                <li>
                  <Link to="/resources">White Papers</Link>
                </li>
                <li>
                  <Link to="/resources">Tutorials</Link>
                </li>
                <li>
                  <Link to="/resources">Infographics</Link>
                </li>
                <li>
                  <Link to="/resources">Reports</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">Portfolio</div>
              <ul>
                <li>
                  <Link to="/portfolio">Application Development</Link>
                </li>
                <li>
                  <Link to="/portfolio">Content Creation</Link>
                </li>
                <li>
                  <Link to="/portfolio">Industrial Design</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2"> Connect With Us</div>
              <ul>
                <li>
                  <Link to="https://www.linkedin.com/company/the-honest-co">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="https://wa.me/917011242138">WhatsApp</Link>
                </li>
                <li>
                  <Link to="mailto:business@thehonestco.in">Email</Link>
                </li>
                <li>
                  <Link to="tel:+917011242138">Get in touch</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <div className="footer-heading mb-2">Get In Touch </div>
              <ul>
                <li>
                  <Link to="/get-in-touch/customer-inquiry">
                    Are you a customer?
                  </Link>
                </li>
                <li>
                  <Link to="/get-in-touch/creator-inquiry">
                    Are you a creator?
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 pt-media-4 col-md-custom-2 footer-card">
              <Link to="mailto:business@thehonestco.in">
                <div className="footer-heading mb-2">
                  {" "}
                  hello@thehonestco.in{" "}
                </div>
              </Link>
              <Link to="tel:+91 120 246 2890">
                <div className="footer-heading mb-2"> +91 120 246 2890</div>
              </Link>
              <div className="footer-heading mb-2"> Terms & Conditions </div>
            </div>
          </div>
          <p className="post-footer pt-3 border-top text-center">
            &copy; 2024 - Honest Digital Services Pvt. Ltd.
          </p>
        </div>
      </section>
      <ChatComponent />
    </section>
  );
}

export default Project2;
