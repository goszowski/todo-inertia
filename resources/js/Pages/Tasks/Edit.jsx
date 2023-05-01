import React from 'react'
import Layout from "../Layout";
import { useForm } from '@inertiajs/react'
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';
import Textarea from '@/Components/Textarea';

const Edit = ({ task }) => {
    const { data, setData, patch, processing, errors } = useForm({
        title: task.title,
        description: task.description,
    })

    function submit(e) {
        e.preventDefault();
        patch(route('tasks.update', { task: task }));
    }

    return (
        <Layout>
            <Layout.Header>Edit task</Layout.Header>
            <form onSubmit={submit}>
                <div className="card-body">
                    <Input label="Task title" value={data.title} error={errors.title} onChange={e => setData('title', e.target.value)} />
                    <Textarea label="Task description" value={data.description} error={errors.description} onChange={e => setData('description', e.target.value)} />
                    <Submit processing={processing}>Update task</Submit>
                </div>
            </form>
        </Layout>
    )
}

export default Edit
