import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import styled from 'styled-components';



function App() {
  AOS.init({
    duration: "900"
  });
  $(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });
  return (
    <div className="begin">
      <div className="background"></div>
      <div className="welcome text-center text-white">
        <h1 data-aos="zoom-in" className="welcome-text">Welcome to my portfolio</h1>
        <h1 data-aos="zoom-in" className="welcome-text2">Scroll for more</h1>
      </div>
      <div data-aos="fade" className="text-center pt-5 pb-5 position-relative text-white">
        <h1 id="topabout-text">About me</h1>
      </div>
      <CardGroup data-aos="fade-up" className="carddeck text-center">
        <Card className="bg-dark text-light">
          <Card.Img className="images" variant="top" src="images/codeimg.jpg" alt="coding picture"/>
          <Card.Body>
            <Card.Title className="pt-1 font-weight-bold cardtitle">
              Professional background
            </Card.Title>
            <Card.Text className="cardtxt">
              Hello I'm ShahRukh Ahmed, and I am a IT support specialist and web
              developer. I also design UI's in the meantime, but keep looking to
              find out more about me!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img className="images" variant="top" src="images/tajimg.jpg" alt="taj mahal picture"/>
          <Card.Body>
            <Card.Title className="pt-1 font-weight-bold cardtitle">
              Ethnic background
            </Card.Title>
            <Card.Text className="cardtxt">
              I come from an Indian and African American background, and my
              father is from Hyderabad while my mother is from America.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img className="images" variant="top" src="images/locimg.jpg" alt="chicago picture"/>
          <Card.Body>
            <Card.Title className="pt-1 font-weight-bold cardtitle">
              Location
            </Card.Title>
            <Card.Text className="cardtxt">
              I am located in Normal, IL, and I have been in this twin city for
              most of my life.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <div className="text-center pt-5 pb-5 position-relative text-white">
        <h1 data-aos="fade" id="topabout-text">Web development projects</h1>
      </div>
      <CardGroup data-aos="fade-up" className="carddeck text-center">
        <Card className="bg-dark text-light">
          <Card.Img
            className="images"
            variant="top"
            src="images/cryptoimg.png"
            alt="picture of cryptocurrency website"
          />
          <Card.Body>
            <Card.Title className="pt-3 font-weight-bold">
              Real-time cryptocurrency website
            </Card.Title>
            <Card.Text>
              A real-time website in which you can see various cryptocurrency
              prices.<br></br>
              <a href="https://noircss.github.io/cryptocurrency-price-tracker/">
                <p id="linked-text1">Click me to visit</p>
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Created using React and API</small>
          </Card.Footer>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img
            className="images"
            variant="top"
            src="images/expensetrackerimg.png"
            alt="picture of expense tracker website"
          />
          <Card.Body>
            <Card.Title className="pt-3 font-weight-bold">
              Expense tracker website
            </Card.Title>
            <Card.Text>
              A website important to those who love to track expenses.<br></br>
              <a href="https://noircss.github.io/expense-tracker/">
                <p id="linked-text2">Click me to visit</p>
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Created using React and context API
            </small>
          </Card.Footer>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img
            className="images"
            variant="top"
            src="images/travelweb.png"
            alt="picture of travel agency website"
          />
          <Card.Body>
            <Card.Title className="pt-3 font-weight-bold">
              Responsive travel website
            </Card.Title>
            <Card.Text>
              A responsive travel agency website, used to book flights and
              experiences.<br></br>
              <a href="https://noircss.github.io/travel-website/">
                <p id="linked-text3">Click me to visit</p>
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Created using React and a few animations :)
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <div data-aos="fade" className="etxtgroup">
      <div className="position-relative text-light d-inline-block justify-content-center">
        <h2 id="etxtgroupt">Contact me?</h2>
        <a className="etxt" href="mailto: vzxfinest@gmail.com"><img className="conicon" src="images/mail.png" alt="email"/></a>
        <a className="etxt" href="tel:7347310614"><img className="conicon" src="images/phone.png" alt="phone"/></a>
      </div>
      </div>

      <div data-aos="fade" className="position-relative socialname text-white pb-4 d-flex justify-content-center flex-nowrap">Check me out here</div>
      <div data-aos="fade" className="position-relative socials  d-flex justify-content-center flex-nowrap">
        <a className="twittericon" href="https://www.twitter.com/noircss"><img src="images/twitter.svg" alt="twitter"/></a>
        <a className="twittericon" href="https://www.linkedin.com/in/shahrukhahmed12"><img src="images/linkedin.svg" alt="linkedin"/></a>
        <a className="twittericon" href="https://www.github.com/noircss"><img src="images/github.svg" alt="github"/></a>
        <a className="twittericon" href="https://www.instagram.com/noircss"><img src="images/insta.svg" alt="instagram"/></a>
        <a className="twittericon" href="https://www.behance.net/shahrukhahmed12"><img src="images/behance.svg" alt="behance"/></a>
      </div>
    </div>
  );
}

export default App;
