import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ModalC from './ModalC';

const ModalA = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [evenContacts, setEvenContacts] = useState([]);
    const [modalCShow, setModalCShow] = useState(false);
    const [contact, setContact] = useState("");

    useEffect(() => {
        fetch('contacts.json')
            .then(res => res.json())
            .then(data => {
                setContacts(data);
                setEvenContacts(data);
            })
    }, [])

    // useEffect(() => {
    //     fetch(`https://contact.mediusware.com/api/contacts/?format=json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setContacts(data.results);
    //             setEvenContacts(data.results);
    //         })
    // }, [])

    useEffect(() => {
        if (isChecked) {
            const result = contacts.filter((contact, i) => i % 2 !== 0);
            setEvenContacts(result);
        }
        else {
            setEvenContacts(contacts);
        }
    }, [isChecked])

    const handleSearch = (e) => {
        const searchVal = e.target.value;
        const filterdItem = contacts.filter(contact => contact.country.name.toLowerCase().includes(searchVal.toLowerCase()));
        setEvenContacts(filterdItem);
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    console.log(contacts);
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
            <Modal.Body style={{ minHeight: '500px' }}>
                <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary me-3" >All Contacts</button>
                    <button className="btn btn-warning me-3" type="button" >US Contacts</button>
                    <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <input onChange={handleSearch} className="form-control my-4 w-50" type="text" placeholder="Search Contacts" />
                    <p>
                        <input checked={isChecked}
                            onChange={handleCheckboxChange} type="checkbox" className="me-2" />
                        Only Even
                    </p>
                </div>
                <div className='mh-25' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <table className="table table-striped mh-25 overflow-scroll">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                evenContacts?.map(contact => <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td onClick={() => {
                                        setModalCShow(true)
                                        setContact(contact.phone)
                                    }}>{contact.phone}</td>
                                    <td>{contact.country.name}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <ModalC
                    show={modalCShow}
                    onHide={() => setModalCShow(false)}
                    contact={contact}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalA;