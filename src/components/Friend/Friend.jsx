import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h4>Friend</h4>
            {ring && <p>Ring: {ring}</p>}
        </div>
    );
};

export default Friend;