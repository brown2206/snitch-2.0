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

class TipList extends Component {
    state = {
        tips: [
            { id: uuid(), offense: 'Murder', date: '10/10/2011', description: 'gruesome', location: 'DC', suspect: 'Hispanic Male' },
            { id: uuid(), offense: 'Rape', date: '7/8/2002', description: 'college', location: 'FL', suspect: 'White Male' },
            { id: uuid(), offense: 'Robbery', date: '5/2/2013', description: 'liquor store', location: 'NY', suspect: 'Asian Female' },
            { id: uuid(), offense: 'Assault', date: '9/7/2018', description: 'club', location: 'PA', suspect: 'Black Male' }
        ]
    }

    render() {

        var cardStyle = {
            margin: 20
        };

        const { tips } = this.state;
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

export default TipList;
