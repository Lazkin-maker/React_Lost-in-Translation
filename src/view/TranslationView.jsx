import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useState } from "react";

const TranslationView = () => {
  const [inputTranslation, setInputTranslation] = useState('');
  const [translateString, setTranslateString] = useState('');
  const signTranslated = [[]];

  const handleTranslation = (event) => {
    event.preventDefault();

    let inputString = inputTranslation.toLowerCase().replace(/[^a-zA-Z]/g, '');

    const regex = /[^a-zA-Z]{0,40}$/
    if (regex.test(inputString)) {
      console.log('inputString', inputString)
      setTranslateString(inputString)
      translateString.split('').forEach((chars, index) => {
        signTranslated[0].push(<img key={index} src={`../asset/individial_signs/${chars}.png`} />)
      })
    } else {

      console.log("Somthing went wrong");
    }



  }
  return (
    <>
      <Container fluid className="translation-form-container">
        <Row className="justify-content-md-center">
          <Col xs={8}>
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
      <TranslationDisplay />
    </>
  );
}
export default TranslationView