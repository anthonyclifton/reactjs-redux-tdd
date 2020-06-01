import React from 'react';

const RunningTotal = () => {
    return (
        <div>
            <h1 data-testid="header" className="header">
                Running Total
            </h1>
            <div>
                <input
                    data-testid="input"
                    type="text"
                />
            </div>
            <h2 data-testid="total">{"Total: 0"}</h2>
        </div>
)
};

export default RunningTotal;