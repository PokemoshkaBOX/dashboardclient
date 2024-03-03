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
                <tr>Зaчисленно по направлениям</tr>
                <tr>
                    <th>Специальность</th>
                    <th>Зачисленно</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Итого</td>
                    <td>21</td>
                    <td>100%</td>
                </tr>
                {TablesNote.map(note =>
                    <tr key={note}>
                        <td>01.03.{note} - Информатика</td>
                        <td>{40 - note}</td>
                        <td>{24 - note}</td>
                    </tr>
                )}
            </tbody>
        </BootstrapTable>
    );
};

export default Table3;
