import React from 'react'
import {Link} from 'react-router-dom'

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

export default function Footer() {
    return(
        <section className=" site-footer gradient-background">
            <div className="footer-item title">
                <span className="footer-title">Xperiance&nbsp;<span>Blog</span></span>
                <p className="blog-description">This is some infomation about this blog. lorem ipsum dolar lorem ipsum dolar. This is some infomation about this blog. lorem ipsum dolar lorem ipsum dolar</p>
            </div>
            
            <div className="footer-item links">
                <span>Navigation</span>
                {navLinks.map((navLink, index) => {
                    return(
                        <li key={index}>
                            <Link to={navLink.path}>{navLink.title}</Link>
                        </li>
                    )
                })}
            </div>
            <div className="footer-item social">
                <h3>Follow us on :</h3>
                <a href="#" className="ionicons icon ion-logo-facebook">  &nbsp;Facebook</a>
                <a href="#"  className="ionicons icon ion-logo-instagram">  &nbsp;Instagram</a>
                <a href="#" className="ionicons icon ion-logo-google">  &nbsp;Google</a>
            </div>
        </section>
    )
}