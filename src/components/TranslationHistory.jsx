import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const TranslationHistory = () => {

    let [items, setItems] = useState(['qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', 'då', 'varför', 'sova', 'heja', 'deja', 'sju', 'åta', 'nio', 'tio']);

    const deleteAll = () => {
        if (window.confirm("Are you sure you want to delete all translations?")) {
            setItems([]);
        }
    }

    const deleteItem = (index) => {
        console.log(index)
        if (window.confirm("Are you sure you want to delete translation?")) {
            // TODO or remove not workin proporly
            let newItem = [...items];
            newItem.splice(index, 1)
            setItems([newItem])
        }
    }

    const viewTranslation = (index) => {
        console.log(index)

    }


    return (
        <Container>
            <Row >
                <Col className="justify-content-md-center border shadow-lg p-3 mb-5 bg-body rounded">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-start">
                                <p style={{}}>{item}</p>
                                <div>
                                    <button className="btn btn-danger" onClick={() => deleteItem(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                    <button className="btn btn-secondary" onClick={() => viewTranslation(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                <button className="btn btn-danger" onClick={deleteAll}>
                    <span> Delete All </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
                </Col>
            </Row>
        </Container>
    )
}

export default TranslationHistory;