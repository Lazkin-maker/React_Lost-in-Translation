import { Container, Row, Col } from "react-bootstrap"

const TranslationDisplay = ({ signTranslated }) => {

    return (
        <Container>
            <Row className="justify-content-md-center border shadow-lg p-3 mb-5 bg-body rounded">
                <Col xs={8} className="translation-display-signs ">
                    {signTranslated.map((image, index) => (
                        <img key={index} src={image} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default TranslationDisplay