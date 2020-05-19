import React from 'react';
import './Member.css';

function Member(props) {
    return (
        <div className="Member">
            <h2>Lana Del Ray</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role:</th>
                        <th>E-mail:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Developer</td>
                        <td>example@example.com</td>
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