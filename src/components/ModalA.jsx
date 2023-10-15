import { Button, Modal } from 'react-bootstrap';

const ModalA = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal A
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <button className="btn btn-primary me-3" >All Contacts</button>
                    <button className="btn btn-warning me-3" type="button" >US Contacts</button>
                    <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalA;