import React from 'react'
import Layout from '../Layout'
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault();
        post(route('auth.login.signin'));
    }

    return (
        <Layout>
            <Layout.Header>
                Login
            </Layout.Header>
            <div className="card-body">
                <form onSubmit={submit}>
                    <Input label="Email" value={data.email} error={errors.email} onChange={(e) => setData('email', e.target.value)} />
                    <Input type="password" label="Password" value={data.password} error={errors.password} onChange={(e) => setData('password', e.target.value)} />
                    <Submit processing={processing}>Login</Submit>
                </form>
            </div>
        </Layout>
    )
}

export default Login
