import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table2 = () => {
    let TablesNote = []
    for (let i = 0; i < 30; i++){
        TablesNote.push(i+1)
    }
    return (
        <BootstrapTable responsive striped bordered hover>
            <thead>
                <tr>Зaчисленно по уровням</tr>
                <tr>
                    <th>Уровень подготовки</th>
                    <th colSpan={2}>Зачисленно</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Бкалавр</td>
                    <td>10</td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td>Магистр</td>
                    <td>5</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>Специалист</td>
                    <td>5</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>Дополнительная программа</td>
                    <td>4</td>
                    <td>16%</td>
                </tr>
                <tr>
                    <td>Ординатура</td>
                    <td>1</td>
                    <td>4%</td>
                </tr>
            </tbody>
        </BootstrapTable>
    );
};

export default Table2;
