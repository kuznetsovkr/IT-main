import React, {useContext, useEffect} from 'react'
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CourseItem from "../components/CourseItem";
import {Context} from "../index";
import {fetchTypes} from "../http/reviewAPI";
import {observer} from "mobx-react-lite";
import UnderHeader from "../components/UnderHeader";
import Benefit from "../components/Benefit";
import Rectangle from "../components/Rectangle";
import CourseDirections from "../components/CourseDirections";
import FooterPage from "../components/FooterPage";

const Home = observer(() => {
    const {section} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => section.setCategories(data))
        fetchTypes().then(data => section.setSections(data))
    }, [])
  return (
    <div>
        <UnderHeader/>
        <Benefit/>
        <Rectangle/>
        <CourseDirections/>
    </div>
  );
});

export default Home