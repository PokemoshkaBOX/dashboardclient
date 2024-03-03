import React, { useState, useEffect } from 'react';
import {Container} from "react-bootstrap";
import {djangoConnect} from "../../http/djangoApi";

const Django = () => {
    const [fetchedData, setFetchedData] = useState(null); // Используем useState для хранения данных

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await djangoConnect(); // Получаем данные из функции djangoConnect
                setFetchedData(data); // Устанавливаем данные в состояние
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Вызываем функцию для получения данных при монтировании компонента
    }, []); // Пустой массив зависимостей указывает, что эффект должен запускаться только один раз

    return (
        <Container>
            <p>Привет</p>
            {fetchedData && (
                <ul>
                    {fetchedData.map(item => (
                        <li key={item.id}>
                            {item.id} {item.specialization} - {item.numbers}
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
};

export default Django;