import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class MyPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleCreatePost = this.handleCreatePost.bind(this)
    }

    handleCreatePost() {

    }

    render () {
        return (
            <section>
                <div className ="container pb-10 pt-10" >
                    <button className="create-post-btn" onClick={this.handleCreatePost}>
                        <Link to="/blog/my-posts/create-post" >
                            <i className="fa fa-plus"/>&nbsp;&nbsp; Create Post
                        </Link>
                    </button>
                        
                </div>
                <div className ="container" >
                    <p className="info-message"><i className="fa fa-info-circle"/>Current there are No active posts. Click on Add New Post button on top right corner to add new posts.</p>
                </div>
            </section>
        )
    }
}