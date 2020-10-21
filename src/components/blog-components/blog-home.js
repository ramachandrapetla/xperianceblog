import React, { Component } from 'react'
import trending from '../../assets/mocks/trending'
import featured from '../../assets/mocks/featured'
import {PostMasonry, MasonryPost, PostGrid} from '../common'

const trendingConfig = {
    1 : {
        gridArea : '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0 : {
        gridArea : '1 / 1 / 2 / 3',
        height : '300px'
    } ,
    1 : {
        height : '300px'
    },
    3 : {
        height : '630px',
        marginLeft : '30px',
        width : '630px'
    }
}

const mergeStyles = function(posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const recentPosts = [...trending, ...trending] //manipulated it

const lastFeatured = featured.pop();

export default class BlogHome extends Component {
    render() {
        return(
            <React.Fragment>
                <section className="container">
                    <div className="blog-home">
                        <div className="heading-container">
                            <span className="gradient-text section-heading">Trending</span>
                        </div>
                        <section className="featured-posts-container">
                            <PostMasonry posts={featured} columns={2} tagsOnTop = {true}/>
                            <MasonryPost post={lastFeatured} tagsOnTop={true} />
                        </section>
                    </div>
                </section>
                <section className="bg-white">
                    <section className="container">
                        <div className="row">
                            <div className="heading-container">
                                <span className="gradient-text section-heading">Recent</span>
                            </div>
                            <PostGrid posts={recentPosts} />
                        </div>
                    </section>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="heading-container">
                            <span className="gradient-text section-heading">Featured</span>
                        </div>
                        <PostMasonry posts={trending} columns={3}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}