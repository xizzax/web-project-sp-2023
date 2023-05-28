import React, { useState } from "react";
import "./styles/forms.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ShippingForm() {
  const [shippingCompany, setShippingCompany] = useState("");
  const [whatToShip, setWhatToShip] = useState("");
  const [whyChooseArkan, setWhyChooseArkan] = useState("");
  const [defineYourself, setDefineYourself] = useState("");
  const [howHeardAbout, setHowHeardAbout] = useState("");
  const [expectations, setExpectations] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log(
      "For submission",
      shippingCompany,
      whatToShip,
      whyChooseArkan,
      defineYourself,
      howHeardAbout,
      expectations
    );
    //WALEED: code to submit form data to database

    window.alert("submitted!");
    // Clear all input fields
    setShippingCompany("");
    setWhatToShip("");
    setWhyChooseArkan("");
    setHowHeardAbout("");
    setExpectations("");
  };

  const handleShippingCompanyChange = (e) => {
    setShippingCompany(e.target.value);
  };

  const handleWhatToShipChange = (e) => {
    setWhatToShip(e.target.value);
  };

  const handleWhyChooseArkanChange = (e) => {
    setWhyChooseArkan(e.target.value);
  };

  const handleDefineYourselfChange = (e) => {
    setDefineYourself(e.target.value);
  };

  const handleHowHeardAboutChange = (e) => {
    setHowHeardAbout(e.target.value);
  };

  const handleExpectationsChange = (e) => {
    setExpectations(e.target.value);
  };

  return (
    <div className="form-page">
      <Container>
        <Row>
          <Col md>
            <h1>Shipper Form</h1>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
                <label>
                  Name of shipping company:
                  <input
                    type="text"
                    value={shippingCompany}
                    onChange={handleShippingCompanyChange}
                  />
                </label>
                <br />
                <label>
                  What do you want to ship?
                  <input
                    type="text"
                    value={whatToShip}
                    onChange={handleWhatToShipChange}
                  />
                </label>
                <br />
                <label>
                  Why choose Arkan groups for shipping?
                  <textarea
                    value={whyChooseArkan}
                    onChange={handleWhyChooseArkanChange}
                  />
                </label>
                <br />
                <label>
                  What defines you the best?
                  <input
                    type="text"
                    value={defineYourself}
                    onChange={handleDefineYourselfChange}
                  />
                </label>
                <br />
                <label>
                  How did you hear about us?
                  <input
                    type="text"
                    value={howHeardAbout}
                    onChange={handleHowHeardAboutChange}
                  />
                </label>
                <br />
                <label>
                  What are your expectations?
                  <textarea
                    value={expectations}
                    onChange={handleExpectationsChange}
                  />
                </label>
                <br />
                <input type="submit" value="Submit" className="btns-forms" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShippingForm;
