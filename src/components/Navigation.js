import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Avatar } from 'antd';

const navLinks = [
    {
        title : 'Home',
        path : '/'
    },
    {
        title : 'Blog',
        path : '/blog'
    },
    {
        title : 'Contact Us',
        path : '/contact-us'
    },
    {
        title : 'Login',
        path : '/login'
    }
]

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            state => ({
                menuActive : !state.menuActive
            })
        )
    }
    

    render() {
        return (
            <nav className="site-navigation">
                <span className="menu-title">Xperiance&nbsp;<span>Blog</span></span>
                <div className={`menu-content-container ${(this.state.menuActive)&& 'active'}`}>
                    <ul>
                        {
                            navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} >{link.title}</Link>
                            </li>
                            ))
                        }
                    </ul>
                    <div className="get-started-container">
                        <button className="btn btn-outline">Get Started</button>
                    </div>
                    <span className="menu-avatar-container">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <span className="menu-avatar-name">{`${this.props.user.firstName} ${this.props.user.lastName}`}</span>
                    </span>
                </div>
                <i onClick = {this.handleClick} className="ionicons icon ion-ios-menu" />
            </nav>
        )
    }
}
