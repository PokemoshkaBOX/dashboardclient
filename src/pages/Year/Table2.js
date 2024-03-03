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
                <tr>Зачисленно</tr>
                <tr>
                    <th>Год Поступления</th>
                    <th colSpan={2}>2022 г.</th>
                    <th colSpan={2}>2021 г.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td>Специальность</td>
                        <td>ЕГЭ</td>
                        <td>Зачисленно</td>
                        <td>ЕГЭ</td>
                        <td>Зачисленно</td>
                </tr>
                {TablesNote.map(note =>
                    <tr key={note}>
                        <td>01.03.{note} - Информатика</td>
                        <td>{798 + note}</td>
                        <td>{1823 + note}</td>
                        <td>{702 + note}</td>
                        <td>{1823 + note}</td>
                    </tr>
                )}
            </tbody>
        </BootstrapTable>
    );
};

export default Table2;
