import React, { Component } from 'react'
import BlogList from '../../components/BlogList/BlogList'
import DATASTORE from '../../DATASTORE'
import './EventsBlog.css'

export default class EventsBlog extends Component {
    render() {
      return(
          <>
          <BlogList entries={DATASTORE.BLOGPOSTS} />
          </>
      )
    }
}



