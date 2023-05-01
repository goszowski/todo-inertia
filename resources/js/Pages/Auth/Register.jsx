import React from 'react'
import Layout from '../Layout'
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    function submit(e) {
        e.preventDefault();
        post(route('auth.registration.signup'));
    }

    return (
        <Layout>
            <Layout.Header>
                Registeration
            </Layout.Header>
            <div className="card-body">
                <form onSubmit={submit}>
                    <Input label="Name" value={data.name} error={errors.name} onChange={(e) => setData('name', e.target.value)} />
                    <Input label="Email" value={data.email} error={errors.email} onChange={(e) => setData('email', e.target.value)} />
                    <Input type="password" label="Password" value={data.password} error={errors.password} onChange={(e) => setData('password', e.target.value)} />
                    <Input type="password" label="Repeat password" value={data.password_confirmation} error={errors.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
                    <Submit processing={processing}>Register</Submit>
                </form>
            </div>
        </Layout>
    )
}

export default Register
