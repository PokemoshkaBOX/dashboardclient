import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChartA from "./ChartA"
import ChartB from "./ChartB"
import ChartC from "./ChartC"
import ChartD from "./ChartD"
import "../../App.css"
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table from "../Applicants/Table";
const Year = () => {
    return (
        <Container fluid style={{paddingLeft: 70, paddingTop: 20}}>
            <Row>
                <Col md={4}>
                    <div className="colSt">
                        <ChartA/>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="colSt">
                        <ChartB/>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 450}}>
                        <Table1/>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 20}}>
                <Col md={4}>
                    <div className="colSt">
                        <ChartC/>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="colSt">
                        <ChartD/>
                    </div>
                </Col>
                <Col>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 450}}>
                        <Table2/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Year;