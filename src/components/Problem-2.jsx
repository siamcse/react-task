import React from 'react';
import ModalA from './ModalA';
import { Button } from 'react-bootstrap';
import ModalB from './ModalB';

const Problem2 = () => {
    const [modalAShow, setModalAShow] = React.useState(false);
    const [modalBShow, setModalBShow] = React.useState(false);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    {/* <button className="btn btn-lg btn-outline-primary" >All Contacts</button> */}
                    <Button variant="outline-primary" onClick={() => setModalAShow(true)}>
                        All Contacts
                    </Button>
                    <Button variant="outline-warning" onClick={() => setModalBShow(true)}>
                        US Contacts
                    </Button>
                </div>
                
                <ModalA
                    show={modalAShow}
                    onHide={() => setModalAShow(false)}
                />
                <ModalB
                    show={modalBShow}
                    onHide={() => setModalBShow(false)}
                />
                
            </div>
        </div>
    );
};

export default Problem2;