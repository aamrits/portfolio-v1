import React, { useEffect, useState } from "react";
import './PostsContainer.scss';
import Container from "../Container/Container";

const PostsContainer = () => {
    const [posts, setPosts] = useState([]);
    
    const query = `
    {
        user(username: "aamrits") {
            publication {
                posts {
                    _id
                    slug
                    title
                    brief
                    coverImage
                }
            }
        }
    }`;
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
            const ApiResponse = await response.json();
            console.log(ApiResponse.data.user.publication.posts);
            setPosts(ApiResponse.data.user.publication.posts);
        }

        fetchPosts();
    }, []);

    return (
        <>
            <Container>
                <section id="blog">
                    <h1 className="type--h1">blog posts</h1>
                    <div className="posts-container">
                    {posts.length > 0 ? (posts.map((post) => (
                        <div className="col-4 card" key={post._id}>
                            <img src={post.coverImage === "" ? 'https://via.placeholder.com/150' : post.coverImage} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title"><strong>{post.title}</strong></h5>
                                <p className="card-text">{post.brief}</p>
                                <a href={`https://aamrits.hashnode.dev/${post.slug}`} className="btn" target="_blank" rel="noopener">Read More...</a>
                            </div>
                        </div>
                    ))) : ''}
                    </div>
                </section>
            </Container>
        </>
    );
}; 

export default PostsContainer;
