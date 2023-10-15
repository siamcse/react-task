import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalA = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    console.log(isChecked);
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
                <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary me-3" >All Contacts</button>
                    <button className="btn btn-warning me-3" type="button" >US Contacts</button>
                    <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <input className="form-control my-4 w-50" type="text" placeholder="Search Contacts" />
                    <p>
                        <input checked={isChecked}
                            onChange={handleCheckboxChange} type="checkbox" className="me-2" />
                            Only Even
                    </p>
                </div>
                <div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>34546213452</td>
                                <td>Country</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalA;