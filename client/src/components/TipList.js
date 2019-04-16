import React, { Component } from 'react';
import {
    Container,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

                 <TransitionGroup className="tip-list">
                    {tips.map(({ id, offense, date, description, location, suspect }) => (
                        // <CSSTransition key={id} timeout={500} className="fade">
                            <Card>
                               <CardHeader>{offense}</CardHeader>
                               <CardBody>
                                 <CardTitle>Special Title Treatment</CardTitle>
                                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                 <Button>Go somewhere</Button>
                               </CardBody>
                               <CardFooter>Footer</CardFooter>
                             </Card>
                        // </CSSTransition>
                    ))}
                  </TransitionGroup>
            </Container>
        );
    }
}

export default TipList;
