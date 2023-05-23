import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';

export const AlertComponent = ({ variant, message, show }) => {
    const style = {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: show ? 'block' : 'none',
        maxWidth: '70%',
        fontSize: 20,
        fontWeight: 600,
    }
    return ( 
        <Alert key={variant} variant={variant} style={style}>
          {message}
        </Alert>
    );
}

export const LoaderComponent = ({ variant }) => <Spinner animation="border" variant={variant} size='md' />

export default "not exported";