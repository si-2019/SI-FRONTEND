import React from 'react';

const Issue = (props) => {
       return !props.data || !props.data.length ? <div>nea nista bro</div> : props.data.map( issue => {
            return (
            <div>
                <div>{issue.title}</div>
                <div>{issue.message}</div>
                <div>{issue.date}</div>
                <hr/>
            </div>
            );
        });
};



export default Issue;