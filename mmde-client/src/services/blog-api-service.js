import config from '../config';

const BlogApiService = {
    getBlogByIndex(blogIndex, blogPosts) {
        const numBlogIndex = parseInt(blogIndex)
        return blogPosts.find(({ index }) => index === numBlogIndex)
    },
    async getBlogPosts() {
        const res = await fetch(`${config.API_BASE_URL}/blogpost`);
        return await (
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
        );
    },
}

export default BlogApiService