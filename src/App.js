import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Member from "./Components/Member";
import MemberForm from "./Components/MemberForm";


function App() {
    const defaultMemberData = {
        name: '',
        email: '',
        role: 'developer'
    };

    let [memberList, setMemberList] = useState([]);
    let [currentMember, setCurrentMember] = useState(defaultMemberData);


    function handleChange (event) {
        setCurrentMember({...currentMember, [event.target.name]: event.target.value});
    }

    function handleSubmit (event) {
        event.preventDefault();
        addMember();
    }

    function addMember () {
        if (currentMember.name && currentMember.email && currentMember.role) {
            setMemberList([...memberList, currentMember]);
            clearCurrentMember();
        }
    }

    function clearCurrentMember () {
        setCurrentMember(defaultMemberData);
    }

    return (
        <div className="App">
            <h1>Team Members</h1>
            <MemberForm handleChange={handleChange} handleSubmit={handleSubmit} currentMember={currentMember} />
            <div className="MemberList">
                { memberList.map((member, index) => <Member member={member} key={index} />) }
            </div>
        </div>
        
    );
}

export default App;
