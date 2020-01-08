import config from '../config';

const BlogApiService = {
    getBlogById(blogId, blogPosts) {
        const numBlogId = parseInt(blogId)
        return blogPosts.find(({ id }) => id === numBlogId)
    },
    async getBlogPosts() {
        const res = await fetch(`${config.API_BASE_URL}/blogpost`);
        return await (
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    async addBlogPost(post, token) { 
        const res = await fetch(`${config.API_BASE_URL}/blogpost`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(post),
        });
        return await (
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
    async deleteBlogPost(postId, token) {
        const numPostId = parseInt(postId)
        const res = await fetch(`${config.API_BASE_URL}/blogpost/${numPostId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
            },
        });
        return await (
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
}

export default BlogApiService