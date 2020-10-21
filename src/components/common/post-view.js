import React, {Component} from 'react'

export default class PostView extends Component {

    constructor(props) {
        super()
        this.state = {
            
        }
    }

    render() {
        const postId = this.props.postId

        return(
        <div>{postId}</div>
        )
    }
}