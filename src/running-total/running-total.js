import React from 'react';

const RunningTotal = () => {
    return (
        <div>
            <h1 data-testid="header" className="header">
                Running Total
            </h1>
            <div>
                <input
                    className="input"
                    data-testid="input"
                    type="text"
                />
                <button className="add" data-testid="add" onClick={() => {}}>{"Add"}</button>
            </div>
            <h2 className="total" data-testid="total">{"Total: 0"}</h2>
            <ul data-testid="previousInputs">
                <li className="previousInput">0</li>
            </ul>
        </div>
)
};

export default RunningTotal;