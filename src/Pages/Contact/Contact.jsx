import React from 'react';
import CounterApp from '../../Hooks/CounterApp';
import AutoCountApp from '../../Hooks/AutoCountApp';

const Contact = () => {
    return (
        <div>
            <p>This is contact</p>
            <CounterApp/>
            <AutoCountApp/>
        </div>
    );
};

export default Contact;