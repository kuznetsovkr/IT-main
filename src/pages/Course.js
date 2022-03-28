import React, {useContext} from 'react'
import {Card, Col, Container, ListGroup, NavLink} from "react-bootstrap";
import {Context} from "../index";
import {COURSE_ROUTE, REVIEWS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import Row from "react-bootstrap/Row";

const Course = () =>{

  const history = useHistory()
  const {course} = useContext(Context)
  const {academic} = useContext(Context)
  return (
  <Container className={"mt-4 "} >

    <Col className={"mr-3"}>
      <p>{course.name} </p>
    </Col>
    <Col>
      {academic.academics.map(academic =>
        <div className={"mt-5"}>
        <Card style={{borderRadius: 25, backgroundColor: academic.color, height:400}} >
          <Card style={{borderRadius: 25, height:400}} border="dark" className={"mt-4 ml-4"}>
              <ListGroup className={"mt-4"}>
                <ListGroup.Item>
                  <Row className={"ml-3"}>{academic.name} </Row>
                  <NavLink><Row className={"ml-1"}>{academic.link} </Row></NavLink>
                </ListGroup.Item>
                {course.courses.map(course =>
                    <ListGroup.Item >
                    <Row>
                    <NavLink
                        className={"ml-3"}
                        active onClick={() => history.push(REVIEWS_ROUTE + '/1')}
                        key={course.id}>
                      {course.name}
                    </NavLink>
                    </Row>
                    <Row className={"ml-1"} >
                      <Col md={3}>Срок прохождения: {academic.deadline}</Col>
                      <Col>Цена: {academic.price}</Col>
                      <Col className={"d-flex justify-content-end mr-4"}>190 отзывов</Col>
                    </Row>
                    </ListGroup.Item>
                )}
              </ListGroup>
          </Card>
        </Card>
        </div>
      )}
    </Col>
  </Container>
  )
}

export default Course