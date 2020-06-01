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
                <button data-testid="add" onClick={() => {}}>{"Add"}</button>
            </div>
            <h2 data-testid="total">{"Total: 0"}</h2>
            <div data-testid="previousInputs">0</div>
        </div>
)
};

export default RunningTotal;