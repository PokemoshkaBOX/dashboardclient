import React from 'react';
import NavBar from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Table from "./Table";
import LineChart from "./LinaChart";
import Donat from "./Donat";
import LineCharta from "./LineCharta";
import "../../App.css"
const Applicants = () => {
    return (
        <Container fluid style={{paddingLeft: 70, paddingTop: 10}}>
            <NavBar/>
      <Row style={{textAlign:"center", marginTop: 10}}>
        <Col md={6} xs={12} >
            <div className="colSt" style={{overflowY: "auto", maxHeight: 400}}>
                <Table/>
            </div>
        </Col>
        <Col md={6} xs={12}>
            <div className="colSt">
                <LineChart />
            </div>
        </Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col md={6} xs={12}>
            <div className="colSt" >
                <Donat/>
            </div>
        </Col>
        <Col md={6} xs={12}>
            <div className="colSt">
                <LineCharta />
            </div>
        </Col>
      </Row>
    </Container>
    );
};

export default Applicants;