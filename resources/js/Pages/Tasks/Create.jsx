import React from 'react'
import Layout from "../Layout";
import { useForm } from '@inertiajs/react'

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
  })

  function submit(e) {
    e.preventDefault()
    post('/tasks')
  }

  return (
    <Layout>
        <form onSubmit={submit}>
          <input className="form-control" type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
          {errors.title && <div className="text-danger">{errors.title}</div>}
        </form>
    </Layout>
  )
}

export default Create
