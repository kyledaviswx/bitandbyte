import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import treasure from "../assets/treasure.png";
import kyle from "../assets/Kyle.png";
import buyNowButton from "../assets/buy-on-amazon-button.png";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Order Bit & Byte on Amazon and begin your own adventure!</h1>
        </Col>
        <Col>
          <div className="amzLinkDiv">
            <a href="https://amzn.to/3E0bXiM" target="_blank" rel="noreferrer">
              <img src={buyNowButton} alt="Buy Bit and Byte on Amazon" />
            </a>
          </div>
        </Col>
      </Row>
      <hr class="fancy-line"></hr>
      <Row>
        <Col md={12} lg={6}>
          <img alt="" style={{ width: "330px" }} src={treasure}></img>
        </Col>
        <Col md={12} lg={6}>
          <h2>About the book</h2>
          <p>
            Computer programming is truly for everyone! Start learning early
            with Bit and Byte's Adventures in Coding. Kids (and adults!) of any
            age will be taken on an underwater adventure to find sunken
            treasure. Using math and programming basics, Bit and Byte solve
            problems to get the loot! Bit is a fearless and incredibly smart
            older sister to Byte. Byte is a boy that is just beginning to learn
            programming, just like the readers. No matter what level of learning
            you are at, this entertaining story will keep you captivated.
            Learning through adventure will put you right in the action along
            with Bit and Byte. This is just the beginning! Where will
            programming take YOU, Bit, and Byte next time?
          </p>
        </Col>
      </Row>
      <hr class="fancy-line"></hr>
      <Row>
        <Col md={12} lg={6}>
          <h2>About the Author</h2>
          <p>
            Kyle Davis is a full-stack developer from Oklahoma. He is a proud
            Native American that is a citizen of the Cherokee Tribe of Northeast
            Alabama. Growing up with a love for weather, he began his career in
            Meteorology with a degree from the University of Oklahoma. In 2009,
            he wanted to make a phone app, so he bought a programming book and
            began his own new adventure. He immediately fell in love with
            programming and the challenges that come with it. Kyle and his wife
            Aimee have two wonderful children, Spencer and Clara. While reading
            to them one night, he wished there was a way to teach them
            programming with a fun story. The idea for Bit and Byte was born!
          </p>
        </Col>
        <Col md={12} lg={6}>
          <img alt="" style={{ width: "330px" }} src={kyle}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
