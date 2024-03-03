import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChartB from "../Students/ChartB";

const NavBar = () => {
    return (
        <Container>
            <Row style={{marginTop: "10px"}}>
                <Col md={3} xs={12}>
                    <div className="colSt" style={{padding: 5}}>
                        <div>Выберите Форму обучения</div>
                        <button type="button" className="btn btn-primary">Очная</button>
                        <button type="button" className="btn" style={{backgroundColor: "rgb(150, 204, 241)"}}>Очно-заочная</button>
                        <button type="button" className="btn" style={{backgroundColor: "rgb(150, 190, 230)"}}>Заочная</button>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="colSt" style={{padding: 5}}>
                        <div>Выберите основание поступления</div>
                        <button type="button" className="btn btn-primary">Бюджетная основа</button>
                        <button type="button" className="btn " style={{backgroundColor: "rgb(150, 204, 241)"}}>Полное возмещение</button>
                        <button type="button" className="btn" style={{backgroundColor: "rgb(150, 190, 230)"}}>Целевой приём</button>
                    </div>
                </Col>
                <Col md={3} xs={12}>
                    <div className="colSt" style={{padding: 5}}>
                        <div>Выберите уровень</div>
                        <button type="button" className="btn btn-primary">Бакалавр</button>
                        <button type="button" className="btn" style={{backgroundColor: "rgb(150, 204, 241)"}}>Специалист</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar;