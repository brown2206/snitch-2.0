import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTip } from '../actions/tipActions';

class TipModal extends Component {
    state = {
        modal: false,
        offense: '',
        date: '',
        description: '',
        location: '',
        suspect: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newTip = {
            offense: this.state.offense,
            date: this.state.date,
            description: this.state.description,
            location: this.state.location,
            suspect: this.state.suspect
        }

        // Add tip via addTip action
        this.props.addTip(newTip);

        // Close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Submit Tip</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >

                    <ModalHeader toggle={this.toggle}>Add Anonymous Tip</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="offense">Offense Type</Label>
                                <Input type="select" name="offense" onChange={this.onChange}>
                                    <option></option>
                                    <option>Animal Cruelty</option>
                                    <option>Arson</option>
                                    <option>Assault</option>
                                    <option>Bullying</option>
                                    <option>Burglary Building</option>
                                    <option>Burglary Residence</option>
                                    <option>Burglary Vehicle</option>
                                    <option>Criminal Mischief</option>
                                    <option>Forgery/Fraud</option>
                                    <option>Fugitive</option>
                                    <option>Minor in Possession of Alcohol</option>
                                    <option>Minor in Possession of Tobacco</option>
                                    <option>Missing Person</option>
                                    <option>Murder/Homicide</option>
                                    <option>Narcotics</option>
                                    <option>Probation Violation</option>
                                    <option>Robbery</option>
                                    <option>Sexual Assault</option>
                                    <option>Suspicious Activity</option>
                                    <option>Theft</option>
                                    <option>Theft of a Motor Vehicle</option>
                                    <option>Unlawful Carry of a Weapon</option>
                                    <option>Weapon on School Campus</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input type="date" name="date" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="suspect">Suspect</Label>
                                <Input type="textarea" name="suspect" onChange={this.onChange} />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Submit Tip</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tip: state.tip
});

export default connect(mapStateToProps, { addTip })(TipModal);
