import React from 'react'
import {TagRow} from './'
export default function MasonryPost({post, tagsOnTop}){
    
    const imageBackground = {
        backgroundImage : `url(${require(`../../assets/images/${post.image}`)})`
    }

    //const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground
    const style = {...imageBackground, ...post.style}
    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className='image-text' style={{ justifyContent : tagsOnTop ? 'space-between' : 'flex-end'}}>
                <TagRow tags={post.categories} />
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image.date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}