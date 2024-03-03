import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../App.css"
import ChartA from "./ChartA";
import ChartB from "./ChartB";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const Students = () => {
    return (
        <Container fluid style={{paddingLeft: 70, marginTop: 10}}>
        <Row>
            <Col md={6} xs={12} >
                <Row>
                    <Col md={12} xs={12}>
                        <div className="colSt">
                            <ChartA/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col md={12} xs={12}>
                        <div className="colSt">
                            <ChartB/>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={3} xs={12}>
                <Row>
                    <Col md={12} xs={12} >
                        <div className="colSt" style={{overflowY: "auto", maxHeight: 600}}>
                            <Table1/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col md={12} xs={12}>
                        <div className="colSt" style={{overflowY: "auto"}}>
                            <Table2/>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={3} xs={12} >
                <div className="colSt" style={{overflowY: "auto", maxHeight: 900}}>
                    <Table3/>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default Students;