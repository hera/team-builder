import React from 'react';
import './MemberForm.css';

function MemberForm(props) {
    const { handleChange, handleSubmit, currentMember } = props;

    return (
        <form className="MemberForm" autoComplete="off" onSubmit={event => handleSubmit(event)}>
            <label>
                Name:
                <input type="text" name="name" value={currentMember.name} maxLength="30" onChange={event => handleChange(event)} />
            </label>
            <label>
                E-mail:
                <input type="email" name="email" value={currentMember.email} maxLength="30" onChange={event => handleChange(event)} />
            </label>
            <label>
                Role:
                <select name="role" value={currentMember.role} onChange={event => handleChange(event)}>
                    <option value="developer">Software Developer</option>
                    <option value="designer">Designer</option>
                    <option value="illustrator">Illustrator</option>
                    <option value="accountant">Accountant</option>
                    <option value="marketer">Marketer</option>
                </select>
            </label>
            <button>Add</button>
        </form>
    );
}

export default MemberForm;