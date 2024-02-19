import React from 'react'
import service from '../appwrite/configuration'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {


  return (
    <Link to={`/post/${$id}`}>
        <div
        className='w-full bg-teal-600 rounded-xl p-4'>
            <div
            className='w-full justify-center mb-4 shadow-xl'>
                <img src={service.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl shadow-lg border-2 border-teal-900'/>
            </div>
            <h2
            className='text-xl font-bold text-center text-black'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard