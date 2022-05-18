import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="mt-3 mb-5">
            <Container>
                <div className='d-flex justify-content-between'>
                    <h1>Simple TODO Apps</h1>
                    {user && <Button onClick={() => signOut(auth)}>Log Out</Button>}
                </div>

                <div className='mt-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Description" style={{ height: '100px' }} />
                        </Form.Group>
                        <Button>Add Task</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Home;