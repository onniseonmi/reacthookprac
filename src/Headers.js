import React from 'react';//rsc
import './Header.css';
const Headers = ({todos}) => {
    return (
        <div>
            <h1>Hello TODO APP</h1>
            <div className="countInfo">해야할일 {todos.length} 개 입니다.</div>
        </div>
    );
};

export default Headers;