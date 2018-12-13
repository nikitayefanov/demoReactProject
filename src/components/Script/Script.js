import React from 'react';

const script = (props) => (
    <div>
        <p>Script id: {props.script.id}</p>
        <p>Start time: {props.script.startTime}</p>
        <p>End time: {props.script.endTime ? props.script.endTime : 'Script is not finished yet'}</p>
        <p>Script text: {props.script.script}</p>
        <p>Script status: {props.script.status}</p>
    </div>
);


export default script;
