import React from 'react';
import './Member.css';

function Member(props) {
    let member = props.member;
    return (
        <div className="Member">
            <h2>{ member.name }</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role:</th>
                        <th>E-mail:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ member.role }</td>
                        <td>{ member.email }</td>
                        <td className="controls">
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Member;