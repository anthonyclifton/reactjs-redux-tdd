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
        </div>
)
};

export default RunningTotal;