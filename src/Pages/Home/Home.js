import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Form, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import Task from '../Task/Task';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Home = () => {
    const [user] = useAuthState(auth);

    const { isLoading, refetch, data: tasks } = useQuery('tasks', () =>
        fetch('http://localhost:5000/tasks').then(res =>
            res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const addTask = (event) => {
        event.preventDefault();

        const task = {
            name: event.target.name.value,
            description: event.target.description.value
        }

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(response => response.json())
            .then(data => {
                alert('Task Added SuccessFully')
            })
        refetch();
        event.target.reset();
    }
    return (
        <div className="mt-3 mb-5">
            <Container>
                <div className='d-flex justify-content-between'>
                    <h1>Simple TODO Apps</h1>
                    {user && <Button onClick={() => signOut(auth)}>Log Out</Button>}
                </div>

                <div className='my-5'>
                    <Form onSubmit={addTask}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Description" name="description" style={{ height: '100px' }} />
                        </Form.Group>
                        <Button type="submit">Add Task</Button>
                    </Form>
                </div>
                <div>
                    <h1>TODO List: {tasks?.length}</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        {tasks.map((task, index) => <Task key={task._id} task={task} index={index} tasks={tasks} refetch={refetch}></Task>)}
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default Home;