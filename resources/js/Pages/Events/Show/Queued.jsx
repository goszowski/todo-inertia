import React from 'react'
import Layout from "../../Layout";
import SocketLoader from '@/Components/SocketLoader';
import { usePage } from '@inertiajs/react';

const Queued = ({ event }) => {
    const { user } = usePage().props;

    return (
        <Layout>
            <Layout.Header>Event: {event.title}</Layout.Header>
            <div className="card-body">
                <SocketLoader channel={`User.${user.id}`} event=".App\Events\EventStatusChanged">
                    Please wait...
                </SocketLoader>
            </div>
        </Layout>
    )
}

export default Queued
