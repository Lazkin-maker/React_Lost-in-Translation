import { Container, Row, Col } from "react-bootstrap"

const TranslationDisplay = ({ signTranslated }) => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    {signTranslated.map((image, index) => (
                        <img key={index} src={{image}} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default TranslationDisplay