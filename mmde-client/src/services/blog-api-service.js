import DATASTORE from '../DATASTORE'

const BlogApiService = {
    getBlogByIndex(blogIndex, blogPosts) {
        const numBlogIndex = parseInt(blogIndex)
        return blogPosts.find(({ index }) => index === numBlogIndex)
    },
    getBlogPosts() {
        return new Promise((resolve, reject) => {
            resolve(DATASTORE.BLOGPOSTS);
        });
    },
}

export default BlogApiService