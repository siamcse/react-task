import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalC = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal C
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center'>
                {props.contact}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalC;