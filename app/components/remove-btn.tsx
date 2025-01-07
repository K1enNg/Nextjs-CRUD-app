import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveButton = () => {
  return (
    <button className='text-red-600'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveButton
