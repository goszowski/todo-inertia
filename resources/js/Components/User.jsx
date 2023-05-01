import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'

const User = ({ user }) => {
    const [show, setShow] = useState(false);
    const { patch } = useForm();

    function logout(e) {
        e.preventDefault();
        patch(route('auth.login.signout'));
    }

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" onClick={() => setShow(!show)}>
                    {user.name}
                </button>
                <ul className={`dropdown-menu ${show ? 'show' : null}`}>
                    <li>
                        <form onSubmit={logout}>
                            <button type="submit" className="dropdown-item">Logout</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default User
