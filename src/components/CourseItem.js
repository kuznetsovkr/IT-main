import React, {useContext} from 'react';
import {Card, Carousel, Col, Container, Image, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {useHistory} from "react-router-dom"
import {COURSE_ROUTE} from "../utils/consts";
import play from "../assets/premium-icon-game-control-4315514 1.svg";


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

const CourseItem = observer(() => {
    let arr = ["#373592", "#747FE5", "#3B1966", "#334CD0",];
    const {section} = useContext(Context)
    const history = useHistory()

    return (
        <Container>
        <Row>
        <Col className="d-flex justify-content-center" >
            {section.sections
                .filter(section => !section.section.name.includes("в"))
                .map(section =>
                    <Card
                        style={{ width: 370, height: 300, margin: "20px 25px",
                                borderRadius: 25, backgroundColor: random(arr)}}
                        className={"align-items-center mt-5 text-white"}
                        key={section.section.id}
                    >
                        <img
                            style={{ width: 70, height: 70}}
                            src={play} alt="play" className='mt-2'
                        />
                        <div className={"mt-1 mb-3"}>{section.section.name}</div>
                            {section.categories.map(categorie =>
                                <NavLink
                                    onClick={() => history.push(COURSE_ROUTE + '/' + categorie.id)}
                                    key={categorie.id}
                                    className={"mt-2 text-white"}
                                >
                                    {categorie.name}
                                </NavLink>
                        )}}
                    </Card>
                )}
        </Col>
        </Row>
            <Row>
                <Col className="d-flex justify-content-center" >
                    {section.sections
                        .filter(section => section.section.name.includes("в"))
                        .map(section =>
                            <Card
                                style={{ width: 370, height: 300, margin: "20px 25px",
                                    borderRadius: 25, backgroundColor: random(arr)}}
                                className={"align-items-center mt-5 text-white"}
                                key={section.section.id}
                            >
                                <img
                                    style={{ width: 70, height: 70}}
                                    src={play} alt="play" className='mt-2'
                                />
                                <div className={"mt-1 mb-3"}>{section.section.name}</div>
                                {section.categories.map(categorie =>
                                    <NavLink
                                        onClick={() => history.push(COURSE_ROUTE + '/' + categorie.id)}
                                        key={categorie.id}
                                        className={"mt-2 text-white"}
                                    >
                                        {categorie.name}
                                    </NavLink>
                                )}

                            </Card>
                        )}
                </Col>
            </Row>
        </Container>
    );
});

export default CourseItem;