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
import { connect } from 'react-redux';
import { getTips, deleteTip } from '../actions/tipActions';
import PropTypes from 'prop-types';

class TipList extends Component {

    componentDidMount() {
        this.props.getTips();
    }

    onDeleteClick = (id) => {
        this.props.deleteTip(id);
    };

    render() {

        var cardStyle = {
            margin: 20
        };
        const { tips } = this.props.tip;
        return(
            <Container>
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
                            onClick={this.onDeleteClick.bind(this, id)}
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

export default connect(
    mapStateToProps,
    { getTips, deleteTip }
)(TipList);
