import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [ money] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Sister;