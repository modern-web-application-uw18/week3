import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';


class AddListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            houseType: '',
            image: '',
            city: '',
            country: '',
            cost: '',
            name: ''
        }
    }






    handleNameChange = (e) => {
        let name = e.target.value;
        this.setState((prevState, props) => {
            return {  name: name  };
        });
    }

    handleCityChange = (e) => {
        let city = e.target.value;
        this.setState((prevState, props) => {
            return { city: city  };
        });
    }

    handleCountryChange = (e) => {
        let country = e.target.value;
        this.setState((prevState, props) => {
            return { country: country };
        });
    }

    handleTitleChange = (e) => {
        let title = e.target.value;
        this.setState((prevState, props) => {
            return { title: title };
        });
    }

    handleHouseTypeChange = (e) => {
        let houseType = e.target.value;
        this.setState((prevState, props) => {
            return { houseType: houseType };
        });
    }

    handleImageURLChange = (e) => {
        let image = e.target.value;
        this.setState((prevState, props) => {
            return { image: image };
        });
    }

    handleCostChange = (e) => {
        let cost = e.target.value;
        this.setState((prevState, props) => {
            return { cost: cost  };
        });
    }


    submitForm = () => {
        this.props.dataHandler(this.state);
    }

    render() {
        return (
            <Modal show={this.props.formShow} onHide={this.props.handleFormClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Listing</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form horizontal>

                        <FormGroup controlId="formName">
                            <Col sm={3}>Name</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formCity">
                            <Col sm={3}>City</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.city} onChange={this.handleCityChange} placeholder="City" />
                            </Col>
                        </FormGroup>


                        <FormGroup controlId="formCountry">
                            <Col sm={3}>Country</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.country} onChange={this.handleCountryChange} placeholder="Country" />
                            </Col>
                        </FormGroup>


                        <FormGroup controlId="formTitle">
                            <Col sm={3}>Title</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                            </Col>
                        </FormGroup>


                        <FormGroup controlId="formHouseType">
                            <Col sm={3}>House Type</Col>
                            <Col sm={9}>
                                <FormControl componentClass="select" value={this.state.houseType} onChange={this.handleHouseTypeChange} placeholder="Select">
                                    <option value="">...</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="entireHouse">Entire House</option>
                                </FormControl>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formImage">
                            <Col sm={3}>Image URL</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.imageURL} onChange={this.handleImageURLChange} placeholder="Image URL" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formCost">
                            <Col sm={3}>Cost</Col>
                            <Col sm={9}>
                                <FormControl type="text" value={this.state.cost} onChange={this.handleCostChange} placeholder="Cost" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button onClick={this.submitForm}>Submit New Listing</Button>
                            </Col>
                        </FormGroup>

                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleFormClose}>Close</Button>

                </Modal.Footer>
            </Modal>
        )
    }


}

export default AddListing;