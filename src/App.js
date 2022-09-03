import { Container } from "react-bootstrap";
import AreaOfCircle from "./Component/AreaOfCircle";
import AreaOfReactangle from "./Component/AreaOfReactangle";
import Header from "./Component/Header";
import Grid from "./Component/Grid";
import "./App.css";
function App() {
  return (
    <div className="amarContainer">
      <Header />
      {/* <Row>
        <Col></Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
      <Grid />
      <Container>
        <AreaOfReactangle />
        <AreaOfCircle />
      </Container>
    </div>
  );
}

export default App;
