import React from 'react'
import Layout from "../Layout";
import Submit from '@/Components/Submit';
import { Link, useForm } from '@inertiajs/react';

const Show = ({ task }) => {
    const { processing, delete: destroy } = useForm();

    const submit = (e) => {
        e.preventDefault();
        destroy(route('tasks.destroy', { task: task }));
    };

    return (
        <Layout>
            <Layout.Header>Task: {task.title}</Layout.Header>
            <div className="card-body">
                {task.description}
                <div className="row">
                    <div className="col d-grid">
                        <Link href={route('tasks.edit', { task: task })} className="btn btn-primary">Edit</Link>
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

export default Show
