import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children, hasFriend, ring}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring = {ring}></Friend>}
            {
                children === 'Abir' && <button onClick={() => {
                    const newMoney = money + 5;
                    setMoney(newMoney);
                }}>Dicchi</button>
            }
        </div>
    );
};

export default Cousin;