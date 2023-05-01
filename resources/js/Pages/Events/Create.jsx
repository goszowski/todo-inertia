import React from 'react'
import Layout from "../Layout";
import { useForm } from '@inertiajs/react'
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';
import Textarea from '@/Components/Textarea';

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
    })

    function submit(e) {
        e.preventDefault();
        post(route('events.store'));
    }

    return (
        <Layout>
            <Layout.Header>Create new event</Layout.Header>
            <div className="card-body">
                <form onSubmit={submit}>
                    <Input label="Event title" value={data.title} error={errors.title} onChange={e => setData('title', e.target.value)} />
                    <Submit processing={processing}>Create event</Submit>
                </form>
            </div>
        </Layout>
    )
}

export default Create
