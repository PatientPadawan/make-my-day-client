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
}

export default BlogApiService