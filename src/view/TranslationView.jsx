import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useEffect, useState } from "react";
import { addTranslation } from '../reducers/userSlice';
import { useDispatch } from "react-redux"



const processInputString = (inputString) => {
  inputString = inputString.toLowerCase().replace(/[^a-zA-Z]/g, '');

  const regex = /[^a-zA-Z]{0,40}$/
  if (regex.test(inputString)) {
    return {string:inputString, error:null}
  } 
  return {string:null, error:"Something went wrong please try again!"}
}

const TranslationView = () => {

  const [inputTranslation, setInputTranslation] = useState('');
  const [signTranslated, setSignTranslated] = useState([]);
  const [error, setError] = useState(null)
  // const { users, loadingUsers } = useSelector(state => state.user);

  const dispatch = useDispatch();
  
  const currentObj = JSON.parse(localStorage.getItem('user'))
  const currentId = currentObj.id;
  //console.log("this is logged" , username);
  console.log("this is" , currentId);



  const handleTranslation = async (event) => {
    event.preventDefault();
    const {string, error} = processInputString(inputTranslation);

    if (string) {
    console.log("this is ID BEFORE SENDING" , currentId);
    console.log("this is string BEFORE SENDING" , string);

      const payload = {currentId, string}
      
      const response = await dispatch(addTranslation(payload))
      setSignTranslated(string.split('').map((chars, index) => (
        `individial_signs/${chars}.png`
      )));
    } else {
      setError(error);
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
              setValue={error ? error : setInputTranslation}
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
export default TranslationView;