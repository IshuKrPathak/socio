import React from 'react'
import UserAvatar from '../common/UserAvatar'

const NewPost = () => {
  return (
    <div>
        <div  className=' flex justify-start items-start'>
            <UserAvatar name='Ishu' image=''/>
            <textarea className=' w-full h-24 text-md p-2 bg-muted  outline-none'></textarea>
        </div>
    </div>
  )
}

export default NewPost