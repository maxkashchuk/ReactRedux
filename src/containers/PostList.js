import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {deletePost} from '../actions'

function PostList(posts, onDelete){
    return(
        <div>
            {
                posts.map( post => {return (<Post post={post} onDelete={onDelete} key={post.id}></Post>);})
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = dispatch => {
    onDelete: id => {
        dispatch(deletePost(id))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(PostList)