import React from 'react'
import RemoveButton from './remove-btn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const PostList = () => {
  return (
    <>
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Post Title</h2>
                <div>Topic Description</div>
            </div>
            <div className='flex gap-2'>
                <RemoveButton />
                <Link href={'pages/edit-post/123'}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default PostList
