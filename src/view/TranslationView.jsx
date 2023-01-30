import { Container, Row, Col } from "react-bootstrap"
import TranslationDisplay from "../components/TranslationDisplay";
import InputComponent from '../components/InputComponent'
import { useEffect, useState } from "react";
import { addTranslation } from '../reducers/userSlice';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const processInputString = (inputString) => {
  inputString = inputString.toLowerCase().replace(/[^a-z]/g, '');
  // inputString = inputString.toLowerCase().replace(/[^a-z\s]/g, '');


  const regex = /[^a-z]{0,40}$/
  if (regex.test(inputString)) {
    return { string: inputString, error: null }
  }
  return { string: null, error: "Something went wrong please try again!" }
}

const TranslationView = () => {
  const dispatch = useDispatch();
  const [inputTranslation, setInputTranslation] = useState('');
  const useSelectLoggedIn = useSelector(state => state.user.loggedInUser);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [signTranslated, setSignTranslated] = useState([]);
  const [error, setError] = useState(null)

  const navigate = useNavigate();


  // useEffect(() => {
  //     if (!useSelectLoggedIn) {
  //         navigate('/')
  //     } else {
  //       setLoggedInUser(useSelectLoggedIn
  //         )}
  // }, [loggedInUser, navigate, dispatch])

  useEffect(() => {
    setLoggedInUser(useSelectLoggedIn)
  }, [dispatch])

  const handleTranslation = async (event) => {
    event.preventDefault();

    const { string, error } = processInputString(inputTranslation);

    if (string) {
      const transDetails = {
        currentId: loggedInUser.id,
        string: string
      }

      await dispatch(addTranslation(transDetails))

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