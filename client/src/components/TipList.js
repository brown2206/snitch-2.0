import React, { Component } from 'react';
import {
    Container,
    Card,
    Button,
    CardHeader,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getTips } from '../actions/tipActions';
import PropTypes from 'prop-types';

class TipList extends Component {

    componentDidMount() {
        this.props.getTips();
    }

    render() {

        var cardStyle = {
            margin: 20
        };
        const { tips } = this.props.tip;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const offense = prompt('Enter offense');
                        const date = prompt('Enter date');
                        const description = prompt('Enter description');
                        const location = prompt('Enter location');
                        const suspect = prompt('Enter suspect');
                        if(offense) {
                            this.setState(state => ({
                                tips: [...state.tips, { id: uuid(), offense, date, description, location, suspect }]
                            }));
                        }
                    }}
                    >
                    Add Item
                 </Button>

                {tips.map(({ id, offense, date, description, location, suspect }) => (
                    <Card key={id} style={cardStyle}>
                       <CardHeader>{offense}</CardHeader>
                       <CardBody>
                         <CardTitle><b>Date:</b> {date}</CardTitle>
                         <CardText><b>Description:</b> {description}</CardText>
                         <CardText><b>Location:</b> {location}</CardText>
                         <CardText><b>Suspect:</b> {suspect}</CardText>
                         <Button
                            className="remove-btn"
                            color="danger"
                            size="md"
                            onClick={() => {
                                this.setState(state => ({
                                    tips: state.tips.filter(tip => tip.id !== id)
                                }));
                            }}
                            >DELETE</Button>
                       </CardBody>
                     </Card>
                ))}
            </Container>
        );
    }
}

TipList.propTypes = {
    getTips: PropTypes.func.isRequired,
    tip: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    tip: state.tip
});

export default connect(mapStateToProps, { getTips })(TipList);
