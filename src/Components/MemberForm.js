import React from 'react';
import './MemberForm.css';

function MemberForm(props) {
    return (
        <form className="MemberForm" autoComplete="off">
            <label>
                Name:
                <input type="text" name="name" maxLength="30" />
            </label>
            <label>
                E-mail:
                <input type="email" name="email" maxLength="30" />
            </label>
            <label>
                Role:
                <select name="role">
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