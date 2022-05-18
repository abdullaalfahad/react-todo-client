import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Task.css';

const Task = ({ task, index, refetch }) => {
    const { _id, name, description } = task;
    const [checked, isChecked] = useState(false);
    const onClick = () => {
        isChecked(true);
        alert('Task Completed');
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://secure-sea-45014.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                })

        }
    }

    return (
        <tbody>
            <tr {...(checked && { className: 'crossed-line' })}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td >{description}</td>
                <td><Button onClick={onClick}>Complete</Button> <Button variant='danger' className='' onClick={() => handleDelete(_id)}>Delete</Button></td>
            </tr>
        </tbody >
    );
};

export default Task;