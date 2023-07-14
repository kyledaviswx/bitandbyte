import "./App.css";
import Home from "./pages/Home";
import bookCover from "./assets/frontcover_partial.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <Container>
        <Row>
          <Col>
            <header style={{ paddingLeft: 0 }}>
              <Image className="main_img" src={bookCover}></Image>
            </header>
          </Col>
        </Row>
      </Container>
      <body style={{ marginTop: "20px" }}>
        <Home />
      </body>
    </div>
  );
}

export default App;
