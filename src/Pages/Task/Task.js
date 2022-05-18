import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task, index, tasks }) => {
    const { _id, name, description } = task;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remain = tasks.filter(t => t._id !== id);
                        tasks = remain;
                    }
                })

        }
    }

    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td><Button>Complete</Button> <Button variant='danger' className='' onClick={() => handleDelete(_id)}>Delete</Button></td>
            </tr>
        </tbody>
    );
};

export default Task;