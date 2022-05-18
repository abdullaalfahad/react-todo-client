import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;