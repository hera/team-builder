import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Member from "./Components/Member";
import MemberForm from "./Components/MemberForm";


function App() {
    return (
        <div className="App">
            <h1>Team Members</h1>
            <MemberForm />
            <div className="MemberList">
                <Member />
            </div>
        </div>
        
    );
}

export default App;
