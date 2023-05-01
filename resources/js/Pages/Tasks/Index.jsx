import React from 'react'
import Layout from "../Layout";
import { Link } from '@inertiajs/react';
import Paginator from '@/Components/Paginator';
import Empty from '@/Components/Empty';
import dayjs from 'dayjs';

const Index = ({ tasks }) => {
    return (
        <Layout>
            <Layout.Header>
                All tasks
                <Link href={route('tasks.create')} className="btn btn-outline-primary btn-sm ms-auto">Create task</Link>
            </Layout.Header>
            <div className="list-group list-group-flush">
                <Paginator pagination={tasks}>
                    {tasks.data.length > 0 ? (
                        <div>
                            {tasks.data.map((task, key) => (
                                <Link className="list-group-item list-group-item-action" key={key} href={route('tasks.show', { task: task })}>
                                    {task.title}
                                    <div className="small text-muted">Author: {task.user.name} | Created At: {dayjs(task.created_at).format('DD.MM.YYYY, HH:mm')}</div>
                                </Link>
                            ))}
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
