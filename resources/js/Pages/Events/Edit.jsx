import React from 'react'
import Layout from "../Layout";
import { useForm } from '@inertiajs/react'
import Input from '@/Components/Input';
import Submit from '@/Components/Submit';
import Textarea from '@/Components/Textarea';

const Edit = ({ event }) => {
    const { data, setData, patch, processing, errors } = useForm({
        title: event.title,
    })

    function submit(e) {
        e.preventDefault();
        patch(route('events.update', { event: event }));
    }

    return (
        <Layout>
            <Layout.Header>Edit event</Layout.Header>
            <form onSubmit={submit}>
                <div className="card-body">
                    <Input label="Event title" value={data.title} error={errors.title} onChange={e => setData('title', e.target.value)} />
                    <Submit processing={processing}>Update event</Submit>
                </div>
            </form>
        </Layout>
    )
}

export default Edit
