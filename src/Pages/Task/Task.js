import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task, index }) => {
    const { _id, name, description } = task;

    const handleDelete = id => {

    }

    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td><Button>Complete</Button> <Button variant='danger' className='mt-2' onClick={() => handleDelete(_id)}>Delete</Button></td>
            </tr>
        </tbody>
    );
};

export default Task;