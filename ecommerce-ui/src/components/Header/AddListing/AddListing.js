import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';

const addListing = (props) => (

    <Modal show={props.formShow} onHide={props.handleFormClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add a New Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form horizontal>

                <FormGroup controlId="formName">
                    <Col sm={3}>Name</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Name" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formCity">
                    <Col sm={3}>City</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="City" />
                    </Col>
                </FormGroup>


                <FormGroup controlId="formCountry">
                    <Col sm={3}>Country</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Country" />
                    </Col>
                </FormGroup>


                <FormGroup controlId="formTitle">
                    <Col sm={3}>Title</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Title" />
                    </Col>
                </FormGroup>


                <FormGroup controlId="formHouseType">
                    <Col sm={3}>House Type</Col>
                    <Col sm={9}>
                        <FormControl componentClass="select" placeholder="Select">
                            <option value="apartment">Apartment</option>
                            <option value="entireHouse">Entire House</option>
                        </FormControl>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formImage">
                    <Col sm={3}>Image URL</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Image URL" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formCost">
                    <Col sm={3}>Cost</Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Cost" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} sm={9}>
                        <Button type="submit">Submit New Listing</Button>
                    </Col>
                </FormGroup>

            </Form>;


    </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.handleFormClose}>Close</Button>
        </Modal.Footer>
    </Modal>
)

export default addListing;