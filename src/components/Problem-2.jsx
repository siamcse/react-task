import React from 'react';
import ModalA from './ModalA';
import { Button } from 'react-bootstrap';

const Problem2 = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    {/* <button className="btn btn-lg btn-outline-primary" >All Contacts</button> */}
                    <Button variant="outline-primary" onClick={() => setModalShow(true)}>
                        All Contacts
                    </Button>
                    <button className="btn btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
                <ModalA
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );
};

export default Problem2;