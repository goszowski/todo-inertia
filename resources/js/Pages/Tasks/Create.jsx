import React from 'react'
import Layout from "../Layout";
import { useForm } from '@inertiajs/react'
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';
import Textarea from '@/Components/Textarea';

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    })

    function submit(e) {
        e.preventDefault();
        post(route('tasks.store'));
    }

    return (
        <Layout>
            <Layout.Header>Create new task</Layout.Header>
            <div className="card-body">
                <form onSubmit={submit}>
                    <Input label="Task title" value={data.title} error={errors.title} onChange={e => setData('title', e.target.value)} />
                    <Textarea label="Task description" value={data.description} error={errors.description} onChange={e => setData('description', e.target.value)} />
                    <Submit processing={processing}>Create task</Submit>
                </form>
            </div>
        </Layout>
    )
}

export default Create
