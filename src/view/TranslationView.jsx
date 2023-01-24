import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useState } from "react";

const TranslationView = () => {
  const [inputTranslation, setInputTranslation] = useState('');
  const [value, setValue] = useState(''); // Declare a state variable...

  // const handleTranslation = (e, value) => {
  //   e.preventDefault();
  //   // write handle submit code here
  //   // setInputTranslation(InputComponent.value)


  //   console.log(value);

  // }
  return (
    <>
      <Container fluid className="translation-form-container">
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <InputComponent
              onChange={e => setValue(e.target.value)}
              ariaLabel={"Enter a word or a sentens for translation"}
              placeholder={"Enter a word.."}
              inputBorder={'#ebebeb'}
            />
          </Col>
        </Row>
      </Container>
      <TranslationDisplay />
    </>
  );
}
export default TranslationView