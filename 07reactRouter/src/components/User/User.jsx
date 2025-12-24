import React from 'react'
import { data, useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return(
        <div className='bg-purple-400 text-white text-3xl p-4'>User: {userid}
        </div>
    )
}

export default User