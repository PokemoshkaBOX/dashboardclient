import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table3 = () => {
    let TablesNote = []
    for (let i = 0; i < 30; i++){
        TablesNote.push(i+1)
    }
    return (
        <BootstrapTable responsive striped bordered hover>
            <thead>
                <tr>Заявления Места Конурс Очная</tr>
                <tr>
                    <th>Код Конкурсной группы</th>
                    <th>Места</th>
                    <th>Заявлений</th>
                    <th>Конкурс</th>
                    <th>Согласия</th>
                    <th>Зачисленно</th>
                </tr>
            </thead>
            <tbody>
                {TablesNote.map(note =>
                    <tr key={note}>
                        <td>01.03.{note} - Информатика</td>
                        <td>{798 + note}</td>
                        <td>{1823 + note}</td>
                        <td>{702 + note}</td>
                        <td>{1823 + note}</td>
                        <td>{702 + note}</td>
                    </tr>
                )}
            </tbody>
        </BootstrapTable>
    );
};

export default Table3;
