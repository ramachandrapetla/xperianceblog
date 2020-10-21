import React, {Component} from 'react'
import BlogNavigation from '../components/blog-components/blog-navigation'
import BlogHome from '../components/blog-components/blog-home'
import MyPosts from '../components/blog-components/my-posts'

export default class Blog extends Component {
    constructor() {
        super()
        this.state = {
            activeItem : 'Trending'
        }
    }

    componentDidMount() {

        let blogItems = ["Trending", "All", "MyPosts", "Saved", "Draft"]
        let hashId = window.location.hash.substring(1)
        if(blogItems.indexOf(hashId) === -1) {
            hashId = "Trending"
        }
        this.setState({activeItem : hashId})
    }

    handleNav = (activeItem) => {
        this.setState({activeItem})  
    }

    tabContent = () => {
        switch(this.state.activeItem){
            case "Trending" : return <BlogHome />
            case "All" : return <div>All</div>
            case "MyPosts" : return <MyPosts />
            case "Saved" : return <div>Saved</div>
            case "Draft" : return <div>Draft</div>
            default : return <BlogHome />
        }
    }

    render() {
        return (
            
            <main className="blog">
                <BlogNavigation activeItem={this.state.activeItem} handleNav={this.handleNav}/>
                {
                    this.tabContent()
                }
                
            </main>
        )
    }
}
