import React, { Component } from 'react'
import PostView from './components/common/post-view'


export default class PostRenderer extends Component{
    
    render() {

        const postId = this.props.match.params.postId 

        return(
             <PostView postId={postId} />
        )
    }
}