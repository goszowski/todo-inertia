import React from 'react'
import Layout from "../../Layout";
import Submit from '@/Components/Submit';
import { Link, useForm } from '@inertiajs/react';

const Default = ({ event }) => {
    const { processing, delete: destroy } = useForm();

    const submit = (e) => {
        e.preventDefault();
        destroy(route('events.destroy', { event: event }));
    };

    return (
        <Layout>
            <Layout.Header>Event: {event.title}</Layout.Header>
            <div className="card-body">
                <div className="mb-3">
                    Status: {event.status.label}
                </div>
                <div className="row">
                    <div className="col d-grid">
                        <Link href={route('events.edit', { event: event })} className="btn btn-primary">Edit</Link>
                    </div>
                    <div className="col">
                        <form onSubmit={submit} className="d-grid">
                            <Submit processing={processing} theme="danger">Destroy</Submit>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Default
