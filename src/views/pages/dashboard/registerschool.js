import React, {Fragment,useState} from "react";
import {Button, Modal,Container,Row,Col,FormControl,Form} from 'react-bootstrap'


function registerSchool() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} size={'xl'} centered dialogClassName='modal-dialog' onHide={handleClose}>
                <Modal.Header bsPrefix={'pad_2'} >
                    <Modal.Title bsPrefix={'font-small font-medium'} >Register New School</Modal.Title>
                    <hr className={'modal-dotted'}/>
                </Modal.Header>
                <Modal.Body >
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group as={Row} >
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"  required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a school Name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Location [City]
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"  />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a location.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>

                                    <Form.Label bsPrefix={'font-small'} column sm="4">
                                        Admin Username
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text"  />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a admin username.
                                        </Form.Control.Feedback>
                                    </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>

                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                           School Logo
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="file"  />
                                        </Col>
                                    </Form.Group>


                                </Form>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group as={Row} >
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Address
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text"  />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide address.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            Contact Number
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="phone"  />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide 10 digit contact number.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label bsPrefix={'font-small'} column sm="4">
                                            School Email
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="email"  />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <hr className={'modal-dotted'}/>
<p>OR</p>

                                <Form.Group as={Row}>
                                    <Form.Label bsPrefix={'font-small'} column sm="4">
                                        Upload Bulk file
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="file"  />
<span> maximum file size limit - 10 MB</span>
                                        <Form.Control.Feedback type="invalid">
                                            Please upload bulk file.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr className={'modal-dotted'}/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer bsPrefix>
                    <div className={'modal-footer'}>
                        <Button style={{border:"1px solid gray"}} className={'font-black font-extra-small'} variant="outline" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button  className={'font-extra-small btn-blue'} onClick={handleClose}>
                           Register
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default registerSchool
