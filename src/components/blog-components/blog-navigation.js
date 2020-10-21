import React, { Component } from 'react'

export default class BlogNavigation extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen : false
        }
        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    navItems = [
        {name : "Trending", id : 1},
        {name : "All", id : 2},
        {name : "MyPosts", id : 3},
        {name : "Saved", id : 4},
        {name : "Draft", id : 5}
    ]

    handleCreatePost() {
        console.log('Editor should Open Now');
        this.setState({isModalOpen : true})
    }

    closeModal() {
        this.setState({isModalOpen : false})
    }

    render() {

        return(
            <section className="container blog-nav">
                <div className="tabbed-nav">
                    {
                        this.navItems.map((navItem,index) =>
                            <a href={`#${navItem.name}`} key={index}>
                                <div 
                                    className={`tablink ${this.props.activeItem===navItem.name && 'active'}` }
                                    onClick={this.props.handleNav.bind(this,navItem.name)} 
                                >
                                    {navItem.name}
                                </div>
                            </a>
                        )
                    }
                </div>
            </section>
        )
    }
}