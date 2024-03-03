import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChartA from "./ChartA";
import ChartB from "./ChartB";
import '../../App.css'
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
const Faculty = () => {
    return (
        <Container fluid style={{paddingLeft: 70, paddingTop: 10}}>
            <Row>
                <Col md={4} xs={12} >
                    <div className="colSt">
                        <p className="textSt">Места</p>
                        <h1 className="textSt">6524</h1>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="colSt" >
                        <p className="textSt">Абитуриентов</p>
                        <h1 className="textSt">7731</h1>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="colSt" >
                        <p className="textSt">Заявлений</p>
                        <h1 className="textSt">19768</h1>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={6} xs={12}>
                    <div className="colSt">
                        <ChartA/>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="colSt">
                        <ChartB/>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={6} xs={12}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 250}}>
                        <Table1/>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 250}}>
                        <Table2/>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={6} xs={12}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 250}}>
                        <Table3/>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 250}}>
                        <Table4/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Faculty;