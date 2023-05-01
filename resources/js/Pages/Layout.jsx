import React, { useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import User from '@/Components/User';

const Layout = ({ children }) => {
    const { user } = usePage().props;
    const { success } = usePage().props;
    const { error } = usePage().props;

    return (
        <>
            <nav className="navbar navbar-expand bg-primary navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" href="/tasks"><b>Todo List</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href={route('tasks.index')}>Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href={route('events.index')}>Events</Link>
                            </li>
                        </ul>
                    </div>
                    {user ? (
                        <User user={user} />
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href={route('auth.login.show')}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href={route('auth.registration.show')}>Registration</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        {error && (
                            <div className="alert alert-danger">{error}</div>
                        )}

                        {success && (
                            <div className="alert alert-success">{success}</div>
                        )}
                        <div className="card">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Header = ({ children }) => {
    return (
        <div className="card-header d-flex align-items-center">
            {children}
        </div>
    );
};

Layout.Header = Header;

export default Layout
