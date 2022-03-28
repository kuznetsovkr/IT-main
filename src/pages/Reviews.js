import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Col, Container, Image, ListGroup, NavLink} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {REVIEWS_ROUTE} from "../utils/consts";

const Reviews = () => {
    const {review} = useContext(Context)

    return (
        <Container className={"mt-4 "} >
            <Col>
                {review.reviews.map(review=>
                    <div className={"mt-5"}>
                        <Card style={{borderRadius: 25, backgroundColor: review.color, height:400}} >
                            <Card style={{borderRadius: 25, height:400}} border="dark" className={"mt-4"}>
                                                                            <ListGroup className={"mt-4"}>
                                    <ListGroup.Item>
                                        <Row className={"ml-2"}>
                                            <Col>{review.name} </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className={"ml-4"}>{review.comment}</div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Card>
                    </div>
                )}
            </Col>
        </Container>
    );
};

export default Reviews;