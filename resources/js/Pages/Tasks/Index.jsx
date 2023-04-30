import React from 'react'
import Layout from "../Layout";

const Index = ({tasks}) => {
  return (
    <Layout>
        {tasks.data.map((task, key) => (
            <div key={key}>{task.title}</div>
        ))}
    </Layout>
  )
}

export default Index
