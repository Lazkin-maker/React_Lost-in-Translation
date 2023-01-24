import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useState } from "react";

const TranslationView = () => {
  const [inputTranslation, setInputTranslation] = useState('');

  const handleTranslation = (event) => {
    event.preventDefault();

    setInputTranslation(inputTranslation)
    console.log(inputTranslation);




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
            />
          </Col>
        </Row>
      </Container>
      <TranslationDisplay />
    </>
  );
}
export default TranslationView