import React from 'react'
import { Link } from 'react-router-dom'
import './AdminControls.css'

export default function AdminControls(props) {
    const publishState = (props.published) ? 'Unpublish' : 'Publish'
    const editLink = `/edit/${props.postId}`
    return(
        <>
        <button>{publishState}</button>
        <button>Delete</button>
        <Link to={editLink}><button>Edit</button></Link>
        </>
    )
}