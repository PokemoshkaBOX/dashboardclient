import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = () => {
    let TablesNote = []
    for (let i = 0; i < 30; i++){
        TablesNote.push(i+1)
    }
    return (
        <BootstrapTable responsive striped bordered hover>
            <thead>
                <tr>Таблица</tr>
                <tr>
                    <th>Специальность</th>
                    <th>КЦП</th>
                    <th>Подано</th>
                    <th>Зачисленно</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Итого</td>
                    <td>4033</td>
                    <td>14189</td>
                    <td>3078</td>
                </tr>
                {TablesNote.map(note =>
                    <tr key={note}>
                        <td>01.03.{note} - Информатика</td>
                        <td>{798 + note}</td>
                        <td>{1823 + note}</td>
                        <td>{702 + note}</td>
                    </tr>
                )}
            </tbody>
        </BootstrapTable>
    );
};

export default Table;
