import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useState } from "react";
import Logo from '../asset/Logo.png'


const TranslationView = () => {
  const [inputTranslation, setInputTranslation] = useState('');
  const [translateString, setTranslateString] = useState('');
  const [signTranslated, setSignTranslated] = useState([]);

  const handleTranslation = (event) => {
    event.preventDefault();

    let inputString = inputTranslation.toLowerCase().replace(/[^a-zA-Z]/g, '');

    const regex = /[^a-zA-Z]{0,40}$/
    if (regex.test(inputString)) {
      console.log('inputString', inputString)
      setTranslateString(inputString)
      setSignTranslated(translateString.split('').map((chars, index) => (
        `individial_signs/${chars}.png`
      )));
    } else {

      setInputTranslation('Someting went wrong, Please try again!')
      console.log("Somthing went wrong");
    }

  }
  return (
    <>
      <Container fluid className="translation-form-container mb-5">
        <Row className="justify-content-md-center">
          <Col className="mt-3 mb-1" xs={8}>
            <InputComponent
              handleSubmit={handleTranslation}
              ariaLabel={"Enter a word or a sentens for translation"}
              placeholder={"Enter a word.."}
              inputBorder={'#ebebeb'}
              value={inputTranslation}
              setValue={setInputTranslation}
              maxLength={40}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="mt-3 mb-1" xs={8}>
            <TranslationDisplay signTranslated={signTranslated} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TranslationView