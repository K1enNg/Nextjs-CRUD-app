import React from 'react'

const AddPost = () => {
  return (
    <form className='flex flex-col gap-3'>
        <input
            className='border border-slate-500 px-8 py-2' 
            type="text" 
            placeholder='Post Title'
        />
        <input
            className='border border-slate-500 px-8 py-2' 
            type="text" 
            placeholder='Post Content'
        />

        <button className='bg-green-400 text-white font-bold py-3 px-6 w-fit'>
            Add Post
        </button>
    </form>
  )
}

export default AddPost
