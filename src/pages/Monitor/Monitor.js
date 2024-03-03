import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import DiagA from "./DiagA";
import DiagD from "./DiagD";
import DiagC from "./DiagC";
import DiagB from "./DiagB";
import DiagE from "./DiagE";
import Table from "./Table";
import '../../App.css'
import Table4 from "../Faculty/Table4";
const Monitor = () => {
    return (
        <Container fluid style={{paddingLeft: 70, paddingTop: 10}}>
            <Row>
               <Col md={2} >
                   <div className="colSt">
                       <p className="textSt">Всего абитуриентов</p>
                       <h1 className="textSt">5386</h1>
                   </div>
               </Col>
                <Col md={1}>
                    <div className="colSt">
                        <p className="textSt">РФ</p>
                        <h1 className="textSt">4450</h1>
                    </div>
                </Col>
                <Col md={1}>
                    <div className="colSt">
                        <p className="textSt">Иностранные</p>
                        <h1 className="textSt">450</h1>
                    </div>
                </Col>
                <Col  md={2}>
                    <div className="colSt">
                        <p className="textSt">КЦП</p>
                        <h1 className="textSt">4033</h1>
                    </div>
                </Col>
                <Col  md={2}>
                    <div className="colSt">
                        <p className="textSt">Заявлений подано</p>
                        <h1 className="textSt">14140</h1>
                    </div>
                </Col>
                <Col  md={2}>
                    <div className="colSt">
                        <p className="textSt">Заявлений отозвано</p>
                        <h1 className="textSt">1483</h1>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="colSt">
                        <p className="textSt">Зачисленно</p>
                        <h1 className="textSt">3078</h1>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 10}}>
                <Col md={4} xs={12}>
                    <div className="colSt" style={{overflowY: "auto", maxHeight: 830}}>
                        <Table/>
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className="colSt">
                                <DiagA/>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="colSt">
                                <DiagB/>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="colSt">
                                <DiagC/>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="colSt">
                                <DiagD/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xs={12}>
                            <div className="colSt" style={{marginTop: 10}}>
                                <DiagE/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Monitor;