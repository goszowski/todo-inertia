import React from 'react'
import Layout from "../Layout";
import { Link } from '@inertiajs/react';
import Paginator from '@/Components/Paginator';
import Empty from '@/Components/Empty';
import dayjs from 'dayjs';

const Index = ({ events }) => {
    return (
        <Layout>
            <Layout.Header>
                All events
                <Link href={route('events.create')} className="btn btn-outline-primary btn-sm ms-auto">Create event</Link>
            </Layout.Header>
            <div className="list-group list-group-flush">
                <Paginator pagination={events}>
                    {events.data.length > 0 ? (
                        <div>
                            {
                                events.data.map((event, key) => (
                                    <Link className="list-group-item list-group-item-action" key={key} href={route('events.show', { event: event })}>
                                        {event.title}
                                        <div className="small text-muted">Author: {event.user.name} | Created At: {dayjs(event.created_at).format('DD.MM.YYYY, HH:mm')}</div>
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <Empty />
                    )}
                </Paginator>
            </div>
        </Layout>
    )
}

export default Index
