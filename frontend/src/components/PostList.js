import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Box } from '@mui/material';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/posts/');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                블로그 포스트
            </Typography>
            {posts.map(post => (
                <Paper key={post.id} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {post.content}
                    </Typography>
                    <Box sx={{ mt: 2, color: 'text.secondary' }}>
                        <Typography variant="body2">
                            작성자: {post.author}
                        </Typography>
                        <Typography variant="body2">
                            작성일: {new Date(post.created_at).toLocaleDateString()}
                        </Typography>
                    </Box>
                </Paper>
            ))}
        </Container>
    );
};

export default PostList; 