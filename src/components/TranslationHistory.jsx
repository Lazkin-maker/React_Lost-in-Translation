import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import TranslationHistoryItem from "./TranslationHistoryItem";

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
            let newItem = [...items];
            newItem.splice(index, 1)
            setItems(newItem)
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
                            <TranslationHistoryItem key={index} item={item} index={index} deleteItem={deleteItem} viewTranslation={viewTranslation} />

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