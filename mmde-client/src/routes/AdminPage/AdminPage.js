import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BlogList from '../../components/BlogList/BlogList'
import DATASTORE from '../../DATASTORE'
import './AdminPage.css'

export default class AdminPage extends Component {
    render() {
        return(
            <>
                <section>
                    <button className='Admin_addPost'>
                        <FontAwesomeIcon
                            size='3x'
                            icon='plus-square'
                            className='Admin_icons'
                        />
                        <h3 id='Admin_postButton'>Post</h3>
                    </button>
                </section>
                <BlogList entries={DATASTORE.BLOGPOSTS} />
            </>
        )
    }
}